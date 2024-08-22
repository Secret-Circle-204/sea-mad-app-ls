// import RelatedPost from '@/components/Blog/RelatedPost'
// import SharePost from '@/components/Blog/SharePost'
// import TagButton from '@/components/Blog/TagButton'
// import BookForm from '@/components/Contact/BookForm'
import Image from 'next/image'
// import directus from '@/lib/directus'
// import { readItems, readItem } from '@directus/sdk'
// import getAssetURL from '@/lib/get-asset-url'
// import { notFound } from 'next/navigation'
import RelatedExplore from '@/components/Blog/RelatedExplore'


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
//           'author',
//           'author.*',
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
//         // next: {
//         //   revalidate: 1
//         // }
//         cache: 'no-store'
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
    title: 'Our Service ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.',
    summary:'lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. ',
    image:  '/images/blog/blog-details-01.jpg' ,
    client: 'Client 1',
    date: '2022-01-01',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    file: [
       '/images/file-download.pdf',
       '/images/file-download.pdf',
       '/images/file-download.pdf'
    ],
     pdf:[
      {
        id: 1,
        name:'FILE - NAME - SEA-MAD',
        file: '/images/file-download.pdf'
      },
      {
        id: 2,
        name:'FILE - NAME - SEA-MAD',
        file: '/images/file-download.pdf'
      },
      {
        id: 3,
        name:'FILE - NAME - SEA-MAD',
        file: '/images/file-download.pdf'
      },
     ],
    related_projects: [
      {
        id: 1,
        title: 'FILE - NUMBER - 1'
      },
      {
        id: 1,
        title: 'FILE - NUMBER - 2'
      }
    ],
    related_explore: [
      {
        id: 1,
        title: 'FILE - NUMBER - 1'
      },
      {
        id: 2,
        title: 'FILE - NUMBER - 2'
      }
    ]
  },
  {
    id: 2,
    title: 'FILE - NUMBER - 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.',
    summary:'lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis   dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. ',
    image: '/images/blog/post-02.jpg',
    client: 'Client 2',
    date: '2022-01-01',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    file: [
      '/images/file-download.pdf',
      '/images/file-download.pdf',
      '/images/file-download.pdf'
   ],
    pdf:[
     {
       id: 1,
       name:'FILE - NAME - SEA-MAD',
       file: '/images/file-download.pdf'
     },
     {
       id: 2,
       name:'FILE - NAME - SEA-MAD',
       file: '/images/file-download.pdf'
     },
     {
       id: 3,
       name:'FILE - NAME - SEA-MAD',
       file: '/images/file-download.pdf'
     },
    ],
    related_projects: [
      {
        id: 1,
        title: 'FILE - NUMBER - 1'
      }
    ],
    related_explore: [
      {
        id: 2,
        title: 'FILE - NUMBER - 2'
      }
    ]
  },  
    

]
export default async function BlogSidebarPage ({ params }) {
  // const explor = await getProject(params.id)
  
  // const image = cld?.gallery?.map((item) => item.main_image)

  // console.log(cld)
  // console.log(proj)
  // console.log(params.id)
  // console.log(params)
  return (
    <>
      
        <section
          className=' jumbotron breadcumb relative  h-[60vh]  object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${explor[0]?.image})`,
          }}
        >
          <div className=' absolute bottom-4  left-0 right-0 items-center  text-center     '>
            <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <div className='items-center  text-center    '>
                <h1 className='lg:text-left ml-[-25px] items-center first-letter:capitalize  text-center    '>
                  {explor?.title}
                </h1>
              </div>
      
              <div className=' text-sm font-light text-center items-center '>
                {/* <span className='first-letter:capitalize'>{serv?.title}</span> */}
              </div>
            </div>
          </div>
        </section>
      <div className=''>
        {/* {explor?.related_client?.map(proj => ( */}
        <RelatedExplore key={explor?.id} explors={explor} />
        {/* // ))} */}
      </div>
      {/* <Testimony /> */}
    </>
  )
}





// import RelatedPost from '@/components/Blog/RelatedPost'
// import SharePost from '@/components/Blog/SharePost'
// import TagButton from '@/components/Blog/TagButton'
// import BookForm from '@/components/Contact/BookForm'
// import Image from 'next/image'

// import { readItems } from '@/lib/directus'

// // export async function generateStaticParams() {
// //   const services = await readItems('os_services', {
// //     fields: ['id']
// //   })
// //   return services.map((service) => ({
// //     id: service.id
// //   }))
// // }

// const ServicesPage = ({ params }) => {
//   return (
//     <>



//       <div className='w-full max-w-[1250px] mx-auto  px-[30px]  pt-[180px] pb-[120px] '>
//         <div>
//           <div className='  flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10'>
//             <h2 className='mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight'>
//               Our Services
//             </h2>

//             <div className='mb-5'>
//               <a
//                 href={`services/${params.id}`}
//                 className='inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white'
//               >
//                 Design
//               </a>
//             </div>
//           </div>
//           <div>
//             <p className='mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
//               Duis aute irure dolor in reprehenderit in voluptate velit
//               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//               occaecat cupidatat.
//             </p>
//             <div className='mb-10 w-full overflow-hidden rounded'>
//               <div className='relative aspect-[97/60] w-full sm:aspect-[97/44]'>
//                 <Image
//                   src='/images/blog/blog-details-01.jpg'
//                   alt='image'
//                   fill
//                   className='h-full w-full object-cover object-center'
//                 />
//               </div>
//             </div>
//             <p className='mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//               do eiusmod tempor incididunt ut labore et dolore magna
//               aliqua. Quis enim lobortis scelerisque fermentum. Neque
//               sodales ut etiam sit amet. Ligula ullamcorper
//               <strong className='text-primary dark:text-white'>
//                 {' '}
//                 malesuada{' '}
//               </strong>
//               proin libero nunc consequat interdum varius. Quam
//               pellentesque nec nam aliquam sem et tortor consequat.
//               Pellentesque adipiscing commodo elit at imperdiet.
//             </p>
//             <p className='mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
//               Semper auctor neque vitae tempus quam pellentesque nec.
//               <span className='text-primary underline dark:text-white'>
//                 {' '}
//                 Amet dictum sit amet justo{' '}
//               </span>
//               donec enim diam. Varius sit amet mattis vulputate enim nulla
//               aliquet porttitor. Odio pellentesque diam volutpat commodo
//               sed.
//             </p>
//             <h3 className='font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight'>
//               Digital marketplace for Ui/Ux designers.
//             </h3>
//             <p className='mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
//               consectetur adipiscing elit in voluptate velit esse cillum
//               dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//               mattis vulputate cupidatat.
//             </p>
//             <ul className='mb-10 list-inside list-disc text-body-color'>
//               <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>
//                 Consectetur adipiscing elit in voluptate velit.
//               </li>
//               <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>
//                 Mattis vulputate cupidatat.
//               </li>
//               <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>
//                 Vulputate enim nulla aliquet porttitor odio pellentesque
//               </li>
//               <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>
//                 Ligula ullamcorper malesuada proin
//               </li>
//             </ul>
//             <div className='relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9'>
//               <p className='text-center text-base font-medium italic text-body-color'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                 sed do eiusmod incididunt utionals labore et dolore magna
//                 aliqua. Quis lobortis scelerisque fermentum, The Neque ut
//                 etiam sit amet.
//               </p>
//               <span className='absolute left-0 top-0 z-[-1]'>
//                 <svg
//                   width='132'
//                   height='109'
//                   viewBox='0 0 132 109'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     opacity='0.5'
//                     d='M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z'
//                     fill='url(#paint0_linear_111:606)'
//                   />
//                   <path
//                     opacity='0.5'
//                     d='M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z'
//                     fill='url(#paint1_linear_111:606)'
//                   />
//                   <defs>
//                     <linearGradient
//                       id='paint0_linear_111:606'
//                       x1='94.7523'
//                       y1='82.0246'
//                       x2='8.40951'
//                       y2='52.0609'
//                       gradientUnits='userSpaceOnUse'
//                     >
//                       <stop stopColor='white' stopOpacity='0.06' />
//                       <stop
//                         offset='1'
//                         stopColor='white'
//                         stopOpacity='0'
//                       />
//                     </linearGradient>
//                     <linearGradient
//                       id='paint1_linear_111:606'
//                       x1='90.3206'
//                       y1='58.4236'
//                       x2='1.16149'
//                       y2='50.8365'
//                       gradientUnits='userSpaceOnUse'
//                     >
//                       <stop stopColor='white' stopOpacity='0.06' />
//                       <stop
//                         offset='1'
//                         stopColor='white'
//                         stopOpacity='0'
//                       />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </span>
//               <span className='absolute right-0 bottom-0 z-[-1]'>
//                 <svg
//                   width='53'
//                   height='30'
//                   viewBox='0 0 53 30'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <circle
//                     opacity='0.8'
//                     cx='37.5'
//                     cy='37.5'
//                     r='37.5'
//                     fill='#4A6CF7'
//                   />
//                   <mask
//                     id='mask0_111:596'
//                     style={{ maskType: 'alpha' }}
//                     maskUnits='userSpaceOnUse'
//                     x='0'
//                     y='0'
//                     width='75'
//                     height='75'
//                   >
//                     <circle
//                       opacity='0.8'
//                       cx='37.5'
//                       cy='37.5'
//                       r='37.5'
//                       fill='#4A6CF7'
//                     />
//                   </mask>
//                   <g mask='url(#mask0_111:596)'>
//                     <circle
//                       opacity='0.8'
//                       cx='37.5'
//                       cy='37.5'
//                       r='37.5'
//                       fill='url(#paint0_radial_111:596)'
//                     />
//                     <g opacity='0.8' filter='url(#filter0_f_111:596)'>
//                       <circle
//                         cx='40.8089'
//                         cy='19.853'
//                         r='15.4412'
//                         fill='white'
//                       />
//                     </g>
//                   </g>
//                   <defs>
//                     <filter
//                       id='filter0_f_111:596'
//                       x='4.36768'
//                       y='-16.5881'
//                       width='72.8823'
//                       height='72.8823'
//                       filterUnits='userSpaceOnUse'
//                       colorInterpolationFilters='sRGB'
//                     >
//                       <feFlood
//                         floodOpacity='0'
//                         result='BackgroundImageFix'
//                       />
//                       <feBlend
//                         mode='normal'
//                         in='SourceGraphic'
//                         in2='BackgroundImageFix'
//                         result='shape'
//                       />
//                       <feGaussianBlur
//                         stdDeviation='10.5'
//                         result='effect1_foregroundBlur_111:596'
//                       />
//                     </filter>
//                     <radialGradient
//                       id='paint0_radial_111:596'
//                       cx='0'
//                       cy='0'
//                       r='1'
//                       gradientUnits='userSpaceOnUse'
//                       gradientTransform='translate(37.5 37.5) rotate(90) scale(40.2574)'
//                     >
//                       <stop stopOpacity='0.47' />
//                       <stop offset='1' stopOpacity='0' />
//                     </radialGradient>
//                   </defs>
//                 </svg>
//               </span>
//             </div>
//             <p className='mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
//               consectetur adipiscing elit in voluptate velit esse cillum
//               dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//               mattis vulputate cupidatat.
//             </p>
//             <div className='items-center justify-between sm:flex'>
//               <div className='mb-5'>
//                 <h5 className='mb-3 text-sm font-medium text-body-color'>
//                   Popular Tags :
//                 </h5>
//                 <div className='flex items-center'>
//                   <TagButton text='Design' />
//                   <TagButton text='Development' />
//                   <TagButton text='Info' />
//                 </div>
//               </div>
//               <div className='mb-5'>
//                 <h5 className='mb-3 text-sm font-medium text-body-color sm:text-right'>
//                   Share this post :
//                 </h5>
//                 <div className='flex items-center sm:justify-end'>
//                   <SharePost />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className='w-full px-4 lg:w-4/12'>
//               <div className='mt-12 mb-10 rounded-md bg-primary bg-opacity-5 p-6 dark:bg-opacity-5 lg:mt-0'>
//                 <form className='flex items-center justify-between'>
//                   <input
//                     type='text'
//                     placeholder='Search here...'
//                     className='palceholder-body-color mr-5 w-full rounded-md border border-transparent py-3 px-5 text-base font-medium text-body-color outline-none focus:border-primary dark:bg-white dark:bg-opacity-10'
//                   />
//                   <button className='flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-md bg-primary text-white'>
//                     <svg
//                       width='20'
//                       height='18'
//                       viewBox='0 0 20 18'
//                       fill='none'
//                       xmlns='http://www.w3.org/2000/svg'
//                     >
//                       <path
//                         d='M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z'
//                         fill='white'
//                       />
//                     </svg>
//                   </button>
//                 </form>
//               </div>
//               <div className='mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10'>
//                 <h3 className='border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white'>
//                   Related Posts
//                 </h3>
//                 <ul className='p-8'>
//                   <li className='mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10'>
//                     <RelatedPost
//                       title='Best way to boost your online sales.'
//                       image='/images/blog/post-01.jpg'
//                       slug='#'
//                       date='12 Feb 2025'
//                     />
//                   </li>
//                   <li className='mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10'>
//                     <RelatedPost
//                       title='50 Best web design tips & tricks that will help you.'
//                       image='/images/blog/post-02.jpg'
//                       slug='#'
//                       date='15 Feb, 2024'
//                     />
//                   </li>
//                   <li>
//                     <RelatedPost
//                       title='The 8 best landing page builders, reviewed'
//                       image='/images/blog/post-03.jpg'
//                       slug='#'
//                       date='05 Jun, 2024'
//                     />
//                   </li>
//                 </ul>
//               </div>
//               <div className='mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10'>
//                 <h3 className='border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white'>
//                   Popular Category
//                 </h3>
//                 <ul className='py-6 px-8'>
//                   <li>
//                     <a
//                       href='#0'
//                       className='mb-3 inline-block text-base font-medium text-body-color hover:text-primary'
//                     >
//                       Tailwind Templates
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href='#0'
//                       className='mb-3 inline-block text-base font-medium text-body-color hover:text-primary'
//                     >
//                       Landing page
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href='#0'
//                       className='mb-3 inline-block text-base font-medium text-body-color hover:text-primary'
//                     >
//                       Startup
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href='#0'
//                       className='mb-3 inline-block text-base font-medium text-body-color hover:text-primary'
//                     >
//                       Business
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href='#0'
//                       className='mb-3 inline-block text-base font-medium text-body-color hover:text-primary'
//                     >
//                       Multipurpose
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className='mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10'>
//                 <h3 className='border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white'>
//                   Popular Tags
//                 </h3>
//                 <div className='flex flex-wrap py-6 px-8'>
//                   <TagButton text='Themes' />
//                   <TagButton text='UI Kit' />
//                   <TagButton text='Tailwind' />
//                   <TagButton text='Startup' />
//                   <TagButton text='Business' />
//                 </div>
//               </div>

//               <BookForm />
//             </div> */}


//     </>
//   )
// }

// export default ServicesPage
