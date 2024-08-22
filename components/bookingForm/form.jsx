// only default export is available so no need to use export default
// components\bookingForm\form.jsx
'use client'

import React, { useState, useEffect } from 'react'

import Calendar from './calendar'
import { format, parse, startOfMonth } from 'date-fns'
// import { months } from './data.json'
const months=[
  
  ["2024-05-27", 
    "2024-06-15",
    "2024-07-01",
    "2024-08-01",
    "2024-09-01",
    "2024-10-01",
    "2024-11-01",
    "2024-12-01"
  ],
     [
    "2024-05-27",
    "2024-05-28",
    "2024-05-29",
    "2024-05-30",
    "2024-05-31",
    "2024-06-15",
    "2024-07-01"
  ]


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

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
// import { sendRenderResult } from 'next/dist/server/send-payload'
// import axios from 'axios'
import getAssetURL from '@/lib/get-asset-url'
import directus from '@/lib/directus'
import { readItems, createItem } from '@directus/sdk'
// import Link from 'next/link'

export default function Form () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [the_room, setTheRoom] = useState('')
  const [the_boat, setTheBoat] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [number_of_guests, setNumberOfGuests] = useState(1)
  // const [address, setAddress] = useState('')
  function handleClick () {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // router.push('/')
    }, 9000)

    toast.info('Thank you for your message, we will get back to you soon!', {
      position: 'top-center',
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })

    // alert('Thank you for your message, we will get back to you soon!')
  }
  const alertSuccess = () => {
    toast.success('Message successfully sent', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }
  const alertwarning = () => {
    toast.warning('Warning, please try resending the form', {
      position: 'top-right'
    })
  }

  async function handleSubmit (event) {
    const formData = new FormData(event.target)
    event.preventDefault()
    //send to api//
    // const axios = require('axios')

    // const sendDataForm = JSON.stringify({
    //   dataForm: {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     address: address,
    //     message: message
    //   }
    // })
    // console.log('sendDataForm', sendDataForm)

    try {
      //  Send data to Directus
      await directus.request(
        createItem('inbox', {
          name,
          email,
          phone,
          message,
          the_boat,
          the_room,
          date,
          number_of_guests,
          currMonth
        })
      )

      //send to mail
      const response = await fetch('/api/mailer', {
        method: 'post',
        body: formData
      })

      if (!response.ok) {
        console.log('falling over')
        throw new Error(`response status: ${response.status}`)
      }

      alertSuccess()

      // 👇️ clear all input values in the form
      event.target.reset()
      const responseData = await response.json()
      console.log(responseData['message'])
    } catch (err) {
      console.log(err)
      alertwarning()
    }
  }

  // const [datafooter, setDataFooter] = useState('')

  // const getDataFooter = async () => {
  //   try {
  //     const fetchedFooter = await directus.request(
  //       readItems('footer', {
  //         fields: ['*', 'content']
  //       }),
  //       {
  //         // next: { revalidate: 7 }
  //         cache: 'no-store'
  //       }
  //     )
  //     setDataFooter(fetchedFooter)
  //   } catch (error) {
  //     alertwarning()
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }

  useEffect(() => {
    // getDataFooter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('footer_data22222', datafooter)

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
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='space-y-1'>
          <label htmlFor=''>Name</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            value={name}
            onChange={e => setName(e.target.value)}
            id={name}
            autoComplete='name'
            maxLength={50}
            size='lg'
            name='name'
            type='text'
            placeholder='Enter Your Name'
          />
        </div>
        <div className='space-y-1'>
          <label htmlFor=''>Email</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            value={email}
            onChange={e => setEmail(e.target.value)}
            id={email}
            autoComplete='email'
            maxLength={50}
            size='lg'
            name='email'
            type='email'
            placeholder='Enter Your Email'
          />
        </div>
        <div className='space-y-1'>
          <label htmlFor=''>Phone number</label>
          <input
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            id={phone}
            autoComplete='phone'
            maxLength={50}
            // minLength={13}
            size='lg'
            name='phone'
            type='tel'
            placeholder='Enter Your Phone Number'
          />
        </div>
        <div>
          <div className='space-y-1'>
            <label htmlFor=''>Select Month</label>
            <select
              value={currMonth}
              onChange={e => onMonthChange(e.target.value)}
              id={currMonth}
              name='date'
              className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
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
          </div>
          <Calendar currMonth={currMonth} setCurrMonth={setCurrMonth} />
        </div>
        {/* <div className='grid grid-cols-2 gap-5'>
          <div className='space-y-1'>
            <label htmlFor=''>Select Start date</label>
            <input
              type='date'
              className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
              placeholder='Enter start date'
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

        <div className='space-y-1'>
          <label htmlFor=''>Number of guests</label>
          <input
            onChange={e => setNumberOfGuests(e.target.value)}
            value={number_of_guests}
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            type='number'
            placeholder='Enter number of guests'
            name='guests'
            id={number_of_guests}
            min={1}
          />
          {/* disabled selected */}
        </div>
        <div className='space-y-1'>
          <select
            className=' w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            name='boat'
            id={the_boat}
            onChange={e => setTheBoat(e.target.value)}
            value={the_boat}
          >
            {/* disabled selected */}
            <option value=''>Choose a Boat</option>
            {boatdata.map(boat => (
              <option key={boat.id} value={boat.name}>
                {boat.name}
              </option>
            ))}
          </select>
        </div>
        <div className='space-y-1'>
          <select
            className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50'
            name='room'
            id={the_room}
            onChange={e => setTheRoom(e.target.value)}
            value={the_room}
          >
            {/* disabled selected */}
            <option value=''>Choose your room</option>
            {roomsData.map(room => (
              <option key={room.id} value={room.name}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <div className='space-y-1'>
          <label htmlFor=''>Note or special requests</label>
          <textarea
            rows={10}
            onChange={e => setMessage(e.target.value)}
            value={message}
            className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
            placeholder='Please enter your notes or special requests'
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type='submit'
          value='submit'
          // disabled={!name || !email || !message || !boat || !room}
          className='bg-blue-500 rounded-lg text-white px-10 py-2'
        >
          <span>{loading ? 'Sending...' : 'Send'}</span>
        </button>
      </form>
    </>
  )
}
