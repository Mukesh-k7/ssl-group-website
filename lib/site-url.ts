/** Production site — https://www.sslgroup.in */
export const SITE_URL = "https://www.sslgroup.in";
export const SITE_DOMAIN = "www.sslgroup.in";

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
