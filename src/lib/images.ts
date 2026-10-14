const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = new Map(
  Object.entries(files).map(([path, url]) => [path.split('/').pop()!, url]),
)

/** Returns the built URL for a filename, or undefined if the photo is not in the repo yet. */
export function resolveImage(name: string): string | undefined {
  return byName.get(name)
}
