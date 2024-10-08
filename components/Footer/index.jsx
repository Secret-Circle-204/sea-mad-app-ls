'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
// import getAssetURL from '@/lib/get-asset-url'

export default function Footer () {
  const [data, setData] = useState([])
  // const [team_page, setTeam_page] = useState([])

  // const get_page_Data = async () => {
  //   try {
  //     const fetchedTeam_page = await directus.request(
  //       readItems('team_page', {
  //         fields: ['*']
  //       }),
  //       {
  //         // next: { revalidate: 7 }
  //         cache: 'no-store'
  //       }
  //     )
  //     setTeam_page(fetchedTeam_page)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }
  //////////////////////////////////////////////////////////////////////////////###
  // const getData = async () => {
  //   try {
  //     const fetchedFooter = await directus.request(
  //       readItems('footer', {
  //         fields: ['content', 'location', 'phone', 'email', 'facebook']
  //       }),
  //       {
  //         // next: { revalidate: 7 }
  //         cache: 'no-store'
  //       }
  //     )
  //     setData(fetchedFooter)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }

  // useEffect(() => {
  //   getData()
  //   // get_page_Data()
  // }, [])
  //////////////////////////////////////////////////////////////////////////////###

  // console.log('footer', data)
  // console.log('footer_page', footer_page)
  // console.log('footer_data', data.content)

  return (
    <footer className='bg-blue3 text-white'>
      <div className='px-4 pt-16 text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1350px] md:px-24 lg:px-8'>
        <div className='grid text-white gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='text-white sm:col-span-2'>
            <Link href='/' className={` inline-flex items-center `}>
              {/* <h1 className='text-xl font-bold text-white dark:text-white'>
            SEA-MAD
          </h1> */}
              <Image
                src='/images/logo/logo.svg'
                alt='logo'
                width={200}
                height={40}
                className=' -ml-2 text-xl font-bold tracking-wide text-white uppercase'
              />
            </Link>

            <div className='mt-3 lg:max-w-sm'>
              <p className='text-sm text-white'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className='space-y-2 text-white text-sm'>
            <p className='text-base font-bold tracking-wide text-white'>
              <a href="/contact"
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'>
              Contact Us
              </a>
            </p>
            <div className='flex'>
              <p className='mr-1 text-white'>Phone:</p>
              <a
                href='tel:850-123-5021'
                aria-label='Our phone'
                title='Our phone'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                850-123-5021
              </a>
            </div>
            <div className='flex'>
              <p className='mr-1 text-white'>Email:</p>
              <a
                href='mailto:info@lorem.mail'
                aria-label='Our email'
                title='Our email'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                info@lorem.mail
              </a>
            </div>
            <div className='flex'>
              <p className='mr-1 text-white'>Address:</p>
              <a
                href='https://www.google.com/maps'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Our address'
                title='Our address'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span className='text-base font-bold tracking-wide text-white'>
              Social
            </span>
            <div className='flex items-center mt-1 space-x-3'>
              <a
                href='/'
                className='text-white hover:text-white/70 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  fill='currentColor'
                  className='h-5'
                >
                  {' '}
                  <path d='M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z' />
                </svg>
              </a>
              <a
                href='/'
                className='text-white hover:text-white/70 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                  <circle cx='15' cy='15' r='4' />
                  <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
                </svg>
              </a>
              <a
                href='/'
                className='text-white hover:text-white/70 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                  <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                </svg>
              </a>
              <a
                href='/'
                className='text-white hover:text-white/70 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  fill='currentColor'
                  className='h-6'
                >
                  {' '}
                  <path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
                </svg>
              </a>
            </div>
            <p className='mt-4 text-sm text-white hover:texttext-white/70'>
              follow us on social media to get the latest news
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
          <p className='text-sm text-white'>
            © Copyright {new Date().getFullYear()} - All rights reserved.
          </p>
          <div className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            <a
              href='https://www.xtreme-communication.com/'
              className='text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <p>X.Treme Communication</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// <footer className='bg-blue3'>
//   <div className='mx-auto flex flex-row w-full justify-between  max-w-[1250px] px-10 py-16 sm:px-0  '>
//     <div className='  flex flex-col items-start justify-between  '>
//       <Link href='/' className={` flex      hover:opacity-80 `}>
//         {/* <h1 className='text-xl font-bold text-white dark:text-white'>
//           SEA-MAD
//         </h1> */}
//         <Image
//           src='/images/logo/logo.svg'
//           alt='logo'
//           width={250}
//           height={50}
//           className=' items-center'
//         />
//       </Link>
//       <p className='  mt-6 max-w-md text-left   text-white'>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
//         consequuntur amet culpa cum itaque neque.
//       </p>
//     </div>

//     <div className=' '>
//       <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
//         <li>
//           <a className='text-white transition hover:text-white/75' href='#'>
//             {' '}
//             About{' '}
//           </a>
//         </li>

//         <li>
//           <a className='text-white transition hover:text-white/75' href='#'>
//             {' '}
//             Blog{' '}
//           </a>
//         </li>

//         <li>
//           <a className='text-white transition hover:text-white/75' href='#'>
//             {' '}
//             Trips{' '}
//           </a>
//         </li>

//         <li>
//           <a className='text-white transition hover:text-white/75' href='#'>
//             {' '}
//             Book{' '}
//           </a>
//         </li>
//         {/*
//       <li>
//         <a className='text-white transition hover:text-white/75' href='#'>
//           {' '}
//           Projects{' '}
//         </a>
//       </li>

//       <li>
//         <a className='text-white transition hover:text-white/75' href='#'>
//           {' '}
//           Blog{' '}
//         </a>
//       </li> */}
//       </ul>

//       <ul className='mt-12 flex justify-center gap-6 md:gap-8'>
//         <li>
//           <a
//             href='#'
//             rel='noreferrer'
//             target='_blank'
//             className='text-white transition hover:text-white/75'
//           >
//             <span className='sr-only'>Facebook</span>
//             <svg
//               className='h-6 w-6'
//               fill='currentColor'
//               viewBox='0 0 24 24'
//               aria-hidden='true'
//             >
//               <path
//                 fillRule='evenodd'
//                 d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
//                 clipRule='evenodd'
//               />
//             </svg>
//           </a>
//         </li>

//         <li>
//           <a
//             href='#'
//             rel='noreferrer'
//             target='_blank'
//             className='text-white transition hover:text-white/75'
//           >
//             <span className='sr-only'>Instagram</span>
//             <svg
//               className='h-6 w-6'
//               fill='currentColor'
//               viewBox='0 0 24 24'
//               aria-hidden='true'
//             >
//               <path
//                 fillRule='evenodd'
//                 d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
//                 clipRule='evenodd'
//               />
//             </svg>
//           </a>
//         </li>

//         <li>
//           <a
//             href='#'
//             rel='noreferrer'
//             target='_blank'
//             className='text-white transition hover:text-white/75'
//           >
//             <span className='sr-only'>Twitter</span>
//             <svg
//               className='h-6 w-6'
//               fill='currentColor'
//               viewBox='0 0 24 24'
//               aria-hidden='true'
//             >
//               <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
//             </svg>
//           </a>
//         </li>

//         {/* <li>
//           <a
//             href='#'
//             rel='noreferrer'
//             target='_blank'
//             className='text-white transition hover:text-white/75'
//           >
//             <span className='sr-only'>GitHub</span>
//             <svg
//               className='h-6 w-6'
//               fill='currentColor'
//               viewBox='0 0 24 24'
//               aria-hidden='true'
//             >
//               <path
//                 fillRule='evenodd'
//                 d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
//                 clipRule='evenodd'
//               />
//             </svg>
//           </a>
//         </li> */}

//         {/* <li>
//           <a
//             href='#'
//             rel='noreferrer'
//             target='_blank'
//             className='text-white transition hover:text-white/75'
//           >
//             <span className='sr-only'>Dribbble</span>
//             <svg
//               className='h-6 w-6'
//               fill='currentColor'
//               viewBox='0 0 24 24'
//               aria-hidden='true'
//             >
//               <path
//                 fillRule='evenodd'
//                 d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
//                 clipRule='evenodd'
//               />
//             </svg>
//           </a>
//         </li> */}
//       </ul>
//     </div>
//   </div>
//   <div className='bg-dark px-5 items-center  '>
//     <div className='max-w-[1250px] mx-auto   text-center flex flex-row flex-wrap justify-between py-8'>
//       <p className='text-white'>
//         {' '}
//         Copyright © 2024-2025. All Rights Reserved.
//       </p>
//       <Link
//         href={'https://www.xtreme-communication.com/'}
//         className=' text-white'
//       >
//         X.Treme Communication
//       </Link>
//     </div>
//   </div>
// </footer>
