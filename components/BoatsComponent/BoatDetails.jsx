// 'use client'

import Image from 'next/image'
import BoatLightBox from './BoatLightBox'
// import React, { useState, useEffect } from 'react'
import getAssetURL from '@/lib/get-asset-url'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'

import { notFound } from 'next/navigation'

// async function getBoatDetails () {
//   try {
//     const boatsDetails = await directus.request(readItems('the_boats'), {
//       fields: ['slug', 'title', 'publish_date', { boat_details: ['*', 'content','title'] }],


//       sort: ['sort'],

//       // next: { revalidate: 1 }
//       cache: 'no-store'
//     })
//     console.log(boatsDetails)
//     return boatsDetails
//   } catch (error) {
//     notFound()
//   }
// }


const supp = {
  Supplies: 'Supplies',
  Supplies_desc:
    'The Boat provides all diving supplies to make sure that your trip will go smoothly.',
  main_image: '/images/boat-s.png',
  Supplies_image: '/images/supplies.png',
}

const boatinfo = [


  {
    id: 1,
    slug: 'avao-boat',
    title: 'AVAO BOAT',
    subTitle: 'fully prepared & equipped for diving liveaboard.',
    content:
      ' AVAO boat is a new modern wooden boat, fully prepared & equipped for diving liveaboard. The boat cabins feature an ensuite bathroom, mini-bar, storage space, and AC. Inside the main deck is a spacious salon with comfortable sofas, an entertainment area, a dining room, a buffet station, and a bar. There is also an open-air lounge and bar on the sun deck, the perfect place to unwind at the end of a day of fantastic diving with a cold drink in hand. The third lounge and sunbeds are up on the Skydeck for relaxing and soaking up the sun in between dives.',
    direction: 'reverse',

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
    id: 2,
    slug: 'avao-boat',
    title: 'BOAT RECEPTION',
    subTitle: 'fully prepared & equipped for diving liveaboard.',
    content:
      ' AVAO boat is a new modern wooden boat, fully prepared & equipped for diving liveaboard. The boat cabins feature an ensuite bathroom, mini-bar, storage space, and AC. Inside the main deck is a spacious salon with comfortable sofas, an entertainment area, a dining room, a buffet station, and a bar. There is also an open-air lounge and bar on the sun deck, the perfect place to unwind at the end of a day of fantastic diving with a cold drink in hand. The third lounge and sunbeds are up on the Skydeck for relaxing and soaking up the sun in between dives.',

    direction: ' ',

    images: [
      {
        src: '/images/Reception/1.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Reception/3.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Reception/2.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Reception/4.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Reception/5.png',
        alt: 'sea-island'
      }
    ]
  },
  {
    id: 3,
    slug: 'avao-boat',
    title: 'BOAT RESTAURANT',
    subTitle: 'fully prepared & equipped for diving liveaboard.',
    content:
      ' Avao boat restaurant is a new modern wooden boat, fully prepared & equipped for diving liveaboard. The boat cabins feature an ensuite bathroom, mini-bar, storage space, and AC. Inside the main deck is a spacious salon with comfortable sofas, an entertainment area, a dining room, a buffet station, and a bar. There is also an open-air lounge and bar on the sun deck, the perfect place to unwind at the end of a day of fantastic diving with a cold drink in hand. The third lounge and sunbeds are up on the Skydeck for relaxing and soaking up the sun in between dives.',

    direction: 'reverse',

    images: [
      {
        src: '/images/Restaurant/1.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Restaurant/1.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Restaurant/1.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Restaurant/1.png',
        alt: 'sea-island'
      },
      {
        src: '/images/Restaurant/1.png',
        alt: 'sea-island'
      }
    ]
  },
]

export default async function RelatedBoat({ boats }) {



  console.log('boatDetails-component', boats)
  // const boats = await getBoatDetails()
  // const [blogHome, setBlogHome] = useState([])

  // const get_Blog_Home = async () => {
  //   try {
  //     const fetchedBlogHome = await directus.request(
  //       readItems('posts', {
  //         fields: [
  //           'id',
  //           'title',
  //           'content',
  //           // 'summary',
  //           'image.*',
  //           'slug',
  //           'date_published'
  //         ]
  //       }),
  //       {
  //         next: { revalidate: 15000 }
  //         // cache: 'no-store'
  //       }
  //     )
  //     setBlogHome(fetchedBlogHome)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }

  // useEffect(() => {
  //   get_Blog_Home()
  // }, [])
  // console.log('boatsssssss', boats)
  // console.log('boatin', boat)

  return (
    <>

      <section data-aos='fade-up' className=' '>
        {boats?.map(boat => (
          <div key={boat?.id}
            className={` ${boat?.direction === 'reverse' ? ' flex  p-4 lg:gap-4 lg:items-start lg:justify-between  flex-col  lg:flex-row-reverse' : 'grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'}
       bg-primary/[.03] p-2 mb-16  rounded-lg`}

          >
            {/* start Boat info section-1 */}
            <div className={`${boat?.direction === 'reverse' ? 'lg:w-[45%]  w-full' : 'lg:col-span-1'}   py-2 px-1   rounded-lg`}>
              <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl'>
                  {boat?.title}
                </h2>
                {/* <p className='mt-2 text-gray-500 dark:text-white'>
          {boat?.subTitle}{' '}
        </p> */}
                <p className='mt-4 text-gray-500 dark:text-white'>
                  {boat?.content}{' '}
                </p>
              </div>
            </div>
            {/*images */}
            <div className='  pb-2 gap-4 rounded-lg    lg:col-span-2'>
              <BoatLightBox
                className=' ' slide={boat?.images} MainImageclass={'cursor-pointer h-auto lg:min-h-[450px] w-full max-w-full rounded-lg'} />
            </div>
          </div>

        ))}

        {/* start supplies section */}
        <section className='mb-16 bg-primary/[.03] p-2  rounded-lg'>
          <div
            className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'

          >
            <div className='   rounded-lg   dark:bg-transparent '>
              {/* tap images gallery */}

              <div className=' pb-3 gap-4'>
                <img
                  className='sm:max-h-[250px]  object-cover  object-center w-full rounded-lg'
                  src={supp?.Supplies_image}
                  alt=''
                />
              </div>
            </div>
            <div className=' lg:col-span-2 p-3 rounded-lg  dark:bg-transparent'>
              <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl'>
                  {supp?.Supplies}
                </h2>
                <p className='mt-4 text-gray-500 dark:text-white'>
                  {supp?.Supplies_desc}{' '}
                </p>
              </div>
            </div>
          </div>

        </section>
      </section>
    </>
  )
}
