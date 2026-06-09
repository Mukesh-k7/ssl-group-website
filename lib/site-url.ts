/** Production site — https://www.sslgroup.in */
export const SITE_URL = "http://localhost:3000";
export const SITE_DOMAIN = "localhost:3000";

/**
 * Absolute URL for a path. Root returns https://www.sslgroup.in/
 */
export function getAbsoluteUrl(path = ""): string {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
