'use client'
import { useState } from 'react'
import Calendar from '@/components/Calendar'
const NewsLatterBox = () => {
  const [isOpen, setOpen] = useState(false)
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })
  return (
    <>
      {/* <div className='px-5  inline-block  absolute bottom-[20px] left-0 right-0  w-full'>
        <button
          onClick={() => setOpen(true)}
          className='flex h-[70px] w-[100%] items-center justify-center   bg-teal-500/80 text-white bg-opacity-75   transition hover:bg-opacity-100'
        >
          Book Me
        </button>
      </div> */}

      <div className='w-full flex flex-row flex-wrap justify-between space-x-5'>
        <h3 className='mb-4 text-2xl font-bold leading-tight text-blue3 dark:text-white'>
          Hurghada
        </h3>
        {/* <h3
          onClick={() => setOpen(false)}
          className='mb-4 cursor-pointer hover:text-blue3/80 text-2xl font-bold leading-tight text-blue3 dark:text-white'
        >
          X
        </h3> */}
      </div>
      <p className='mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25'>
        For your safety and enjoyable trip, the plan is flexible and may be
        rearranged or adjusted based on the weather forecast.
      </p>
      <form>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          required
        />
        <input
          type='tel'
          name='phone'
          placeholder='Enter your phone'
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          required
        />
        {/* select input here */}
        <div>
          <div
            className={`w-[100%]      `}
            // style={{ display: isCalendarOpen ? 'block' : 'none' }}
            onClick={() => setCalendarOpen(false)}
          >
            <Calendar
              minDate={new Date()}
              className='  REACT_CALENDAR  '
              view='month'
              onClickDay={date =>
                setDate(prev => ({ ...prev, startDate: date }))
              }
            />
          </div>
        </div>
        <select
          className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
          name='boat'
          id='boat'
          required
        >
          {/* disabled selected */}
          <option value=''>Choose your boat</option>
          {/* <option value=''>Select your boat</option> */}
          <option value='1'>BETELGUESER1</option>
          <option value='2'>HAMMERHEAD</option>
          <option value='3'>WHITE WHALE</option>
        </select>
        {/* select input here */}
        {/*  dynmic calendar  here */}

        {/*  calendar input here */}
        <textarea
          type='message'
          name='message'
          placeholder='Notes Or Special Requests'
          className='mb-4 h-[200px] w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
        />
        <input
          type='submit'
          value='Book Now'
          className='duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none'
        />
        <p className='text-center text-base font-medium leading-relaxed text-body-color'>
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
    </>
  )
}

export default NewsLatterBox
