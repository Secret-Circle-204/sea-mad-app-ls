export const DIRECTUS_URL =
  process.env.DIRECTUS_URL ?? 'http://localhost:8055' ?? 'http://localhost:8055'
import { createDirectus, rest } from '@directus/sdk'

const directus = createDirectus(DIRECTUS_URL).with(rest())

export default directus
//next:  {revalidate: 240}
