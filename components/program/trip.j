// 'use client'
import { getDaysInMonth, startOfMonth, addDays, format, parse } from 'date-fns'

import Image from 'next/image'
import Programlist from '@/components/program-list'
import Program from '@/components/program'
import Link from 'next/link'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'
import { readItems } from '@directus/sdk'
// import React, { useState, useEffect } from 'react'
import getAssetURL from '@/lib/get-asset-url'
import Calendar from '@/components/bookingForm/calendar'
import CalendarMonths from '@/components/bookingForm/CalendarMonths'

const slideImage = {
  id: 1,
  title: 'The Best Liveaboard of the Red Sea',
  subtitle: 'Red Sea Liveaboards.',
  content:
    ' We are a company that specializes in designing and manufacturing high-quality furniture pieces for homes, offices, and commercial spaces. Our team of experienced and creative designers work tirelessly to create furniture pieces that not only look great but are also functional and comfortable. We pride ourselves on using the best materials and production techniques to ensure that our pieces last for years to come. Our mission is to provide our customers with exceptional service and quality products that enhance their living and working spaces.',

  main_image: '/images/boat/5.png'
}

const mapData = [
  {
    id: 1,
    title: 'Sea Island',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',
    path: '/sea-island',
    newTab: false,
    images: [
      {
        src: '/images/salem-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/salem-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/salem-1.jpg',
        alt: 'sea-island'
      }
    ]
  }
  // {
  //   id: 2,
  //   title: ' The Island',
  //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',
  //   path: '/sea-island',
  //   newTab: false,
  //   images: [
  //     {
  //       src: '/images/boat-3.jpg',
  //       alt: 'sea-island'
  //     },
  //     {
  //       src: '/images/boat-2.jpg',
  //       alt: 'sea-island'
  //     },
  //     {
  //       src: '/images/boat-1.jpg',
  //       alt: 'sea-island'
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: 'Garden Island',
  //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',
  //   path: '/sea-island',
  //   newTab: false,
  //   images: [
  //     {
  //       src: '/images/boat-3.jpg',
  //       alt: 'sea-island'
  //     },
  //     {
  //       src: '/images/boat-2.jpg',
  //       alt: 'sea-island'
  //     },
  //     {
  //       src: '/images/boat-1.jpg',
  //       alt: 'sea-island'
  //     }
  //   ]
  // }
]


// async function getProject () {
//   try {
//     const plan = await directus.request(
//       readItems('os_deals', {
//         // filter: {
//         //   id: { _eq: id }
//         // },
//         fields: [
//           '*',
//           'name',
//           'boat',
//           'from',
//           'to',
//           'days',
//           'days.item.*',
//           'available_places',
//           'currency',
//           'price',
//           'status',
//           'currMonth',
//           'id',
//           'status',

//           // 'author',
//           // 'author.*',

//           'sort'
//           // 'related_projects.*.*',

//           // 'service_related.*.*'
//         ],
//         // sta: ['b'],
//         // status: ['status', 'published'],
//         sort: ['from']
//         // limit: 99
//       }),
//       {
//         // next: { revalidate: 7 }
//         next: {
//           revalidate: 1
//         }
//         // cache: 'no-store'
//       }
//     )

//     console.log('trips-data', plan)
//     return plan
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }
// }

 const plan = [
    {
      id: '21e05753-b453-4446-b35e-d0d93956d917',
      sort: null,
      user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_created: '2023-09-09T03:14:51.260Z',
      user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_updated: '2024-06-13T19:46:24.062Z',
      name: ' 6 plan: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
      owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
      organization: null,
      deal_stage: null,
      deal_notes: null,
      boat: 'Sea Side Boat',
      status: 'available',
      available_places: 12,
      from: '2024-07-01',
      to: '2024-07-06',
      price: 150,
      currency: '$',
      currMonth: '2024-06-15',
      days: [
        {
          id: 1,
          sort: 1,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 1,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.873Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:15:33.818Z',
            day_number: 'Day-1',
            day_details:
              '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        },
        {
          id: 2,
          sort: 2,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 2,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.889Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:17:20.570Z',
            day_number: 'Day-2',
            day_details:
              '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        }
      ]
    },

    {
      id: 'e3b466ee-61db-42b6-bee2-1bc96b0534bb',
      sort: null,
      user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_created: '2024-06-07T02:36:48.502Z',
      user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_updated: '2024-06-11T13:59:29.903Z',
      name: '7 plan: Daedalus-Brother Islands-Safaga',
      owner: null,
      organization: null,
      deal_stage: null,
      deal_notes: null,
      boat: 'Sea Boat',
      status: 'available',
      available_places: 5,
      from: '2024-07-17',
      to: '2024-07-23',
      price: 260,
      currency: '$',
      currMonth: '2024-06-29',
      days: [
        {
          id: 1,
          sort: 1,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 1,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.873Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:15:33.818Z',
            day_number: 'Day-1',
            day_details:
              '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        },
        {
          id: 2,
          sort: 2,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 2,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.889Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:17:20.570Z',
            day_number: 'Day-2',
            day_details:
              '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        }
      ]
    },
    {
      id: '11da9404-be68-4aa5-81d4-efa015081cd1',
      sort: null,
      user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_created: '2024-06-10T13:32:47.902Z',
      user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
      date_updated: '2024-06-11T16:38:28.764Z',
      name: ' 9 plan: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
      owner: null,
      organization: null,
      deal_stage: null,
      deal_notes: null,
      boat: 'text',
      status: 'available',
      available_places: 5,
      from: '2024-06-12',
      to: '2024-06-20',
      price: 350,
      currency: '$',
      currMonth: '2024-06-21',
      days: [
        {
          id: 1,
          sort: 1,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 1,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.873Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:15:33.818Z',
            day_number: 'Day-1',
            day_details:
              '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        },
        {
          id: 2,
          sort: 2,
          collection: 'programs_details',
          os_deals_id: {
            id: '21e05753-b453-4446-b35e-d0d93956d917',

            days: [1, 2, 5, 6, 14, 15]
          },
          item: {
            id: 2,
            status: 'published',
            sort: null,
            user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_created: '2024-06-07T01:03:15.889Z',
            user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
            date_updated: '2024-06-07T02:17:20.570Z',
            day_number: 'Day-2',
            day_details:
              '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
          }
        }
      ]
    }
  ]



// serch filter trips by date or month or year or name or location or status

  // const filterTrips = (trips, filter) => {
  //   const filteredTrips = trips.filter((trip) => {
  //     return Object.keys(filter).every((key) => {
  //       if (!filter[key]) {
  //         return true
  //       }
  //       return trip[key] === filter[key]
  //     })
  //   })

  //   return filteredTrips
  // }

  // const filterTripsByDate = (trips, date) => {
  //   const filteredTrips = trips.filter((trip) => {
  //     return trip.from >= date
  //   })

  //   return filteredTrips
  // }

  // const filterTripsByMonth = (trips, month) => {
  //   const filteredTrips = trips.filter((trip) => {
  //     return trip.currMonth >= month
  //   })

  //   return filteredTrips  
  // }


export default async function TripsPage () {

  return (
    <>
      <section
        id='home'
        className='relative h-[90vh] bg-no-repeat object-cover items-center bg-center object-center bg-cover w-full z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
        style={{
          backgroundImage: `url(${slideImage?.main_image})`
        }}
      >
        {/* <img src={slideImage?.main_image} alt="image" /> */}
        <div className='container  pt-32'>
          <div className='-mx-4  flex flex-wrap'>
            <div className='w-full   px-4 pt-20'>
              <div
                className='wow items-start text-center   fadeInUp mx-auto max-w-[800px] text-white dark:text-white '
                data-wow-delay='.2s'
              >
                {/* <h1 className='   drob-shadows  mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight'>
                  {slideImage?.title}
                </h1> */}
                <p className='mb-12 text-base font-medium !leading-relaxed text-white dark:text-white dark:opacity-90 sm:text-lg md:text-xl'>
                  {/* {slideImage?.subtitle} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full flex flex-wrap'>
        <div className='max-w-[1250px] pt-20 mx-auto  px-5  '>
          <div>
            <h2 className='mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight'>
              PROGRAMS & ROUTES
            </h2>
            <p>
              {' '}
              The Red Sea has a variety of dive sites & destinations for
              liveaboard sea trips. You can go with any scuba diving style you
              enjoy and a choice that matches your needs, such as adventure
              diving trips, a historical journey to shipwrecks, or to chill out
              with pure aquatic nature, corals, and marine life.
            </p>
          </div>
          <div>
            {/* <div className='w-full lg:w-1/2'>
              <Calendar
                {...{ plan }}
                plan={plan}
                planfrom={plan.from}
                planto={plan.to}
                key={plan?.id}
              />
            </div> */}
          </div>
        </div>

        {/* {plan?.map((trip, i) => {
          return (
            <>
              <CalendarPLan
                plan={plan}
                planfrom={plan.from}
                planto={plan.to}
                key={i}
                trip={trip}
              />
            </>
          )
        })} */}
        {/* {plan?.map((plan, index) => (
          <Program plan={plan} key={index} />
        ))} */}

        <section className='trips_page relative w-full h-full  pt-14  text-gray-600 body-font max-w-[1200px]  mx-auto  '>
          {/* calendar */}

          {/* <Calendar /> */}
          {/* table */}

          {/* Let's create a month title under which there are table that carry all the flights that start in the date from. It will be under the same date from. month's title */}

          {plan?.map((plan /* , index */) => {
            const currentMonth = format(plan.from, 'MMMM yyyy')

            return (
              <>
                {currentMonth !== previousMonth && (
                  <div
                    key={currentMonth}
                    className='max-w-[1200px] w-full lg:px-0 px-8 mx-auto my-6 '
                  >
                    <div className='   w-full   py-5  sm:rounded-xl sm:border-[1px] border-solid border-blue3/80 font-semibold text-blue3'>
                      <h1 className='text-xl font-medium text-center text-blue3   '>
                        {currentMonth}
                      </h1>
                    </div>
                  </div>
                )}

                {/* currMonth */}

                <div
                  key={plan?.id}
                  className='max-w-[1200px] lg:px-0 px-5 w-full mx-auto my-5 '
                >
                  <table className='  bg-gray-200 max-sm:p-2  lg:bg-transparent  my-table table-default uk-table jrt jrt-instance-1   '>
                    <thead className=''>
                      <tr>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Date
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Route
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Boat
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Start / End
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Available
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Status
                        </th>
                        <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                          Price
                        </th>
                        {/* <th className='  py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100'>
                  Start / End
                </th> */}
                        <th className='max-sm:hidden w-10 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className=' '>
                        <td className=' sm:text-center sm:items-center jrt-cell-1 lg:max-w-[160px] sm:py-14 text-gray-900'>
                          {/* {format(new Date(), 'dd MMMM ')} */}
                          {format(plan?.from, 'dd - MMMM')}
                          <span uk-icon='arrow-right' className='uk-icon'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <polyline
                                fill='none'
                                stroke='#000'
                                points='10 5 15 9.5 10 14'
                              ></polyline>
                              <line
                                fill='none'
                                stroke='#000'
                                x1='4'
                                y1='9.5'
                                x2='15'
                                y2='9.5'
                              ></line>
                            </svg>
                          </span>

                          {format(plan?.to, 'dd - MMMM  ')}
                        </td>
                        <td className=' routee sm:text-center sm:items-center jrt-cell-2  lg:max-w-[160px]   sm:py-14 text-gray-900'>
                          {plan?.name}
                        </td>
                        <td className='  sm:text-center sm:items-center jrt-cell-6 lg:max-w-[160px] sm:py-14   text-gray-900'>
                          {plan?.boat}
                        </td>
                        <td className='  sm:text-center sm:items-center jrt-cell-3 lg:max-w-[160px] sm:py-14 text-gray-900'>
                          HGR
                          <span uk-icon='arrow-right' className='uk-icon'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <polyline
                                fill='none'
                                stroke='#000'
                                points='10 5 15 9.5 10 14'
                              ></polyline>
                              <line
                                fill='none'
                                stroke='#000'
                                x1='4'
                                y1='9.5'
                                x2='15'
                                y2='9.5'
                              ></line>
                            </svg>
                          </span>{' '}
                          HGR
                        </td>
                        <td className='  sm:text-center sm:items-center jrt-cell-3 lg:max-w-[160px] sm:py-14 text-gray-900'>
                          {plan?.status}
                        </td>

                        <td className='  sm:text-center sm:items-center jrt-cell-5 lg:max-w-[160px] sm:py-14   text-gray-900'>
                          {plan?.available_places} Places
                        </td>
                        <td className='  sm:text-center sm:items-center status planned jrt-cell-7  lg:max-w-[160px] sm:py-14   text-gray-900'>
                          {plan.currency} {plan?.price}
                        </td>

                        <td className='uk-button w-10 sm:pr-5 text-center'>
                          <a
                            href={`/trips/${plan?.id}`}
                            className='inline-block rounded bg-blue3 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className='gap '></tr>
                    </tbody>
                  </table>
                </div>
                <h1 className='hidden'>{(previousMonth = currentMonth)}</h1>
              </>
            )
          })}
        </section>
      </div>
    </>
  )
}

