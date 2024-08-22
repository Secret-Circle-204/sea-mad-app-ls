    // import { readItems, readItem } from '@directus/sdk'
    // import getAssetURL from '@/lib/get-asset-url'
    // import { notFound } from 'next/navigation'

export default async function ServicesPage () {
    return (
        <>
 <div>
    services
 </div>
        </>
    )
}


















// import RelatedPost from '@/components/Blog/RelatedPost'
// import SharePost from '@/components/Blog/SharePost'
// import TagButton from '@/components/Blog/TagButton'
// import BookForm from '@/components/Contact/BookForm'
// import Image from 'next/image'
// import directus from '@/lib/directus'
// import { readItems, readItem } from '@directus/sdk'
// import getAssetURL from '@/lib/get-asset-url'
// import { notFound } from 'next/navigation'
// import RelatedExplore from '../../../components/Blog/RelatedExplore'
// // import {
// //   Card,
// //   CardHeader,
// //   CardBody,
// //   CardFooter,
// //   Image,
// //   Button
// // } from '@nextui-org/react'
// // async function getClientDetail () {
// //   try {
// //     const clientDtl = await directus.request(
// //       readItems('explore', {
// //         // filter: {
// //         //   id: { _eq: id }
// //         // },
// //         fields: [
// //           'id',
// //           'main_image',
// //           'title',
// //           'date_created',
// //           'desc',
// //           'summary',
// //           'block',
// //           'client_name',
// //           'gallery',
// //           'gallery.*.*',
// //           'sort'
// //           // 'related_projects',
// //           // 'related_projects.*.*',

// //           // { related_projects: ['name'] }
// //         ]
// //       }),
// //       {
// //         // next: { revalidate: 7 }
// //         // next: {
// //         //   revalidate: 1
// //         // }
// //         cache: 'no-store'
// //       }
// //     )
// //     // console.log(clientDtl)
// //     return clientDtl
// //   } catch (error) {
// //     notFound('Error fetching data Mr Hamza :', error)
// //   }
// // }

// // async function getProject (id) {
// //   try {
// //     const explor = await directus.request(
// //       readItem('posts', id, {
// //         filter: {
// //           id: { _eq: id }
// //         },
// //         fields: [
// //           'content',
// //           'title',
// //           'slug',
// //           'id',
// //           'author',
// //           'author.*',
// //           'date_published',
// //           'summary',
// //           'gallery',
// //           'gallery.*.*',
// //           'sort',
// //           'image',
// //           'image.*.*'
// //           // 'related_projects.*.*',

// //           // 'service_related.*.*'
// //         ],
// //         // sta: ['b'],
// //         // status: ['published']
// //         // limit: -1
// //         sort: ['sort']
// //       }),
// //       {
// //         // next: { revalidate: 7 }
// //         // next: {
// //         //   revalidate: 1
// //         // }
// //         cache: 'no-store'
// //       }
// //     )

// //     console.log('explor', explor)
// //     return explor
// //   } catch (error) {
// //     notFound('Error fetching data Mr Hamza :', error)
// //   }
// // }



// const explor = [

//   {
//     id: 1,
//     title: 'Our Service ',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.',
//     summary:'lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. ',
//     image:  '/images/blog/blog-details-01.jpg' ,
//     client: 'Client 1',
//     date: '2022-01-01',
//     tags: ['tag 1', 'tag 2', 'tag 3'],
//     file: [
//        '/images/file-download.pdf',
//        '/images/file-download.pdf',
//        '/images/file-download.pdf'
//     ],
//      pdf:[
//       {
//         id: 1,
//         name:'FILE - NAME - SEA-MAD',
//         file: '/images/file-download.pdf'
//       },
//       {
//         id: 2,
//         name:'FILE - NAME - SEA-MAD',
//         file: '/images/file-download.pdf'
//       },
//       {
//         id: 3,
//         name:'FILE - NAME - SEA-MAD',
//         file: '/images/file-download.pdf'
//       },
//      ],
//     related_projects: [
//       {
//         id: 1,
//         title: 'FILE - NUMBER - 1'
//       },
//       {
//         id: 1,
//         title: 'FILE - NUMBER - 2'
//       }
//     ],
//     related_explore: [
//       {
//         id: 1,
//         title: 'FILE - NUMBER - 1'
//       },
//       {
//         id: 2,
//         title: 'FILE - NUMBER - 2'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'FILE - NUMBER - 2',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.',
//     summary:'lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. ',
//     image: '/images/blog/post-02.jpg',
//     client: 'Client 2',
//     date: '2022-01-01',
//     tags: ['tag 1', 'tag 2', 'tag 3'],
//     file: [
//       '/images/file-download.pdf',
//       '/images/file-download.pdf',
//       '/images/file-download.pdf'
//    ],
//     pdf:[
//      {
//        id: 1,
//        name:'FILE - NAME - SEA-MAD',
//        file: '/images/file-download.pdf'
//      },
//      {
//        id: 2,
//        name:'FILE - NAME - SEA-MAD',
//        file: '/images/file-download.pdf'
//      },
//      {
//        id: 3,
//        name:'FILE - NAME - SEA-MAD',
//        file: '/images/file-download.pdf'
//      },
//     ],
//     related_projects: [
//       {
//         id: 1,
//         title: 'FILE - NUMBER - 1'
//       }
//     ],
//     related_explore: [
//       {
//         id: 2,
//         title: 'FILE - NUMBER - 2'
//       }
//     ]
//   },  
    

// ]
// export default async function BlogSidebarPage ({ params }) {
//   // const explor = await getProject(params.id)
  
//   // const image = cld?.gallery?.map((item) => item.main_image)

//   // console.log(cld)
//   // console.log(proj)
//   // console.log(params.id)
//   // console.log(params)
//   return (
//     <>
      
//         <section
//           className=' jumbotron breadcumb relative  h-[60vh]  object-cover items-center bg-center object-center bg-cover w-full'
//           style={{
//             backgroundImage: `url(${explor[0]?.image})`,
//           }}
//         >
//           <div className=' absolute bottom-4  left-0 right-0 items-center  text-center     '>
//             <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
//               <div className='items-center  text-center    '>
//                 <h1 className='lg:text-left ml-[-25px] items-center first-letter:capitalize  text-center    '>
//                   {explor?.title}
//                 </h1>
//               </div>
      
//               <div className=' text-sm font-light text-center items-center '>
//                 {/* <span className='first-letter:capitalize'>{serv?.title}</span> */}
//               </div>
//             </div>
//           </div>
//         </section>
//       <div className=''>
//         {/* {explor?.related_client?.map(proj => ( */}
//         <RelatedExplore key={explor?.id} explors={explor} />
//         {/* // ))} */}
//       </div>
//       {/* <Testimony /> */}
//     </>
//   )
// }
