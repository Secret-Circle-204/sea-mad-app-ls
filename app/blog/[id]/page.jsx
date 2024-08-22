import RelatedPost from '@/components/Blog/RelatedPost'
import SharePost from '@/components/Blog/SharePost'
import TagButton from '@/components/Blog/TagButton'
import BookForm from '@/components/Contact/BookForm'
import Image from 'next/image'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'
import RelatedExplore from '../../../components/Blog/RelatedExplore'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Button
// } from '@nextui-org/react'
// async function getClientDetail () {
//   try {
//     const clientDtl = await directus.request(
//       readItems('explore', {
//         // filter: {
//         //   id: { _eq: id }
//         // },
//         fields: [
//           'id',
//           'main_image',
//           'title',
//           'date_created',
//           'desc',
//           'summary',
//           'block',
//           'client_name',
//           'gallery',
//           'gallery.*.*',
//           'sort'
//           // 'related_projects',
//           // 'related_projects.*.*',

//           // { related_projects: ['name'] }
//         ]
//       }),
//       {
//         // next: { revalidate: 7 }
//         // next: {
//         //   revalidate: 1
//         // }
//         cache: 'no-store'
//       }
//     )
//     // console.log(clientDtl)
//     return clientDtl
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }
// }



// async function getProject (id) {
//   try {
//     const explor = await directus.request(
//       readItem('posts', id, {
//         filter: {
//           id: { _eq: id }
//         },
//         fields: [
//           'content',
//           'title',
//           'slug',
//           'id',
//           // 'author',
//           // 'author.*',

//           'video_url',
//           'date_published',
//           'summary',
//           'gallery',
//           'gallery.*.*',
//           'sort',
//           'image',
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
//         next: {
//           revalidate: 10
//         }
//         // cache: 'no-store'
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
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s standard ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ',
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
export default async function BlogSidebarPage ({ params }) {
  // const explor = [...blogData].find(explor => explor?.id === params?.id) //find(plan => plan?.id === params?.id)
   const explo = explor && explor?.map((explor) => {

    return explor

   })
  console.log('explor', explo)
 
  // const explor = await getProject(params.id)
  // const image = cld?.gallery?.map((item) => item.main_image)

  // console.log(cld)
  // console.log(proj)
  // console.log(params.id)
  // console.log(params)
  return (
    <>
      
    
    {explo ? (
<>
      <section
      className=' h-[50vh]  object-cover items-center bg-center object-center bg-cover w-full'
        style={{
          backgroundImage: `url(${explo[0]?.image})`,
        }}
      >
      </section>
        <div className='  container items-start text-left flex flex-wrap '>
          <div
            className=' p-10 wow fadeInUp  mx-auto  text-center  '
            data-wow-delay='.2s'
            >
            <h1 className='  text-blue3 drob-shadows max-w-xl mb-5 text-3xl font-bold '>
              {explo[0]?.title}
            </h1>
          </div>
        </div>
      <div className=' max-w-[1200px]   py-10 mx-auto px-4'>
        <p className='uppercase font-bold'>Lorem ipsum dolor sit amet.</p>
        {/* <p className='text-wrap'>{explo[0]?.content}</p> */}
         <div className='text-justify '>
        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos! Iste, beatae, sint eius ad, praesentium odit assumenda laborum est modi incidunt quas! Optio vitae, exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
           <br />
        <p className='text-wrap'>Lorem   exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
         </div>
         <br />
        <p className='uppercase font-bold'>Lorem ipsum dolor sit amet.</p>
        <p className='text-wrap'>Lorem i  quas! Optio vitae, exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos! Iste, beatae, sint eius ad, praesentium odit assumenda laborum est modi incidunt quas! Optio vitae, exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
      <br />
        <p className='text-wrap'>Lorem ip  Optio vitae, exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos! Iste, st modi incidunt quas! Optio vitae, exercitationem repellat alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
        <br />
        <p className='uppercase font-bold'>Lorem ipsum dolor sit amet.</p>
        {/* <p>{explo[0]?.content}</p> */}
         <div className='text-justify '>
        <p className='text-wrap'>Lorem ipsum dolor sit amet co  alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
           <br />
        <p className='text-wrap'>Lorem   exercitationem repellat alias itaque ofa et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
         </div>
         <br />
        <p className='uppercase font-bold'>Lorem ipsum dolor sit amet.</p>
        <p className='text-wrap'>Lorem i  quas! Optio vitae, exercitationem repellat alias itaque ofa et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
        <p className='text-wrap'>Lorem ipsum dolor sit amet co  alias itaque ofa et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
      <br />
        <p className='text-wrap'>Lorem ip  Optio vitae, exercitationem repellat alias itaque ofa et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
        <p className='text-wrap'>Lorem ipsum dolor sit amet co  alias itaque officiis ut incidunt mollitia accusantium, omnis expedita et modi? Nam blanditiis similique temporibus ab, totam possimus natus culpa, veritatis unde itaque eligendi voluptatibus minus maxime dolores vero?</p>
      </div>
           

</>
    ):  ( <div>data Loading...</div>)}
 
 </>
)
}
