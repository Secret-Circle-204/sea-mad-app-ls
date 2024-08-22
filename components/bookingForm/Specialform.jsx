'use client'

import { useState, useEffect } from 'react'
import Calendar from './calendar'
import { format, parse, startOfMonth } from 'date-fns'
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'

const meals = [
  {
    id: 1,
    name: 'Breakfast',
    description: 'Per Day',
    price: '$ 10'
  },
  {
    id: 2,
    name: 'Breakfast and Lunch',
    description: 'Per Day',
    price: '$ 30'
  },
  {
    id: 3,
    name: 'Breakfast and Lunch and Dinner',
    description: 'Per Day',
    price: '$ 80'
  }
]

const programs = [
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
  }
]

const boats = [
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

const rooms = [
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

export default function SpecialForm({ planData }) {
  console.log('planData', planData)

  const [currentMonth, setCurrentMonth] = useState(
    format(startOfMonth(planData[0]?.from || new Date()), 'yyyy-MM-dd')
  )

  console.log('currentMonth', currentMonth)
  const onMonthChange = (value) => {
    setCurrentMonth(value)
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
          <option value=''>Select a Route</option>
          {planData.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className='space-y-1'>
        <label htmlFor='boat'>Choose a Boat</label>

        <select
          className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          name='boat' id='boat' required>
          <option value=''>Select a Boat</option>
          {/* if boat name is repeated in data show only one */}
          {planData?.slice(0 , 1)?.map((item , index) => (
            <option  key={item.id} id={item.id} value={item.boat}>
              {item.boat}
            </option>
          ))}
        </select>
      </div>
      <Calendar
        currentMonth={currentMonth}
        plans={planData}
        from={planData.map((item) => item.from)}
        setCurrentMonth={setCurrentMonth}
        onMonthChange={onMonthChange}
      />

      
      <div className='space-y-1'>
  <label htmlFor=''>Choose what you want to include in your trip </label>
  <checkboxgroup className='px-1 grid lg:grid-cols-4 grid-cols-3 gap-3'>
    {programs.map(program => (
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
    {/* <div className='space-y-1'> 
      <label htmlFor='meals'>Choose a Meal</label>
      <select 
       className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
      name='meals' id='meals'>
        {meals.map((meal) => (
          <option key={meal.id} value={meal.name}>
            {meal.name} - {meal.description} - Price:{meal.price}
          </option>
        ))}
      </select>
    </div> */}
    
    <div className='space-y-1'>
      <label htmlFor='rooms'>Number of Guests</label>
 
      <input
        type='number'
        placeholder='Enter number of guests'
        name='guests'
        id='guests'
        min={1}
        required
        className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
        defaultValue='1'
      />
    </div>
    
    <div className=' grid grid-cols-3 gap-3'>
      <input
     className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none '

      type='text' placeholder='Enter your name' required />
      <input 
     className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none '

      type='email' placeholder='Enter your email' />
      <input 
     className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none '

      type='text' inputMode='tel' placeholder='Enter your phone number' />
      <textarea 
      name='notes'
      id='notes'
      cols={30}
      className=' col-span-3 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-700 placeholder-gray-500 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none '
      rows={10} placeholder='Please enter your notes' />
    </div>
      <button className='bg-blue3 hover:bg-blue3/80 hover:scale-95 rounded-md text-white px-10 py-2'>
        Submit
      </button>
      <p className='text-red-500 text-lg first-letter:uppercase font-medium'>
        <span className='font-bold'>Important Note: </span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        saepe tempore facere odio vero nulla, sapiente impedit rerum. Facere
        maxime ea reiciendis possimus quod eos repellat neque pariatur,
        eaque excepturi!
      </p>
    </form>
  )
}




 