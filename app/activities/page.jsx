// import SectionTitle from '../Common/SectionTitle'
// import SingleBlog from './SingleBlog'
// import explorData from '@/components/Blog/explorData'
import ActivitiePage from '@/components/Activities/ActivitiePage'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'
import Link from 'next/link'

async function getProject (id) {
  try {
    const explor = await directus.request(
      readItems('posts', id, {
        filter: {
          id: { _eq: id }
        },
        fields: [
           
          'title',
          
          // 'related_projects.*.*',

          // 'service_related.*.*'
        ],
        // sta: ['b'],
        // status: ['published']
        // limit: -1
        sort: ['sort']
      }),
      {
        // next: { revalidate: 7 }
        // next: {
        //   revalidate: 1
        // }
        // cache: 'no-store'
        next: {
          revalidate: 3000
        }
      }
    )

    console.log('explor', explor)
    return explor
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

export default async function ExplorPages ({ params }) {
  const explor = await getProject(params.id)

  return (
    



        <div className=' '>
          {/* {explor?.map(explor => ( */}
            {/* <div key={explor?.id} className='w-full'> */}
              <ActivitiePage   />
              {/* <Link href={`/activities/${explor?.id}`}> Read More </Link> */}
            {/* </div> */}
          {/* ))} */}
        </div>
  
 
  )
}
