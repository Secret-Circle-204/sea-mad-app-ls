'use client'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'
import {
  getDaysInMonth,
  startOfMonth,
  addDays,
  format,
  parse,
  addMonths,
  subMonths,
  getYear
} from 'date-fns'
import React, { useState, useEffect } from 'react'

export default function Calendar({ plans, currentMonth, setCurrentMonth }) {
  const [selectedDates, setSelectedDates] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  // useEffect(() => {
  //   setSelectedDates([])
  //   setStartDate(null)
  //   setEndDate(null)
  // }, [currentMonth])

  const handleDayClick = (day) => {
    if (!isDayInRange(day, currentMonth, plans)) {
      const newDate = parse(
        format(addDays(startOfMonth(currentMonth), day - 1), 'yyyy-MM-dd'),
        'yyyy-MM-dd',
        new Date()
      )  
      if (startDate && endDate) {
        setSelectedDates([])
        setStartDate(null)
        setEndDate(null)
      }

      if (!startDate) {
        setStartDate(newDate)
      } else if (newDate > startDate) {
        setEndDate(newDate)
      } else {
        setStartDate(null)
        setEndDate(null)
      }
    }
  } 

  const isDayInRange = (day, currentMonth, plans) => {
    const formattedDate = format(
      addDays(startOfMonth(parse(format(currentMonth  , 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date())) , day - 1),
      'yyyy-MM-dd'
    )
    return plans.some(plan => plan.from <= formattedDate && plan.to >= formattedDate)
  }

  const handlePrevMonth = () => {
    if (currentMonth < new Date()) return
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const handleMonthChange = (value) => {
    setCurrentMonth(value)
  }

  // const handleDayClick = (day) => {
  //   if (!isDayInRange(day, currentMonth, plans)) {
  //     const newDate = parse(format(addDays(startOfMonth(currentMonth), day - 1), 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date())
      
  //     if (startDate && endDate) {
  //       setSelectedDates([])
  //       setStartDate(null)
  //       setEndDate(null)
  //     }

  //     if (!startDate) {
  //       setStartDate(newDate)
  //     } else if (newDate > startDate) {
  //       setEndDate(newDate)
  //     } else {
  //       setStartDate(null)
  //       setEndDate(null)
  //     }
  //   }
  // }

  const dayCount = getDaysInMonth(currentMonth)
  const days = Array.from({ length: dayCount }).map((_, index) => index + 1)
  const weekDays = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(currentMonth, index), 'EEE')
  )

  return (
    <main className='mt-5'>
      <div className='pt-4 pb-6 text-center font-semibold text-blue3'>
        <span className='text-xl font-semibold'>Select Your Trip Dates</span>
        <p>Click on a Calendar to Choose a first and last date of your trip</p>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <GrLinkPrevious
          className='bg-blue3 text-white text-2xl p-1 cursor-pointer hover:scale-95 hover:bg-blue3/85 rounded-md'
          onClick={handlePrevMonth}
        />

        <span className='text-lg font-bold'>
          {format(currentMonth, 'MMMM yyyy')}
        </span>

        <GrLinkNext
          className='bg-blue3 text-white text-2xl p-1 cursor-pointer hover:scale-95 hover:bg-blue3/85 rounded-md'
          onClick={handleNextMonth}
        />
      </div>
      <div className='grid grid-cols-7 gap-1'>
        {weekDays.map(day => (
          <p key={day} className='text-center'>
            {day}
          </p>
        ))}

        {days.map(day => (
          <div
            key={day}
            className={`text-sm aspect-square rounded-lg p-2 font-bold border border-gray-300 ${!isDayInRange(day, currentMonth, plans)
              ? day === startDate?.getDate() &&
                (endDate?.getDate() === day ||
                  !startDate ||
                  !endDate)
                ? 'bg-blue-500 text-white'
                : day === startDate?.getDate()
                  ? 'bg-blue-500 scale-90 rounded-3xl text-white'
                  : day === endDate?.getDate()
                    ? 'bg-blue-700 scale-90 rounded-3xl text-white'
                    : 'bg-gray-100 border-[0.5px] border-blue-900  border-solid cursor-pointer text-blue3 hover:bg-gray-400'
              : 'bg-blue3 cursor-not-allowed text-white'
              } flex items-center justify-center`}
            onClick={() => handleDayClick(day)}
          >
            <span>{day}</span>
          </div>
        ))}
      </div>
      <div className='mt-4 space-y-5'>
        <div className='rounded-lg space-y-1'>
          <label htmlFor='startDate'>Your Start Date</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50 text-blue3'
            type='date'
            value={startDate?.toISOString().slice(0, 10) || new Date().toISOString().slice(0, 10) || Date.now()}
            id='startDate'
            name='startDate'
            onChange={(e) => setStartDate(new Date(e.target.value))}
            disabled={!startDate}
            placeholder='Enter start date'
          />
        </div>

        <div className='rounded-lg space-y-1'>
          <label htmlFor='endDate'>Your End Date</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50 text-blue3'
            type='date'
            value={endDate?.toISOString().slice(0, 10) || new Date().toISOString().slice(0, 10) || Date.now()}
            id='endDate'
            name='endDate'
            onChange={(e) => setEndDate(new Date(e.target.value))}
            disabled={!endDate}
            placeholder='Enter end date'
          />
        </div>
      </div>
    </main>
  )
} 
