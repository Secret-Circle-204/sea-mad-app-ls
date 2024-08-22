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



const TripsMain = ({ plan, filter }) => {
  console.log('plan-mainnn:', plan)
  console.log('filter-mainnn:', filter)
  // const currentMonth = filter.from    ? format(plan.from, 'MMM - yyyy') : format(new Date(), 'MMM - yyyy')
  const currentMonth = format(plan.from, 'MMM - yyyy')

  return (
    <>

      <div className='w-full flex flex-wrap'>
        <section className='trips_page relative w-full h-full  pt-12  text-gray-600 body-font max-w-[1200px]  mx-auto  '>
          {currentMonth !== filter.from && (
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


        </section>
      </div>

    </>
  )
}

export default TripsMain