// import { notFound } from 'next/navigation'


import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import BoatDetails from '@/components/BoatsComponent/BoatDetails'
import BoatSection2 from '@/components/BoatsComponent/BoatSection2'
// import directus from '@/lib/directus'
// import Link from 'next/link'
import Image from 'next/image'


// async function getBoat(slug) {
//   try {
//     const boat = await directus.request(readItem('the_boats',slug, {
//       fields: ['*', 'specification.item.*.*', "related_boat.*",'boat_details.*.*', 'boat_details.content', 'boat_details.title'],
//       filter: {
//         slug: {
//           _eq: slug
//         }
//       },
//       sort: ['sort'],
//       next: { revalidate: 1 }
//     }))
//     return boat
//   } catch (error) {
//     notFound()
//   }
// }

const boats = [
  {
    id: 1,
    slug: 'avao-boat',
    status: 'published',
    sort: null,
    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
    date_created: '2024-08-17T03:39:28.395Z',
    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
    date_updated: '2024-08-19T06:33:57.190Z',
    boat_name: 'AVAO BOAT',
    main_image: '/images/boat-2.jpg',
    nots: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio, consectetur exercitationem quo illo laudantium quidem dolor magnam molestiae provident, ipsam, optio aliquam. Facere accusantium, nostrum delectus tenetur ipsa ea?',
    specification_image: '57725bce-d328-4102-a3d5-9fb8d66b692c',
    title: 'Boat Specification',
    subtitle: 'The boat specifications are as follows . lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    boat_details: [
      {
        id: '111cb2e0-33a1-4e0d-b5c0-55f5cf10b9ef',
        status: 'published',
        sort: 1,
        date_created: '2024-08-19T06:24:08.115Z',
        date_updated: '2024-08-19T06:52:09.027Z',
        content: 'The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy',
        direction: 'null',
        title: 'About',
        
        Boat_images: []
      },
      {
        id: '06fed43a-69b3-45bf-93ce-287cf989960b',
        status: 'published',
        sort: 2,
        date_created: '2024-08-19T06:24:51.431Z',
        date_updated: '2024-08-19T06:33:57.241Z',
        content: 'The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy',
        direction: 'reverse',
        title: 'Reception',
      
        Boat_images: []
      }
    ],
    
  },
      

    {
      id: '111cb2e0-33a1-4e0d-b5c0-55f5cf10b9ef',
      status: 'published',
      sort: 1,
      date_created: '2024-08-19T06:24:08.115Z',
      date_updated: '2024-08-19T06:52:09.027Z',
      images: [
        {
          src: '/images/boat/1.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/2.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/1.png',
          alt: 'sea-island'
        },
  
        {
          src: '/images/boat/3.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/3.png',
          alt: 'sea-island'
        }
      ]
       
    },
    {
      id: '06fed43a-69b3-45bf-93ce-287cf989960b',
      status: 'published',
      sort: 2,
      date_created: '2024-08-19T06:24:51.431Z',
      date_updated: '2024-08-19T06:33:57.241Z',
      content: 'The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy',
      direction: 'reverse',
      title: 'Reception',
      related_boat: {
        slug: 'avao-boat',
        status: 'published',
        sort: null,
        user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_created: '2024-08-17T03:39:28.395Z',
        user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_updated: '2024-08-19T06:33:57.190Z',
        boat_name: 'AVAO BOAT',
        main_image: '3f4062f2-fe3e-4a4f-9e49-309256689ee8',
        nots: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio, consectetur exercitationem quo illo laudantium quidem dolor magnam molestiae provident, ipsam, optio aliquam. Facere accusantium, nostrum delectus tenetur ipsa ea?',
        specification_image: '57725bce-d328-4102-a3d5-9fb8d66b692c',
        title: 'Boat Specification',
        subtitle: 'The boat specifications are as follows . lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
       
      },
      images: [
        {
          src: '/images/boat/1.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/2.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/1.png',
          alt: 'sea-island'
        },
  
        {
          src: '/images/boat/3.png',
          alt: 'sea-island'
        },
        {
          src: '/images/boat/3.png',
          alt: 'sea-island'
        }
      ],
       
    },
 
  
  
  
  
  {
    id: '06fed43a-69b3-45bf-93ce-287cf989960b',
    status: 'published',
    sort: 2,
    date_created: '2024-08-19T06:24:51.431Z',
    date_updated: '2024-08-19T06:33:57.241Z',
    content: 'The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat has a variety of cabin types on each floor of it. All cabins include windows to enjoy',
    direction: 'reverse',
    title: 'Reception',
    related_boat: {
      slug: 'avao-boat',
      status: 'published',
      sort: null,
      user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_created: '2024-08-17T03:39:28.395Z',
      user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_updated: '2024-08-19T06:33:57.190Z',
      boat_name: 'AVAO BOAT',
      main_image: '/images/boat/boat-01.png',
      nots: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio, consectetur exercitationem quo illo laudantium quidem dolor magnam molestiae provident, ipsam, optio aliquam. Facere accusantium, nostrum delectus tenetur ipsa ea?',
      specification_image: '57725bce-d328-4102-a3d5-9fb8d66b692c',
      title: 'Boat Specification',
      subtitle: 'The boat specifications are as follows . lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
     
    },
    images: [ 
      {
       id: '3f4062f2-fe3e-4a4f-9e49-309256689ee8',
       '/images/boat/boat-01.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      {
       id: '57725bce-d328-4102-a3d5-9fb8d66b692c',
       '/images/boat/boat-02.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      
      {
       id: '3f4062f2-fe3e-4a4f-9e49-309256689ee8',
       '/images/boat/boat-01.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      {
       id: '57725bce-d328-4102-a3d5-9fb8d66b692c',
       '/images/boat/boat-02.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      {
       id: '3f4062f2-fe3e-4a4f-9e49-309256689ee8',
       '/images/boat/boat-01.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      {
       id: '57725bce-d328-4102-a3d5-9fb8d66b692c',
       '/images/boat/boat-02.png': 'https://images.unsplash.com/photo-1661956601030-fcb5b7c20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },


 ],
    Boat_images: []
  },

   
]
export default function BoatPage({ params }) {
  // const boat = [
  //   {
  //     id: 1,
  //     name: 'AVAO',
  //     slug: 'betelgueser-boat'
  //   },
  //   {
  //     id: 2,
  //     name: 'AVAO-2',
  //     slug: 'white-whale-boat'
  //   },
  //   {
  //     id: 3,
  //     name: 'AVAO-3',
  //     slug: 'hammerhead-boat'
  //   }
  // ]
  // const boat = await getBoat(params.slug)

  // "boat_re": [
  //   {
  //     "id": 1,
  //     "collection": "block_hero",
  //     "the_boats_slug": {
  //       "slug": "avao-boat",
  //       "status": "published",
  //       "sort": null,
  //       "user_created": "bbd5aed9-205b-4c1c-8cdc-b10467bb1476",
  //       "date_created": "2024-08-17T03:39:28.395Z",
  //       "user_updated": "bbd5aed9-205b-4c1c-8cdc-b10467bb1476",
  //       "date_updated": "2024-08-17T06:08:18.711Z",
  //       "boat_name": "AVAO BOAT",
  //       "main_image": "3f4062f2-fe3e-4a4f-9e49-309256689ee8",
  //       "boat_re": [
  //         1
  //       ]
  //     },
  //     "item": {
  //       "content": "We are a team of experienced developers and designers who build beautiful, performant, and secure web and mobile applications.",
  //       "headline": "<p>Get to <em>MVP</em> faster</p>",
  //       "id": "6aa654f5-b55f-4436-a35c-1f989f26268a",
  //       "image": "df0745c2-b6e3-4b37-b64d-55a4eb0033ab",
  //       "title": "boat ttttitle",
  //       "image_position": "left",
  //       "button_group": "aed01afb-490d-42d3-bbf4-cf64081494b9",
  //       "images": [
  //         1,
  //         2,
  //         3,
  //         4,
  //         5
  //       ]
  //     }
  //   }
  // ]

   const boat = boats[0]
  console.log('Boat-page-dataa', boat)
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${boat?.main_image})`
        }}
        className=' object-cover object-center bg-center items-center text-center justify-center flex flex-col flex-wrap w-screen h-[80vh]  bg-cover   z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
      ></section>

      <section className='  pt-10 sm:pt-16 '>
        <section className=' max-w-[1250px] mx-auto '>
          {/* <h1 className='text-3xl text-blue3'>{boat?.boat_name} </h1> */}



          <div className='px-3'>
            <BoatSection2  boats={boat}  title={boat?.title} subtitle={boat?.subtitle} main_image={boat?.specification_image} />
          </div>

          <div className='py-10'>
            <BoatDetails    boats={boat?.boat_details}  />
          </div>

          {/* <Link href={`/${boat?.slug}`}>{boat?.[0]?.boat_name}</Link> */}
        </section>




        {/* notes section */}
        <section className=' py-16 max-w-[1250px] mx-auto items-center text-center justify-center  '>
          <div className=' px-3 py-6 bg-gray-200  '>
            <h1 className='text-3xl  text-blue3'>Notes</h1>
            <p className='px-3 text-left'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              odio, consectetur exercitationem quo illo laudantium quidem dolor
              magnam molestiae provident, ipsam, optio aliquam. Facere
              accusantium, nostrum delectus tenetur ipsa ea?
            </p>
          </div>
        </section>
        {/* end of notes section */}
      </section>
    </>
  )
}
