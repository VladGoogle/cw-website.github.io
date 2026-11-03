#!/usr/bin/env bash
# Uploads the production build (`dist/`) to an S3 bucket configured for static website hosting.
#
# Usage:
#   S3_BUCKET=my-cv-bucket npm run deploy:s3
#   S3_BUCKET=my-cv-bucket CLOUDFRONT_DISTRIBUTION_ID=E123ABC npm run deploy:s3
#
# Requires the AWS CLI v2 with credentials allowed to write to the bucket
# (and to create invalidations when CloudFront is used).
set -euo pipefail

: "${S3_BUCKET:?Set S3_BUCKET to the target bucket name}"
DIST_DIR="${DIST_DIR:-dist}"

if [[ ! -f "$DIST_DIR/index.html" ]]; then
  echo "No build found in '$DIST_DIR'. Run 'npm run build' first." >&2
  exit 1
fi

# 1. Fingerprinted assets (hashed file names) — safe to cache forever. Uploaded first so the
#    new HTML never references files that are not there yet.
aws s3 sync "$DIST_DIR/_astro" "s3://$S3_BUCKET/_astro" \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

# 2. Everything else (HTML, PDF, favicon, robots.txt) — always revalidated.
aws s3 sync "$DIST_DIR" "s3://$S3_BUCKET" \
  --delete \
  --exclude "_astro/*" \
  --cache-control "public, max-age=0, must-revalidate"

if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"
fi

echo "Deployed '$DIST_DIR' to s3://$S3_BUCKET"
