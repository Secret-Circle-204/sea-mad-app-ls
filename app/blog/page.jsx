// import SectionTitle from '../Common/SectionTitle'
// import SingleBlog from './SingleBlog'
// import explorData from '@/components/Blog/explorData'
import ExplorCard from '@/components/Blog/ExplorCard'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'

// async function getProject (id) {
//   try {
//     const explor = await directus.request(
//       readItems('posts', id, {
//         filter: {
//           id: { _eq: id }
//         },
//         fields: [
//           'content',
//           'title',
//           'date_published',
//           'image',
//           'video_url',
//           'id',

//           'summary',

//           'sort',
//           'image.*.*'
//           // 'related_projects.*.*',

//           // 'service_related.*.*'
//         ],
//         // sta: ['b'],
//         // status: ['published']
//         // limit: -1
//         sort: ['sort']
//       }),
//       {
//         // next: { revalidate: 7 }
//         // next: {
//         //   revalidate: 1
//         // }
//         // cache: 'no-store'
//         next: {
//           revalidate: 3000
//         }
//       }
//     )

//     console.log('explor', explor)
//     return explor
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }
// }
const explor = [
  {
    id: 1,
    title: 'Marine Life',
    date_published: '28-05-2024',
    content:
      'The Red Sea, al-Baḥr al-ʾAḥmar has brilliant soft coral gardens and millions of anthias are synonymous with the perception of....',
    image: '/images/blog-1.jpg',
    // author: {
    //   name: 'Samuyl Joshi',
    //   image: '/images/blog/author-01.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['creative'],
    publishDate: '28-05-2024'
  },
  {
    id: 2,
    title: 'Sharks on the sea',
    date_published: '28-05-2024',
    content: 'Shark Diving in the Red Sea: A Must-Do Experience for Divers...',
    image: '/images/blog-2.jpg',
    // author: {
    //   name: 'Musharof Chy',
    //   image: '/images/blog/author-02.png',
    //   designation: 'Content Writer'
    // },
    // tags: ['computer'],
    publishDate: '28-05-2024'
  },
  {
    id: 3,
    title: ' Corals in the Red Sea',
    date_published: '28-05-2024',
    content:
      'Corals come in vast and confusing number of sizes, shapes and colours. Same species are easily confused due to their..',
    image: '/images/blog-3.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 4,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s standard ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ',

      image: '/images/blog-1.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 5,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s standard ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ',
    image: '/images/blog-2.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 6,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s standard ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ',
    image: '/images/blog-3.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  }
]
export default async function ExplorPages( { params } ) {
  // const explor =  [...blogData ].find(explor => explor.id === params?.id )
  return (
    <section
      id='blog'
      className='bg-primary/5 max-w-[1300px] mx-auto px-4 py-16 md:py-20 lg:py-28'
    >
      {/* <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        /> */}

      <div className='mb-10 flex flex-col items-center justify-center text-center'>
        <h1 className=' text-xl font-bold text-blue3 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
          Blog
        </h1>
        <p className='text-body-color dark:text-gray-300 mb-8'>
          Introduction to the Red Sea The Red Sea, also known as the Gulf of
          Aden,
        </p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3'>
          {explor?.map(explor => (
            <div key={explor?.id} className='w-full'>
              <ExplorCard explor={explor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
