'use client'
// import Image from 'next/image'
// import Programlist from '@/components/program-list'
// import { months } from '@/components/bookingForm/data.json'
// import { format, parse, startOfMonth } from 'date-fns'
// import BookForm from '@/components/Contact/BookForm'
import TripsForm from '@/components/bookingForm/TripsForm'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Calendarplan from '@/components/bookingForm/Calendarplan'
// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
// import { useRouter } from 'next/navigation'
// import { Country, State, City } from 'country-state-city'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import directus from '@/lib/directus'
import { readItems, createItem } from '@directus/sdk'

// const status = 'not available'

// console.log(Country.getAllCountries())
// console.log(State.getAllStates())

export default function TripDetails({ plan }) {
  // // TripDetails component
  // // console.log('Client-side data:', plan)

  // const [country, setCountry] = useState('')
  // const [state, setState] = useState('')
  // const [city, setCity] = useState('')
  // const router = useRouter()
  // const [loading, setLoading] = useState(false)
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [cancel, setCancel] = useState(false)
  // const [trip, setTrip] = useState('')
  // const [ticket_number, setTicketNumber] = useState(
  //   Math.floor(Math.random() * 10000000)
  // )
  // const [message, setMessage] = useState('')
  // const [number_of_guests, setNumberOfGuests] = useState(1)
  // const [showdownload, setShowdownload] = useState(false)
  // // const [address, setAddress] = useState('')
  // const downloadRef = useRef(null)
  // const handleDownload = async () => {
  //   const downloadElement = downloadRef.current

  //   try {
  //     const canvas = await html2canvas(downloadElement)
  //     const imageData = canvas.toDataURL('image/png')

  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'in',
  //       format: 'a4'
  //     })
  //     // Calculate margins and padding
  //     const margin = 1 // Adjust margin value as needed
  //     const padding = 0.25 // Adjust padding value as needed

  //     // Calculate image dimensions with margins and padding
  //     const imageWidth = pdf.internal.pageSize.getWidth() - 2 * margin
  //     const imageHeight = pdf.internal.pageSize.getHeight() - 3 * margin

  //     // Add image with margins and padding
  //     pdf.addImage(
  //       imageData,
  //       'PNG',
  //       margin + padding,
  //       margin + padding,
  //       imageWidth,
  //       imageHeight
  //     )

  //     pdf.save('download.pdf')
  //   } catch (error) {
  //     console.log('Error while downloading', error)
  //   }
  // } // handleDownload

  // const showDownloadBtn = () => {
  //   setShowdownload(true)
  // }
  // function handleClick () {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //     showDownloadBtn()
  //     // router.push('/trips')
  //   }, 9000)

  //   toast.info('Thank you for your message, we will get back to you soon!', {
  //     position: 'top-center',
  //     autoClose: 1800,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true
  //   })

  //   // alert('Thank you for your message, we will get back to you soon!')
  // }
  // const alertSuccess = () => {
  //   toast.success('Message successfully sent', {
  //     position: 'top-right',
  //     autoClose: 500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true
  //   })
  // }
  // const alertwarning = () => {
  //   toast.warning('Warning, please try resending the form', {
  //     position: 'top-right'
  //   })
  // }

  // async function handleSubmit (event) {
  //   const formData = new FormData(event.target)
  //   // formData.append('plan_name', plan.name) // Add plan_name to formData

  //   event.preventDefault()
  //   //send to api//
  //   // const axios = require('axios')

  //   // const sendDataForm = JSON.stringify({
  //   //   dataForm: {
  //   //     name: name,
  //   //     email: email,
  //   //     phone: phone,
  //   //     // address: address,
  //   //     message: message
  //   //   }
  //   // })
  //   // console.log('sendDataForm', sendDataForm)

  //   try {
  //     //  Send data to Directus
  //     await directus.request(
  //       createItem('inbox', {
  //         name,
  //         email,
  //         phone,
  //         trip,
  //         message,
  //         country,
  //         number_of_guests,
  //         trip: plan.name,
  //         ticket_number: ticket_number,
  //         boat: plan.boat
  //         // total_price:
  //       })
  //     )

  //     //send to mail
  //     const response = await fetch('/api/mailer', {
  //       method: 'post',
  //       body: formData
  //     })

  //     if (!response.ok) {
  //       console.log('falling over')
  //       throw new Error(`response status: ${response.status}`)
  //     }

  //     alertSuccess()

  //     // 👇️ clear all input values in the form
  //     event.target.reset()
  //     const responseData = await response.json()
  //     console.log(responseData['message'])
  //   } catch (err) {
  //     console.log(err)
  //     alertwarning()
  //   }
  // }

  const [openTab, setOpenTab] = React.useState(1)
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  // const [status, setStatus] = React.useState('') // Initialize status
  // const [isOpen, setOpen] = React.useState(false)

  const openModal = () => {
    setModalIsOpen(true)
    // const [currMonth, setCurrMonth] = useState(
    //   format(
    //     startOfMonth(parse(months[0], 'yyyy-MM-dd', new Date())),
    //     'yyyy-MM-dd'
    //   )
    // )
  }

  return (
    <>
      {/* <ToastContainer /> */}
      <section className='  relative h-full   text-gray-600 body-font max-w-[1230px]  mx-auto  '>
        <div className='  relative max-w-[1230px]     px-5 py-16 mx-auto'>
          <div className='max-w-[1230px] mx-auto    flex flex-row flex-wrap'>
            {/* start tab days details */}

            <div className='lg:w-full w-full     lg:py-6  lg:mb-0'>
              <h1 className='text-white    p-5 bg-blue3 w-full text-2xl title-font font-medium mb-4'>
                {plan?.name}
              </h1>
              <h2 className='text-sm title-font text-gray-900 mb-6 tracking-widest'>
                ADVENTURE AWAITS
              </h2>
              <ul
                className='flex  flex-row flex-wrap gap-4 mb-4'
                role='tablist'
              >
                {plan?.days?.map((day, index) => (
                  <li
                    key={index}
                    className='  max-w-[180px] text-white   last:mr-0   text-left  '
                  >
                    <a
                      className={
                        'flex-grow text-white border-b-2   border-wtext-white py-2 text-lg px-4 ' +
                        (openTab === index + 1
                          ? 'text-white   bg-blue3'
                          : 'text-white  bg-blue3/70')
                      }
                      onClick={e => {
                        e.preventDefault()
                        setOpenTab(index + 1)
                      }}
                      data-toggle='tab'
                      href={'#link' + (index + 1)}
                      role='tablist'
                    >
                      {day?.item?.day_number}
                    </a>
                  </li>
                ))}
              </ul>

              {/* End of Tabssssssss */}
              {plan?.days?.map((day, index) => (
                <div
                  key={index}
                  className={openTab === index + 1 ? 'block' : 'hidden'}
                  id={'link' + (index + 1)}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: day?.item?.day_details }}
                    // style={{
                    //   textAlign: 'left',
                    //   borderRadius: '50%',
                    //   // overflow: 'hidden',
                    //   width: '100%',
                    //   lineHeight: '1.5'
                    // }}
                    className='leading-relaxed mb-4'
                  >
                    {/* <span
                      id={'link1'}
                      className={
                        openTab === 1
                          ? 'block mb-1 pb-1 text-xl font-semibold '
                          : `hidden`
                      }
                    >
                      Arriving & Check-in
                    </span> */}

                    {/* {day?.item?.day_details} */}
                  </div>
                </div>
              ))}

              <div className='flex border-t border-gray-200 py-2'>
                <span className='text-gray-900'>Date :</span>
                <span className='ml-auto text-gray-900'>
                  <span className='text-blue3   text-xl mx-1 px-1 font-medium'>
                    From
                  </span>
                  {plan?.from}
                  <span className='text-blue3   text-xl mx-1 px-1 font-medium'>
                    To
                  </span>{' '}
                  {plan?.to}
                </span>
              </div>
              <div className='flex border-t border-gray-200 py-2'>
                <span className='text-gray-900'>Boat :</span>
                <span className='ml-auto text-gray-900'>{plan?.boat}</span>
              </div>

              <div className='flex border-t border-gray-200 py-2'>
                <span className='text-gray-900'>Trip Status :</span>
                <span
                  className={`ml-auto text-white px-2 py-1 m-1 rounded-xl ${plan?.status === 'available'
                      ? 'bg-green-500'
                      : status === 'not available'
                        ? 'hidden'
                        : 'bg-red-500 text-white'
                    }`}
                >
                  {plan?.status === 'available'
                    ? 'Available'
                    : 'Not Available'}
                </span>
              </div>
              <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                <span className='text-gray-900'>Available Places :</span>
                <span className='ml-auto text-gray-900'>
                  {plan?.available_places}
                </span>
              </div>
              <div className='flex flex-row flex-wrap justify-between items-start   '>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  {' '}
                  {plan.currency} {plan?.price}{' '}
                  <span className='text-blue3/60 text-sm '>Per Person</span>
                </span>
                <div>
                  <div className='flex items-center'>
                    {/* <span className='  title-font font-light text-base text-gray-700'>
                      {' '}
                      All plans Include Breakfast and Lunch{' '}
                    </span> */}
                  </div>
                  <button
                    className='flex m-[5px] w-full text-white bg-blue3 bg-wtext-white border-0 py-2 px-5 focus:outline-none hover:bg-dark rounded text-lg'
                    value={plan?.id}
                    onClick={() => {
                      openModal(plan?.id)
                    }}
                    key={plan?.id}
                    disabled={
                      plan?.status === 'not available' ||
                      plan?.available_places === 0
                    }
                  >
                    {/* <Link key={plan?.id} href={`/book/${plan?.id}`}>
                    </Link> */}
                    Book Now
                  </button>
                 
                  <Link
                    className='flex m-[5px] w-full text-white bg-primary bg-wtext-white border-0 py-2 px-5 focus:outline-none hover:bg-dark rounded text-lg'
                    href={'/specialBook'}
                    title='titlep'
                  // defaultValue={titlep}
                  >
                    Charter
                  </Link>
                </div>

              </div>
            </div>

            {/* End of Tabs */}
          </div>
          {/* calendar */}
          <div className='w-full lg:w-1/2'>
            <Calendarplan
              plan={plan}
              planfrom={plan.from}
              planto={plan.to}
              key={plan?.id}
            />
          </div>
          {/* <Calendar /> */}
          {/* form Modal */}


          <TripsForm
            plan={plan}
            key={plan?.id}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </div>
        {/* form Modal */}

      </section>
    </>
  )
}

// map

// <div className='map-location relative lg:w-1/2 w-full  min-h-[800px] lg:min-h-[600px] max-sm:min-h-[500px] object-cover object-center rounded'>
//   <Image
//     src={'/images/map-2.png'}
//     alt='sea-island'
//     fill
//     className=' lg:w-1/2 w-full   min-h-[100%]   object-center rounded '
//   />
//   {/* ////// start of map info hover///////// */}
//   {mapData?.map(mapData => (
//     <div
//       className='   absolute top-[43%] left-[35%] group   text-2xl'
//       key={mapData?.id}
//     >
//       <button className=' h-10 w-10 opacity-0 text-center  items-center justify-center rounded-full   bg-blue3 text-white  inline-flex  group'>
//         <span className='  mt-2 text-2xl'>^</span>
//       </button>

//       {/* menu list */}
//       <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
//         <div className='  '>
//           <div className='pb-5'>
//             <p>{mapData?.desc}</p>
//           </div>

//           <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
//             {mapData?.images?.map(image => (
//               <div
//                 key={image.src}
//                 className='  h-[90px] bg-cover bg-center'
//                 style={{
//                   backgroundImage: `url(${image.src})`
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
//   {mapData?.map(mapData => (
//     <div
//       className='   absolute  top-[5%] left-[15%] group   text-2xl'
//       key={mapData?.id}
//     >
//       <button className=' h-10 w-10 opacity-0  text-center  items-center justify-center rounded-full bg-blue3 text-white  inline-flex  group'>
//         <span className='  mt-2 text-2xl'>^</span>
//       </button>

//       {/* menu list */}
//       <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
//         <div className='  '>
//           <div className='pb-5'>
//             <p>{mapData?.desc}</p>
//           </div>

//           <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
//             {mapData?.images?.map(image => (
//               <div
//                 key={image.src}
//                 className='  h-[90px] bg-cover bg-center'
//                 style={{
//                   backgroundImage: `url(${image.src})`
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
//   {/* ///////end of  map info hover//////// */}
//   {/* <div className='w-64 h-64 bg-red-100 relative'>
//               <div
//                 className='w-[300px] h-[300px] absolute inset-0 bg-cover bg-center z-0'
//                 style={{ backgroundImage: 'url(/images/boat-3.jpg)' }}
//               ></div>
//               <div className='opacity-0 bg-dark hover:opacity-100 duration-300 font-light text-md text-white  p-3 absolute hover:translate-y-[-90px] inset-0 z-10 flex justify-center items-center '>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Pariatur cupiditate quo culpa dignissimos nemo amet aperiam
//                 ullam! Recusandae, voluptate necessitatibus?
//               </div>
//             </div> */}
// </div>

// map

// <section className='sm:pt-[80px] pt-[40px]  pb-[10px]'>
//   {/* <div className='py-32 p-20'>

//   </div> */}

//   <div className='max-w-[1200px] md:p-5  p-3 max-ms:mb-[450px]    py-10   mx-auto   grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
//     <div className='relative map-details   text-blue3   p-5  bg-gray-200  '>
//       <div className='pb-20'>
//         <Programlist />
//       </div>
//       {/* <BookForm /> */}
//       <div className='px-5  inline-block  absolute bottom-[20px] left-0 right-0  w-full'>
//         <button className='flex h-[70px] w-[100%] items-center justify-center   bg-teal-500/80 text-white bg-opacity-75   transition hover:bg-opacity-100'>
//           <Link href={'/bookPage'}>Book Now</Link>
//         </button>
//       </div>
//     </div>

//     <div className='relative   min-h-[800px] max-sm:min-h-[500px]       map-location  bg-gray-200 lg:col-span-1'>
//       <Image
//         src={'/images/map-1.png'}
//         alt='sea-island'
//         fill
//         className='     object-center '
//       />
//       {/* ////// start of map info hover///////// */}
//       {mapData?.map(mapData => (
//         <div
//           className='   absolute top-[43%] left-[35%] group   text-2xl'
//           key={mapData?.id}
//         >
//           <button className=' h-10 w-10 opacity-0 text-center  items-center justify-center rounded-full   bg-blue3 text-white  inline-flex  group'>
//             <span className='  mt-2 text-2xl'>^</span>
//           </button>

//           {/* menu list */}
//           <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
//             <div className='  '>
//               <div className='pb-5'>
//                 <p>{mapData?.desc}</p>
//               </div>

//               <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
//                 {mapData?.images?.map(image => (
//                   <div
//                     key={image.src}
//                     className='  h-[90px] bg-cover bg-center'
//                     style={{
//                       backgroundImage: `url(${image.src})`
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       {mapData?.map(mapData => (
//         <div
//           className='   absolute  top-[5%] left-[15%] group   text-2xl'
//           key={mapData?.id}
//         >
//           <button className=' h-10 w-10 opacity-0  text-center  items-center justify-center rounded-full bg-blue3 text-white  inline-flex  group'>
//             <span className='  mt-2 text-2xl'>^</span>
//           </button>

//           {/* menu list */}
//           <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
//             <div className='  '>
//               <div className='pb-5'>
//                 <p>{mapData?.desc}</p>
//               </div>

//               <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
//                 {mapData?.images?.map(image => (
//                   <div
//                     key={image.src}
//                     className='  h-[90px] bg-cover bg-center'
//                     style={{
//                       backgroundImage: `url(${image.src})`
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       {/* ///////end of  map info hover//////// */}
//       {/* <div className='w-64 h-64 bg-red-100 relative'>
//         <div
//           className='w-[300px] h-[300px] absolute inset-0 bg-cover bg-center z-0'
//           style={{ backgroundImage: 'url(/images/boat-3.jpg)' }}
//         ></div>
//         <div className='opacity-0 bg-dark hover:opacity-100 duration-300 font-light text-md text-white  p-3 absolute hover:translate-y-[-90px] inset-0 z-10 flex justify-center items-center '>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Pariatur cupiditate quo culpa dignissimos nemo amet aperiam
//           ullam! Recusandae, voluptate necessitatibus?
//         </div>
//       </div> */}
//     </div>
//   </div>
// </section>
