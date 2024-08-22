// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-use-before-define
'use client'

import { useState } from 'react'
import Calendar from './calendar'
import { format, parse, startOfMonth } from 'date-fns'
import { months } from './data.json'
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'
import React, { useEffect } from 'react'

const mealsData = [
  {
    id: 1,
    mealname: 'Breakfast',
    description: 'Per Day',

    price: '$ 10'
  },

  {
    id: 2,
    mealname: 'Breakfast and Lunch',
    description: 'Per Day',
    price: '$ 30'
  },

  {
    id: 3,
    mealname: 'Breakfast and Lunch and Dinner',
    description: 'Per Day',
    price: '$ 80'
  }
]

const ProgramsData = [
  {
    id: 1,
    name: 'Kites'
  },

  {
    id: 2,
    name: 'Dive'
  },

  {
    id: 3,
    name: 'Surf'
  },

  {
    id: 4,
    name: 'Swim'
  },

  {
    id: 5,
    name: 'Ski'
  },
  {
    id: 6,
    name: 'Kites'
  },

  {
    id: 7,
    name: 'Dive'
  },

  {
    id: 8,
    name: 'Surf'
  },

  {
    id: 9,
    name: 'Swim'
  },

  {
    id: 10,
    name: 'Ski'
  }
]

const boatdata = [
  {
    id: 1,
    name: 'boat name',

    price: 10
  },
  {
    id: 2,
    name: 'boat name',
    price: 20
  },
  {
    id: 3,
    name: 'boat name',
    price: 30
  }
]

const roomsData = [
  {
    id: 1,
    name: 'Standard Room',
    price: 10
  },

  {
    id: 3,
    name: 'Vip Room',
    price: 30
  }
]
export default function SpecialForm () {
  const [plan, setplan] = useState([])
  useEffect(() => {
    const fetchplanData = async () => {
      try {
        const fetchedplan = await directus.request(
          readItems('os_deals', {
            fields: ['from', 'to', 'name', 'id']
          }),
          {
            next: {
              revalidate: 3000
            }
          }
        )
        setplan(fetchedplan)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }

    fetchplanData()
  }, [])

  console.log('planeeeee', plan)
  const [currMonth, setCurrMonth] = useState(
    format(
      startOfMonth(parse(months[0], 'yyyy-MM-dd', new Date())),
      'yyyy-MM-dd'
    )
  )

  // function nextMonth() {
  //   setCurrMonth((curr) => addMonths(curr, 1))
  // }

  // function prevMonth() {
  //   setCurrMonth((curr) => addMonths(curr, -1))
  // }

  function onMonthChange (value) {
    setCurrMonth(value)
  }

  return (
    <form className='space-y-5'>
      <div className='space-y-1'>
        <label htmlFor=''>Choose a Route</label>
        <select
          className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          name='boat'
          id='boat'
          required
        >
          {/* disabled selected */}
          <option value=''>Select a Routes</option>
          {plan.map(plan => (
            <option key={plan.id} value={plan.name}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>
      <div className='space-y-1'>
        <label htmlFor=''>Choose a Boat</label>
        <select
          className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          name='boat'
          id='boat'
          required
        >
          {/* disabled selected */}
          <option value=''>Select a Boat</option>
          {boatdata.map(boat => (
            <option key={boat.id} value={boat.name}>
              {boat.name}
            </option>
          ))}
        </select>
      </div>
      <Calendar />

      <div className='space-y-1'>
        <label htmlFor=''>Choose what you want to include in your trip </label>
        <checkboxgroup className='px-1 grid lg:grid-cols-4 grid-cols-3 gap-3'>
          {ProgramsData.map(program => (
            <label htmlFor={program.id} key={program.id}>
              <input
                className='mr-2  rounded-xl '
                type='checkbox'
                name='program'
                id={program.id}
                value={program.name}
              />
              {program.name}
            </label>
          ))}
        </checkboxgroup>
      </div>

      <div>
        <label htmlFor=''>Choose The Meals</label>
        <select
          className=' flex flex-col  w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50 '
          name='meals'
          id='meals'
        >
          {mealsData.map(meals => (
            <option
              className='flex flex-col font-medium   '
              key={meals.id}
              value={meals.mealname}
            >
              {meals.mealname} - {meals.description} - Price:{meals.price}
            </option>
          ))}
        </select>
      </div>
      <div className='space-y-1'>
        <label htmlFor=''>Number of guests</label>
        <input
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          type='number'
          placeholder='Enter number of guests'
          name='guests'
          id='guests'
          min={1}
          required
          defaultValue='1'
        />
        {/* disabled selected */}
      </div>
      <div className='space-y-1'>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className='space-y-1'>
        <label htmlFor=''>Email</label>
        <input
          type='email'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          placeholder='Enter your email'
        />
      </div>
      <div className='space-y-1'>
        <label htmlFor=''>Phone number</label>
        <input
          type='text'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          inputMode='tel'
          placeholder='Enter your phone number'
        />
      </div>
      <div>
        {/* <div className='space-y-1'>
          <label htmlFor=''>Select Month</label>
          <select
            value={currMonth}
            onChange={e => onMonthChange(e.target.value)}
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          >
            {months.map(dateString => (
              <option key={dateString} value={dateString}>
                {format(
                  parse(dateString, 'yyyy-MM-dd', new Date()),
                  'MMMM yyyy'
                )}
              </option>
            ))}
          </select>
        </div> */}
      </div>
      {/* <div className='grid grid-cols-2 gap-5'>
        <div className='space-y-1'>
          <label htmlFor=''>Select Start date</label>
          <input
            type='date'
            className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
            placeholder='Enter start date'
            required
            // if date not available then disabled
            min={format(
              parse(currMonth, 'yyyy-MM-dd', new Date()),
              'yyyy-MM-dd'
            )}
          />
        </div>
        <div className='space-y-1'>
          <label htmlFor=''>Select End date</label>
          <input
            type='date'
            className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
            placeholder='Enter end date'
          />
        </div>
      </div> */}
      {/* <div className='space-y-1'></div> */}
      <div className='space-y-1'>
        <label htmlFor=''>Notes</label>
        <textarea
          rows={10}
          className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
          placeholder='Please enter your notes'
        ></textarea>
      </div>
      <button className='bg-blue3 hover:bg-blue3/80 hover:scale-95 rounded-lg text-white px-10 py-2'>
        Submit
      </button>
      <div className='notes'>
        <p className='text-red-500 text-lg first-letter:uppercase font-medium  '>
          <span className='font-bold'>Important Note: </span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            saepe tempore facere odio vero nulla, sapiente impedit rerum. Facere
            maxime ea reiciendis possimus quod eos repellat neque pariatur,
            eaque excepturi!
          </span>
        </p>
      </div>
    </form>
  )
}
