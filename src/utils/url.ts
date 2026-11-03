/**
 * Prefixes a path to a file in `public/` with the configured `base`, so links keep working
 * when the site is served from a sub-path (e.g. a GitHub Pages project site).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** Hostname without the `www.` prefix, e.g. `oreilly.com`. */
export function displayHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '');
}
