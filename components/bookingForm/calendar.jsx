'use client'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

// import { months } from './data.json'
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'
/* eslint-disable react/prop-types */
import {
  getDaysInMonth,
  startOfMonth,
  addDays,
  format,
  parse,
  addMonths,
  subMonths
} from 'date-fns'
import { busyDays } from './data.json'
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line react/prop-types
export default function Calendar () {
  const [plan, setplan] = useState([])
  // const plan = [
  //   {
  //     id: '21e05753-b453-4446-b35e-d0d93956d917',
  //     sort: null,
  //     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_created: '2023-09-09T03:14:51.260Z',
  //     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_updated: '2024-06-13T19:46:24.062Z',
  //     name: ' 6 Days: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
  //     owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
  //     organization: null,
  //     deal_stage: null,
  //     deal_notes: null,
  //     boat: 'Sea Side Boat',
  //     status: 'available',
  //     available_places: 12,
  //     from: '2024-07-01',
  //     to: '2024-07-06',
  //     price: 150,
  //     currency: '$',
  //     currMonth: '2024-06-15',
  //     days: [
  //       {
  //         id: 1,
  //         sort: 1,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 1,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.873Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:15:33.818Z',
  //           day_number: 'Day-1',
  //           day_details:
  //             '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       },
  //       {
  //         id: 2,
  //         sort: 2,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 2,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.889Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:17:20.570Z',
  //           day_number: 'Day-2',
  //           day_details:
  //             '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       }
  //     ]
  //   },

  //   {
  //     id: 'e3b466ee-61db-42b6-bee2-1bc96b0534bb',
  //     sort: null,
  //     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_created: '2024-06-07T02:36:48.502Z',
  //     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_updated: '2024-06-11T13:59:29.903Z',
  //     name: '7 Days: Daedalus-Brother Islands-Safaga',
  //     owner: null,
  //     organization: null,
  //     deal_stage: null,
  //     deal_notes: null,
  //     boat: 'Sea Boat',
  //     status: 'available',
  //     available_places: 5,
  //     from: '2024-07-17',
  //     to: '2024-07-23',
  //     price: 260,
  //     currency: '$',
  //     currMonth: '2024-06-29',
  //     days: [
  //       {
  //         id: 1,
  //         sort: 1,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 1,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.873Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:15:33.818Z',
  //           day_number: 'Day-1',
  //           day_details:
  //             '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       },
  //       {
  //         id: 2,
  //         sort: 2,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 2,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.889Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:17:20.570Z',
  //           day_number: 'Day-2',
  //           day_details:
  //             '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     id: '11da9404-be68-4aa5-81d4-efa015081cd1',
  //     sort: null,
  //     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_created: '2024-06-10T13:32:47.902Z',
  //     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //     date_updated: '2024-06-11T16:38:28.764Z',
  //     name: ' 9 Days: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
  //     owner: null,
  //     organization: null,
  //     deal_stage: null,
  //     deal_notes: null,
  //     boat: 'text',
  //     status: 'available',
  //     available_places: 5,
  //     from: '2024-06-12',
  //     to: '2024-06-20',
  //     price: 350,
  //     currency: '$',
  //     currMonth: '2024-06-21',
  //     days: [
  //       {
  //         id: 1,
  //         sort: 1,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 1,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.873Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:15:33.818Z',
  //           day_number: 'Day-1',
  //           day_details:
  //             '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       },
  //       {
  //         id: 2,
  //         sort: 2,
  //         collection: 'programs_details',
  //         os_deals_id: {
  //           id: '21e05753-b453-4446-b35e-d0d93956d917',

  //           days: [1, 2, 5, 6, 14, 15]
  //         },
  //         item: {
  //           id: 2,
  //           status: 'published',
  //           sort: null,
  //           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_created: '2024-06-07T01:03:15.889Z',
  //           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
  //           date_updated: '2024-06-07T02:17:20.570Z',
  //           day_number: 'Day-2',
  //           day_details:
  //             '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
  //         }
  //       }
  //     ]
  //   }
  // ]

  // const [day, setDay] = useState([])
  const [selectedAvailableDates, setSelectedAvailableDates] = useState([]) // New state for selected available dates
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)

  useEffect(() => {
    const fetchplanData = async () => {
      try {
        const fetchedplan = await directus.request(
          readItems('os_deals', {
            fields: ['from', 'to', 'days.item.*']
          }),
          {
            next: {
              revalidate: 1
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

  console.log('plan-date-notavalble', plan)

  const [currMonth, setCurrMonth] = useState(new Date())

  const onPrevMonth = () => {
    if (currMonth < new Date()) return // Prevent going back to past months
    setCurrMonth(subMonths(currMonth, 1))
  }

  const onNextMonth = () => {
    setCurrMonth(addMonths(currMonth, 1))
  }

  function onMonthChange (value) {
    setCurrMonth(value)
  }

  const handleDayClick = day => {
    // Check if day is available (green)
    if (!isDayInRange(day, currMonth, plan)) {
      // Day is not available, add it to selectedAvailableDates
      const formattedDate = format(
        new Date(currMonth.getFullYear(), currMonth.getMonth(), day),
        'yyyy-MM-dd' // Desired date format
      )
      const newAvailableDate = new Date(formattedDate)

      setSelectedAvailableDates([...selectedAvailableDates, newAvailableDate])

      // If no start date selected, set it as the clicked day
      if (!selectedStartDate) {
        setSelectedStartDate(newAvailableDate)
      } else if (selectedStartDate) {
        // If a start date is already selected, set the end date (ensure end date is after start date)
        if (newAvailableDate > selectedStartDate) {
          setSelectedEndDate(newAvailableDate)
        } else {
          // If clicked day is before the selected start date, clear both selections
          setSelectedStartDate(null)
          setSelectedEndDate(null)
        }
      }
    }
  }

  // const curr = parse(currMonth, 'yyyy-MM-dd', new Date())
  const dayCount = getDaysInMonth(currMonth)
  const days = Array.from({ length: dayCount }).map((_, index) => index + 1)
  const weekDays = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(currMonth, index), 'EEE')
  )

  // busy days planfrom-planto
  // Function to check if a day is between plan.from and plan.to (inclusive)
  function isDayInRange (dayIndex, currMonth, plan) {
    const formattedDate = `${currMonth.getFullYear()}-${
      currMonth.getMonth() + 1 >= 10 ? '' : '0'
    }${currMonth.getMonth() + 1}-${dayIndex >= 10 ? '' : '0'}${dayIndex}`

    if (!plan) return false // Handle cases where plan is undefined

    return plan.some(plan => {
      const startDateNotAvailable = new Date(plan.from)
      const endDateNotAvailable = new Date(plan.to)
      const targetDate = new Date(formattedDate)

      return (
        targetDate >= startDateNotAvailable && targetDate <= endDateNotAvailable
      )
    })
  }

  const handleStartDateChange = newValue => {
    // Convert input value to Date object
    const newStartDate = new Date(newValue)

    // Update selectedStartDate and potentially selectedEndDate
    if (!selectedEndDate || newStartDate <= selectedEndDate) {
      setSelectedStartDate(newStartDate)
    } else {
      // If new start date is after selected end date, clear end date
      setSelectedEndDate(null)
      setSelectedStartDate(newStartDate)
    }
  }

  const handleEndDateChange = newValue => {
    // Convert input value to Date object
    const newEndDate = new Date(newValue)

    // Update selectedEndDate and potentially selectedStartDate
    if (!selectedStartDate || newEndDate >= selectedStartDate) {
      setSelectedEndDate(newEndDate)
    } else {
      // If new end date is before selected start date, clear start date
      setSelectedStartDate(null)
      setSelectedEndDate(newEndDate)
    }
  }

  return (
    <main className='mt-5'>
      <div className=' pt-4 pb-6  text-center  font-semibold text-blue3'>
        <span className='text-xl font-semibold'>Select Your Trip Dates</span>
        <p> Click on a Calendar to Choose a first and last date of your trip</p>
      </div>
      {/* <p className='text-lg font-bold'>Available Dates</p> */}
      {/* <div className='flex flex-wrap gap-1'>
        {selectedAvailableDates.map(date => (
          <span
            key={date}
            className='bg-blue3 text-white px-2 py-1 rounded-md text-light'
          >
            {date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
        ))}
      </div> */}
      <div className='flex items-center justify-between mb-4'>
        <GrLinkPrevious
          className='bg-blue3 text-white text-2xl p-1 cursor-pointer hover:scale-95 hover:bg-blue3/85  rounded-md '
          onClick={onPrevMonth}
        />

        <span className='text-lg font-bold'>
          {format(currMonth, 'MMMM yyyy')}
        </span>

        <GrLinkNext
          className='bg-blue3 text-white text-2xl p-1 cursor-pointer hover:scale-95 hover:bg-blue3/85    rounded-md '
          onClick={onNextMonth}
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
            className={`text-sm aspect-square rounded-lg p-2 font-bold border border-gray-300 ${
              !isDayInRange(day, currMonth, plan)
                ? day === selectedStartDate?.getDate() &&
                  (selectedEndDate?.getDate() === day ||
                    !selectedStartDate ||
                    !selectedEndDate)
                  ? 'bg-blue-500 text-white' // Blue for selected start and end date (or no end date)
                  : day === selectedStartDate?.getDate()
                  ? 'bg-blue-500 scale-90 rounded-3xl text-white' // Light blue for selected start date
                  : day === selectedEndDate?.getDate()
                  ? 'bg-blue-700 scale-90 rounded-3xl text-white'
                  : 'bg-gray-100 border-[0.5px] border-blue-900  border-solid cursor-pointer text-blue3 hover:bg-gray-400' // Green for available days with hover effect
                : 'bg-blue3 cursor-not-allowed text-white'
            } flex items-center justify-center`}
            onClick={() => handleDayClick(day)} // Call handleDayClick on click
          >
            <span>{day}</span>
          </div>
        ))}
      </div>
      <div className=' mt-4 space-y-5'>
        <div className='  rounded-lg space-y-1 '>
          <label htmlFor='startDateNotAvailable'> Your Start Date</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium   placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50  text-blue3 '
            type='date'
            // Format and display selected start date
            value={
              selectedStartDate?.toISOString().slice(0, 10) ||
              new Date().toISOString().slice(0, 10) ||
              Date.now()
            }
            id='startDateNotAvailable'
            name='startDateNotAvailable'
            onChange={e => handleStartDateChange(e.target.value)}
            disabled // Disable if no start date selected
            placeholder='Enter start date'
          />
        </div>

        <div className=' rounded-lg space-y-1'>
          <label htmlFor='endDateNotAvailable'> Your End Date </label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium   placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50  text-blue3 '
            type='date'
            value={
              selectedEndDate?.toISOString().slice(0, 10) ||
              new Date().toISOString().slice(0, 10) ||
              Date.now()
            }
            id='endDateNotAvailable'
            name='endDateNotAvailable'
            onChange={e => handleEndDateChange(e.target.value)}
            disabled // Disable if no end date selected
            placeholder='Enter end date'
          />
        </div>
      </div>
    </main>
  )
}
