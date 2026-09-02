/**
 * Utility to resolve static asset paths cleanly across environments.
 * - Local development: returns clean root-relative path (e.g. /images/hero.png)
 * - GitHub Pages production: prefixes NEXT_PUBLIC_BASE_PATH (e.g. /pangasinan-heritage-showcase/images/hero.png)
 */
export function assetPath(path: string): string {
  if (!path) return '';

  // Return absolute or protocol-relative URLs as-is
  if (/^(https?:|\/\/|data:)/i.test(path)) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
}

export default assetPath;

