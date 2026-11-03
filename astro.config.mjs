// @ts-check
import process from 'node:process';

import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// Load deployment settings from an optional `.env` file (see `.env.example`).
// Real environment variables (e.g. in CI) always take precedence.
try {
  process.loadEnvFile();
} catch {
  // No `.env` file — rely on the process environment / defaults.
}

/**
 * Public origin of the deployed site, e.g. `https://username.github.io` or
 * `https://cv.example.com`. Used for canonical and Open Graph URLs.
 */
const site = process.env.SITE_URL || undefined;

/**
 * Sub-path the site is served from. `/` for S3, custom domains and
 * `<username>.github.io` repos; `/<repo-name>` for GitHub Pages project sites.
 */
const base = process.env.BASE_PATH || '/';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [icon()],
});
