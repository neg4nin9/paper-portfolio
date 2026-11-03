/* Real screenshots, picked up by filename.
 *
 * Any image dropped into src/assets/projects/ whose name matches a project
 * slug (see PROJECT_SLUGS in src/site.js) replaces that project's drawn
 * plate — no code change needed. Extension does not matter; .jpg, .png,
 * .webp and .avif all work, lowercase.
 *
 *   src/assets/projects/linktrim.jpg      -> first plate
 *   src/assets/projects/crfiguras.webp    -> fourth plate
 *
 * Vite fingerprints and serves them, so the file can be committed as-is.
 * While the folder has no match for a slug, the SVG drawing stays. */

const files = import.meta.glob('./assets/projects/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const bySlug = {}
for (const [path, url] of Object.entries(files)) {
  const file = path.split('/').pop() ?? ''
  const slug = file.replace(/\.[^.]+$/, '').toLowerCase()
  bySlug[slug] = url
}

export function projectImage(slug) {
  return bySlug[slug] ?? null
}
