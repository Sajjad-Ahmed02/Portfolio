/**
 * Resolve a file in `public/` against the Vite base path.
 *
 * The portfolio is deployed to a GitHub Pages project URL (/Portfolio/), so
 * absolute paths such as "/portrait.svg" would escape the project root.
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
