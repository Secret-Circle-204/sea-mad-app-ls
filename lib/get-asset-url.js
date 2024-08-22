export const NEXT_APP_DIRECTUS_URL =
  process.env.NEXT_APP_DIRECTUS_URL ??
  'http://localhost:8055' ??
  'http://localhost:8055'

export default function getAssetURL (id) {
  // console.log(id)
  if (!id) return null
  return `${NEXT_APP_DIRECTUS_URL}/assets/${id}`
}
