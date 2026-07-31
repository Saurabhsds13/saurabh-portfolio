/**
 * Resolves a file placed in /public against the Vite base path.
 *
 * The site is deployed to a GitHub Pages subdirectory, so absolute paths like
 * "/resume.pdf" break. Vite injects the configured base as
 * import.meta.env.BASE_URL (always with a trailing slash), which keeps these
 * links correct in dev, in preview, and on Pages.
 */
export function assetUrl(fileName) {
  if (!fileName) return null;
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${fileName.replace(/^\/+/, "")}`;
}
