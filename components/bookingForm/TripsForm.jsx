'use client'

import React, { useState, useEffect, useRef } from 'react'

import Calendar from './calendar'
import { format, parse, startOfMonth } from 'date-fns'
import { months } from './data.json'
import 'react-toastify/dist/ReactToastify.min.css'
import { useRouter } from 'next/navigation'
import Calendarplan from '@/components/bookingForm/Calendarplan'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Country, State, City } from 'country-state-city'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import directus from '@/lib/directus'
import { readItems, createItem } from '@directus/sdk'
 
// const plan = {
//   available_places: 5,
//   boat: 'text',
//   currMonth: '2024-06-21',
//   currency: '$',
//   date_created: '2024-06-10T13:32:47.902Z',
//   date_updated: '2024-06-11T16:38:28.764Z',

//   from: '2024-06-12',
//   id: '11da9404-be68-4aa5-81d4-efa015081cd1',
//   name: ' 6 Days: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',

//   status: 'available',
//   to: '2024-06-20',
//   user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//   user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476'
// }
export default function TripsForm({ plan, modalIsOpen, setModalIsOpen }) {
  // TripDetails component
  console.log('program-form data:', plan)
  console.log('program-form data:', plan.id)
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [cancel, setCancel] = useState(false)
  const [trip, setTrip] = useState('')
  const [ticket_number, setTicketNumber] = useState('')
  const [message, setMessage] = useState('')
  const [number_of_guests, setNumberOfGuests] = useState()
  const [showdownload, setShowdownload] = useState(false)
  // const [address, setAddress] = useState('')
  const downloadRef = useRef(null)
  const handleDownload = async () => {
    const downloadElement = downloadRef.current

    try {
      const canvas = await html2canvas(downloadElement)
      const imageData = canvas.toDataURL('image/png')

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'a4'
      })
      // Calculate margins and padding
      const margin = 1 // Adjust margin value as needed
      const padding = 0.25 // Adjust padding value as needed

      // Calculate image dimensions with margins and padding
      const imageWidth = pdf.internal.pageSize.getWidth() - 2 * margin
      const imageHeight = pdf.internal.pageSize.getHeight() - 3 * margin

      // Add image with margins and padding
      pdf.addImage(
        imageData,
        'PNG',
        margin + padding,
        margin + padding,
        imageWidth,
        imageHeight
      )

      pdf.save('download.pdf')
    } catch (error) {
      console.log('Error while downloading', error)
    }
  } // handleDownload

  const tiketNumber = () => {
    setTicketNumber(Math.floor(Math.random() * 10000000))
  }
  const showDownloadBtn = () => {
    setShowdownload(true)
  }
  function handleClick() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      showDownloadBtn()
      tiketNumber()
      // router.push('/trips')
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

  async function handleSubmit(event) {
    const formData = new FormData(event.target)
    // formData.append('plan_name', plan.name) // Add plan_name to formData

    event.preventDefault()
    //send to api//
    // const axios = require('axios')

    const sendDataForm = JSON.stringify({
      dataForm: {
        name: name,
        email: email,
        phone: phone,
        trip: plan.name,
        ticket_number: ticket_number,
        country: country,
        number_of_guests: number_of_guests,
        boat: plan.boat,
        // address: address,
        message: message
      }
    })
    console.log('sendDataForm', sendDataForm)

    try {
      //  Send data to Directus
      await directus.request(
        createItem('inbox', {
          name,
          email,
          phone,
          trip,
          message,
          country,
          number_of_guests,
          trip: plan.name,
          ticket_number: ticket_number,
          boat: plan.boat,
          total_price: plan.price * number_of_guests
        })
      )

      // console.log('Form successfully sent!,')
      //send to mail
      const response = await fetch('/api/mailer', {
        method: 'post',
        body: formData
      })
      alert('Form successfully sent!')

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



  const styleEffectOpenModal = {

  }



  const closeModal = (e) => {
    e.preventDefault()
    if (e.key === 'Escape' || e.target === e.currentTarget || e.target === downloadRef.current || e.target === downloadRef.current.children[0] || e.target === downloadRef.current.children[0].children[0]) {
      // clear input fields when modal is closed
      setModalIsOpen(false)
      setCountry('')
      setState('')
      setCity('')
      setEmail('')
      setName('')
      setPhone('')
      setTrip('')
      setMessage('')
      setNumberOfGuests(1)
      setTicketNumber('')
      //  setCancel(false)
      setShowdownload(false)
      setModalIsOpen(false)
      //  window.location.reload()

    }
  }
  const clickOutModal = (e) => {
    e.preventDefault()
    if (e.key === 'Escape' || e.target === e.currentTarget || e.target === downloadRef.current || e.target === downloadRef.current.children[0] || e.target === downloadRef.current.children[0].children[0]) {
      // clear input fields when modal is closed
      setModalIsOpen(false)
 

    }
  }


  // function handleChange (event) {
  //   const { name, value } = event.target
  //   if (name === 'name') {
  //     setName(value)
  //   } else if (name === 'email') {
  //     setEmail(value)
  //   } else if (name === 'phone') {
  //     setPhone(value)
  //   } else if (name === 'trip') {
  //     setTrip(value)
  //   } else if (name === 'message') {
  //     setMessage(value)
  //   } else if (name === 'number_of_guests') {
  //     setNumberOfGuests(value)
  //   } else if (name === 'ticket_number') {
  //     setTicketNumber(value)
  //   } else if (name === 'country') {
  //     setCountry(value)
  //   } else if (name === 'state') {
  //     setState(value)
  //   } else if (name === 'city') {
  //     setCity(value)
  //   }
  // }

  // function handleChange (event) {
  //   const { name, value } = event.target
  //   if (name === 'name') {
  //     setName(value)
  //   } else if (name === 'email') {
  //     setEmail(value)
  //   } else if (name === 'phone') {
  //     setPhone(value)
  //   } else if (name === 'trip') {
  //     setTrip(value)
  //   } else if (name === 'message') {
  //     setMessage(value)
  //   } else if (name === 'number_of_guests') {
  //     setNumberOfGuests(value)
  //   } else if (name === 'ticket_number') {
  //     setTicketNumber(value)
  //   } else if (name === 'country') {
  //     setCountry(value)
  //   } else if (name === 'state') {
  //     setState(value)
  //   } else if (name === 'city') {
  //     setCity(value)
  //   }
  // }

  return (
    <>
      {/*form Modal */}

      {/* <ToastContainer /> */}
      <div
        //  style={{  display: modalIsOpen ? 'block' : 'none' }}
        onClick={clickOutModal}
        // className='fixed   top-0 left-0 right-0 bottom-0 w-full h-full  bg-gray-200 overflow-y-auto grid place-items-center bg-opacity-70'
        className={` ${modalIsOpen ? 'opacity-100 translate-y-0 ease-in-out  translate-x-0 transition-transform duration-500 fixed z-40 inset-0 bg-blue3 bg-opacity-40 h-screen w-screen mx-auto flex items-start justify-center  md:items-center pt-10 md:pt-0 ' : ' translate-y-[100%] transition-transform  opacity-0  duration-500 none' }
                `}
      > 
        {modalIsOpen ?
          (
            <form
              onSubmit={handleSubmit}
              // className='flex max-md:overflow-y-scroll items-center max-sm:overflow-y-scroll max-w-[1000px] mx-auto h-full'
              className={`relative flex lg:w-[1000px] max-w-[1000px] mx-auto  w-1/2 h-1/2  md:h-3/4 bg-white rounded-md overflow-y-auto p-5 md:p-10 shadow-2xl  `}
            >
              {/* <div 
           // className='space-y-5 max-sm:mt-60  sm:w-[100%]   bg-gradient-to-r from-blue3 to-dark flex lg:flex-row flex-col flex-wrap    mx-auto   justify-between   px-3 sm:px-5 py-5   rounded-md'
           > */}
              <div
               className='w-full  text-blue3   lg:w-1/2 mb-0 '
              >
                {/* <h1 className=''>{plan?.name}</h1>
           <input
             type='hidden'
             name='plan_name'
             value={plan.name}
           />{' '}
           New hidden input */}
                <div className='space-y-1'>
                  {/* <label className='' htmlFor=''>
               Name
             </label> */}
                  <input
                    className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id={name}
                    autoComplete='name'
                    maxLength={35}
                    size='lg'
                    name='name'
                    type='text'
                    placeholder='Enter Your Name'
                  />
                </div>
                <div className='space-y-1'>
                  {/* <label className='' htmlFor=''>
               Email
             </label> */}
                  <input
                    className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
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
                  {/* <label className='' htmlFor=''>
               Phone number
             </label> */}
                  <input
                    className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
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
                {/* slect your cauntry */}
                <div className='space-y-1'></div>
                {/* <label className='' htmlFor=''>
             Select Country
           </label> */}
                <select
                  className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
                  onChange={e => setCountry(e.target.value)}
                  value={country.name}
                  // name='country'
                  id={country}
                >
                  <option value=''>Select Country</option>
                  {Country.getAllCountries().map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name} {country.flag}
                    </option>
                  ))}
                </select>
                {/* slect your cauntry */}
                {/* <div className='grid grid-cols-2 gap-5'>
     <div className='space-y-1'>
       <label className='' htmlFor=''>Select Start date</label>
       <input
         type='date'
         className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
         placeholder='Enter start date'
       />
     </div>
     <div className='space-y-1'>
       <label className='' htmlFor=''>Select End date</label>
       <input
         type='date'
         className='px-3 py-2 w-full bg-white border border-gray-100 rounded'
         placeholder='Enter end date'
       />
     </div>
   </div> */}
                <div className=' mb-4 first-letter:space-y-1'>
                  {/* <label
                    className='mb-4 w-full   py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400   outline-none focus:border-opacity-100 focus-visible:shadow-none '
                    htmlFor=''
                  >
                    Enter Number of guests
                  </label> */}
                  <input
                    onChange={e => setNumberOfGuests(e.target.value)}
                    placeholder='Enter Number of guests'
                    value={number_of_guests}
                    className='mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
                    type='number'
                    name='number_of_guests'
                    id={number_of_guests}
                    min={1}
                  />
                  {/* disabled selected */}
                </div>
                <div className='space-y-1'>
                  {/* <label className='' htmlFor=''>
               Note or special requests
             </label> */}
                  <textarea
                    rows={12}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    id={message}
                    name='message'
                    className='lg:mb-0 mb-3 w-full rounded-md border border-body-color border-opacity-10   py-2 px-6 text-base font-medium text-gray-600 placeholder-gray-400 outline outline-[0.25px] outline-blue3/20 focus:border-blue3/90 focus:border-opacity-100 focus-visible:shadow-none '
                    placeholder='Please enter your notes here....'
                  ></textarea>
                </div>
                <div className='space-x-2 lg:pt-10'>
                  <button
                    onClick={handleClick}
                    type='submit'
                    value='submit'
                    // disabled={!name || !email || !message || !boat || !room}
                    className='bg-blue3 rounded-lg text-white px-10 py-2'
                  >
                    <span>{loading ? 'Sending...' : 'Confirm'}</span>
                  </button>
                  <button
                    className='close-modal-button bg-blue-500 cursor-pointer rounded-lg text-white px-10 py-[10px]'
                    onClick={closeModal}
                    aria-label='Close modal'
                    style={{ transition: 'all 0.3s ease' }}

                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* your booking details */}
              <div className='  relative text-left w-full       sm:px-5 lg:w-1/2 '>
                <h1 className='text-[18px] font-semibold'>
                  Your Ticket will generate here after confirmation
                </h1>
                <hr className='  border-blue3   mb-5' />

                <div
                  style={{ display: showdownload ? 'block' : 'none' }}
                  value={plan?.name}
                >
                  <div
                    className='   relative text-left w-full     bg-white/5  sm:p-3   '
                    ref={downloadRef}
                    id='booking-details-pdf'
                  >
                    <div className='flex space-y-3 flex-col gap-5'>
                      <h1
                        className='  text-2xl mt-0 font-bold'
                        value={plan?.name}
                      // onChange={e => setplanName(e.target.value)}
                      // id={plan_name}
                      // name='plan_name'
                      >
                        Trip : <span className=' text-lg  '>{plan?.name}</span>
                      </h1>

                      <li className=' text-lg '>
                        Your Name :{' '}
                        <span className=' text-lg text-red-500'> {name} </span>
                      </li>
                      <li className=' text-lg '>
                        Booking Date :{' '}
                        <span className=' text-lg text-red-500'>
                          {new Date().toLocaleDateString()}
                        </span>
                      </li>
                      <li className=' text-lg '>
                        plan - from :{' '}
                        <span className=' text-lg text-red-500'>
                          {plan?.from} to : {plan?.to}
                        </span>
                      </li>
                      <li className=' text-lg '>
                        Number of guests :{' '}
                        <span className=' text-lg text-red-500'>
                          {number_of_guests}
                        </span>
                      </li>
                      <li>
                        Your Country :{' '}
                        <span className=' text-lg text-red-500'> {country}</span>
                      </li>
                      <li className=' '>
                        Total Price :{' '}
                        <span className=' text-lg text-red-500 '>
                          {plan?.currency} {plan?.price * number_of_guests}
                        </span>
                      </li>
                      {/* ticket number */}
                      <div className='text-center      rounded-lg text-red-500 px-10 py-2'>
                        <span className=' text-lg text-blue3'>
                          Your Ticket Number :
                        </span>
                        <span
                          id={ticket_number}
                          name='ticket_number'
                          value={ticket_number}
                          className=' text-lg '
                        >
                          {ticket_number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className='w-full mt-5 bg-green-500   rounded-lg text-white px-10 py-2'
                    type='button'
                    onClick={handleDownload}
                    value='Download'
                  // disabled={!name || !email || !country || !phone}
                  >
                    Download Your Ticket
                  </button>
                </div>
              </div>
              {/* </div> */}
            </form>
          )
          : null}
      </div>
    </>
  )
}
