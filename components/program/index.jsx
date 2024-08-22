// 'use client'
// // import Image from 'next/image'
// // import Programlist from '@/components/program-list'
// // import { months } from '@/components/bookingForm/data.json'
// // import { format, parse, startOfMonth } from 'date-fns'
// // import BookForm from '@/components/Contact/BookForm'
// // import ProgramForm from '@/components/bookingForm/ProgramForm'
// import Link from 'next/link'
// import React, { useState, useEffect, useRef } from 'react'
// import Calendarplan from '@/components/bookingForm/Calendarplan'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css'
// import { useRouter } from 'next/navigation'
// import { Country, State, City } from 'country-state-city'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
// import directus from '@/lib/directus'
// import { readItems, createItem } from '@directus/sdk'

// // const status = 'not available'

// // console.log(Country.getAllCountries())
// // console.log(State.getAllStates())

// export default function ProgramComponent ({ plan }) {
//   console.log('plancomp', plan.boat)
//   const [country, setCountry] = useState('')
//   const [state, setState] = useState('')
//   const [city, setCity] = useState('')
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [cancel, setCancel] = useState(false)
//   const [trip, setTrip] = useState('')
//   const [ticket_number, setTicketNumber] = useState(
//     Math.floor(Math.random() * 10000000)
//   )
//   const [message, setMessage] = useState('')
//   const [number_of_guests, setNumberOfGuests] = useState(1)
//   const [showdownload, setShowdownload] = useState(false)
//   // const [address, setAddress] = useState('')
//   const downloadRef = useRef(null)
//   const handleDownload = async () => {
//     const downloadElement = downloadRef.current

//     try {
//       const canvas = await html2canvas(downloadElement)
//       const imageData = canvas.toDataURL('image/png')

//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'in',
//         format: 'a4'
//       })
//       // Calculate margins and padding
//       const margin = 1 // Adjust margin value as needed
//       const padding = 0.25 // Adjust padding value as needed

//       // Calculate image dimensions with margins and padding
//       const imageWidth = pdf.internal.pageSize.getWidth() - 2 * margin
//       const imageHeight = pdf.internal.pageSize.getHeight() - 3 * margin

//       // Add image with margins and padding
//       pdf.addImage(
//         imageData,
//         'PNG',
//         margin + padding,
//         margin + padding,
//         imageWidth,
//         imageHeight
//       )

//       pdf.save('download.pdf')
//     } catch (error) {
//       console.log('Error while downloading', error)
//     }
//   } // handleDownload

//   const showDownloadBtn = () => {
//     setShowdownload(true)
//   }
//   function handleClick () {
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//       showDownloadBtn()
//       // router.push('/trips')
//     }, 9000)

//     toast.info('Thank you for your message, we will get back to you soon!', {
//       position: 'top-center',
//       autoClose: 1800,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true
//     })

//     // alert('Thank you for your message, we will get back to you soon!')
//   }
//   const alertSuccess = () => {
//     toast.success('Message successfully sent', {
//       position: 'top-right',
//       autoClose: 500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true
//     })
//   }
//   const alertwarning = () => {
//     toast.warning('Warning, please try resending the form', {
//       position: 'top-right'
//     })
//   }

//   async function handleSubmit (event) {
//     const formData = new FormData(event.target)
//     // formData.append('plan_name', plan.name) // Add plan_name to formData

//     event.preventDefault()
//     //send to api//
//     // const axios = require('axios')

//     // const sendDataForm = JSON.stringify({
//     //   dataForm: {
//     //     name: name,
//     //     email: email,
//     //     phone: phone,
//     //     // address: address,
//     //     message: message
//     //   }
//     // })
//     // console.log('sendDataForm', sendDataForm)

//     try {
//       //  Send data to Directus
//       await directus.request(
//         createItem('inbox', {
//           name,
//           email,
//           phone,
//           trip,
//           message,
//           country,
//           number_of_guests,
//           trip: plan.name,
//           ticket_number: ticket_number,
//           boat: plan.boat
//           // total_price:
//         })
//       )

//       //send to mail
//       const response = await fetch('/api/mailer', {
//         method: 'post',
//         body: formData
//       })

//       if (!response.ok) {
//         console.log('falling over')
//         throw new Error(`response status: ${response.status}`)
//       }

//       alertSuccess()

//       // 👇️ clear all input values in the form
//       event.target.reset()
//       const responseData = await response.json()
//       console.log(responseData['message'])
//     } catch (err) {
//       console.log(err)
//       alertwarning()
//     }
//   }
//   // const [currMonth, setCurrMonth] = useState(
//   //   format(
//   //     startOfMonth(parse(months[0], 'yyyy-MM-dd', new Date())),
//   //     'yyyy-MM-dd'
//   //   )
//   // )

//   const [openTab, setOpenTab] = React.useState(1)
//   const [modalIsOpen, setModalIsOpen] = React.useState(false)
//   // const [status, setStatus] = React.useState('') // Initialize status
//   // const [isOpen, setOpen] = React.useState(false)

//   const openModal = () => {
//     setModalIsOpen(true)
//   }

//   return (
//     <>
//       {/* <ToastContainer /> */}
//       <section className='trips_page relative w-full h-full   text-gray-600 body-font max-w-[1200px]  mx-auto  '>
//         {/* table */}
//         <div className='w-full mx-auto '>
//           {/* calendar */}
//           {/* <div className='w-full lg:w-full '>
//             <Calendarplan
//               plan={plan}
//               planfrom={plan.from}
//               planto={plan.to}
//               key={plan?.id}
//             />
//           </div> */}
//           {/* <Calendar /> */}
//           <table className=' max-sm:bg-body-color my-table table-default uk-table jrt jrt-instance-1   '>
//             <thead className=''>
//               <tr>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Date
//                 </th>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Route
//                 </th>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Trip Status
//                 </th>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Available
//                 </th>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Boat
//                 </th>
//                 <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Price
//                 </th>
//                 {/* <th className='  py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
//                   Start / End
//                 </th> */}
//                 <th className='max-sm:hidden w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
//               </tr>
//             </thead>

//             {/* tbody map data */}

//             {plan?.trip?.map((trip, i) => {
//               return (
//                 <>
//                   <Calendarplan
//                     plan={plan}
//                     planfrom={plan.from}
//                     planto={plan.to}
//                     key={i}
//                     trip={trip}
//                   />
//                 </>
//               )
//             })}
//             <tbody>
//               <tr className=' '>
//                 <td className=' text-center items-center jrt-cell-1 sm:max-w-[170px] sm:py-14 text-gray-900'>
//                   {plan?.from}
//                   <span uk-icon='arrow-right' className='uk-icon'>
//                     <svg
//                       width='20'
//                       height='20'
//                       viewBox='0 0 20 20'
//                       xmlns='http://www.w3.org/2000/svg'
//                     >
//                       <polyline
//                         fill='none'
//                         stroke='#000'
//                         points='10 5 15 9.5 10 14'
//                       ></polyline>
//                       <line
//                         fill='none'
//                         stroke='#000'
//                         x1='4'
//                         y1='9.5'
//                         x2='15'
//                         y2='9.5'
//                       ></line>
//                     </svg>
//                   </span>
//                   {plan?.to}
//                 </td>
//                 <td className=' routee text-center items-center jrt-cell-2  sm:max-w-[170px] sm:py-14 text-gray-900'>
//                   {plan?.name}
//                 </td>
//                 <td className='  text-center items-center jrt-cell-3 sm:max-w-[170px] sm:py-14 text-gray-900'>
//                   {plan?.status}
//                 </td>

//                 <td className='  text-center items-center jrt-cell-5 sm:max-w-[170px] sm:py-14   text-gray-900'>
//                   {plan?.available_places} Places
//                 </td>
//                 <td className='  text-center items-center jrt-cell-6 sm:max-w-[170px] sm:py-14   text-gray-900'>
//                   {plan?.boat}
//                 </td>
//                 <td className='  text-center items-center status planned jrt-cell-7  sm:max-w-[170px] sm:py-14   text-gray-900'>
//                   {plan.currency} {plan?.price}
//                 </td>

//                 <td className='uk-button w-10 sm:pr-5 text-center'>
//                   <a
//                     href={`/trips/${plan?.id}`}
//                     className='inline-block rounded bg-blue3 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
//                   >
//                     View
//                   </a>
//                 </td>
//               </tr>
//               <tr className='gap'></tr>
//             </tbody>
//           </table>
//         </div>
//         {/* table */}
//         {/*
//         <div className='flex items-center'>
//           <span className='  title-font font-light text-base text-gray-700'>
//             {' '}
//             All plans Include Breakfast and Lunch{' '}
//           </span>
//         </div> */}
//         {/*form Modal */}

//         {/* end form Modal */}
//       </section>
//     </>
//   )
// }

// // map

// // <div className='map-location relative lg:w-1/2 w-full  min-h-[800px] lg:min-h-[600px] max-sm:min-h-[500px] object-cover object-center rounded'>
// //   <Image
// //     src={'/images/map-2.png'}
// //     alt='sea-island'
// //     fill
// //     className=' lg:w-1/2 w-full   min-h-[100%]   object-center rounded '
// //   />
// //   {/* ////// start of map info hover///////// */}
// //   {mapData?.map(mapData => (
// //     <div
// //       className='   absolute top-[43%] left-[35%] group   text-2xl'
// //       key={mapData?.id}
// //     >
// //       <button className=' h-10 w-10 opacity-0 text-center  items-center justify-center rounded-full   bg-blue3 text-white  inline-flex  group'>
// //         <span className='  mt-2 text-2xl'>^</span>
// //       </button>

// //       {/* menu list */}
// //       <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
// //         <div className='  '>
// //           <div className='pb-5'>
// //             <p>{mapData?.desc}</p>
// //           </div>

// //           <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
// //             {mapData?.images?.map(image => (
// //               <div
// //                 key={image.src}
// //                 className='  h-[90px] bg-cover bg-center'
// //                 style={{
// //                   backgroundImage: `url(${image.src})`
// //                 }}
// //               ></div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   ))}
// //   {mapData?.map(mapData => (
// //     <div
// //       className='   absolute  top-[5%] left-[15%] group   text-2xl'
// //       key={mapData?.id}
// //     >
// //       <button className=' h-10 w-10 opacity-0  text-center  items-center justify-center rounded-full bg-blue3 text-white  inline-flex  group'>
// //         <span className='  mt-2 text-2xl'>^</span>
// //       </button>

// //       {/* menu list */}
// //       <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
// //         <div className='  '>
// //           <div className='pb-5'>
// //             <p>{mapData?.desc}</p>
// //           </div>

// //           <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
// //             {mapData?.images?.map(image => (
// //               <div
// //                 key={image.src}
// //                 className='  h-[90px] bg-cover bg-center'
// //                 style={{
// //                   backgroundImage: `url(${image.src})`
// //                 }}
// //               ></div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   ))}
// //   {/* ///////end of  map info hover//////// */}
// //   {/* <div className='w-64 h-64 bg-red-100 relative'>
// //               <div
// //                 className='w-[300px] h-[300px] absolute inset-0 bg-cover bg-center z-0'
// //                 style={{ backgroundImage: 'url(/images/boat-3.jpg)' }}
// //               ></div>
// //               <div className='opacity-0 bg-dark hover:opacity-100 duration-300 font-light text-md text-white  p-3 absolute hover:translate-y-[-90px] inset-0 z-10 flex justify-center items-center '>
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                 Pariatur cupiditate quo culpa dignissimos nemo amet aperiam
// //                 ullam! Recusandae, voluptate necessitatibus?
// //               </div>
// //             </div> */}
// // </div>

// // map

// // <section className='sm:pt-[80px] pt-[40px]  pb-[10px]'>
// //   {/* <div className='py-32 p-20'>

// //   </div> */}

// //   <div className='max-w-[1200px] md:p-5  p-3 max-ms:mb-[450px]    py-10   mx-auto   grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
// //     <div className='relative map-details   text-blue3   p-5  bg-gray-200  '>
// //       <div className='pb-20'>
// //         <Programlist />
// //       </div>
// //       {/* <BookForm /> */}
// //       <div className='sm:px-5  inline-block  absolute bottom-[20px] left-0 right-0  w-full'>
// //         <button className='flex h-[70px] w-[100%] items-center justify-center   bg-teal-500/80 text-white bg-opacity-75   transition hover:bg-opacity-100'>
// //           <Link href={'/bookPage'}>Book Now</Link>
// //         </button>
// //       </div>
// //     </div>

// //     <div className='relative   min-h-[800px] max-sm:min-h-[500px]       map-location  bg-gray-200 lg:col-span-1'>
// //       <Image
// //         src={'/images/map-1.png'}
// //         alt='sea-island'
// //         fill
// //         className='     object-center '
// //       />
// //       {/* ////// start of map info hover///////// */}
// //       {mapData?.map(mapData => (
// //         <div
// //           className='   absolute top-[43%] left-[35%] group   text-2xl'
// //           key={mapData?.id}
// //         >
// //           <button className=' h-10 w-10 opacity-0 text-center  items-center justify-center rounded-full   bg-blue3 text-white  inline-flex  group'>
// //             <span className='  mt-2 text-2xl'>^</span>
// //           </button>

// //           {/* menu list */}
// //           <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
// //             <div className='  '>
// //               <div className='pb-5'>
// //                 <p>{mapData?.desc}</p>
// //               </div>

// //               <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
// //                 {mapData?.images?.map(image => (
// //                   <div
// //                     key={image.src}
// //                     className='  h-[90px] bg-cover bg-center'
// //                     style={{
// //                       backgroundImage: `url(${image.src})`
// //                     }}
// //                   ></div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //       {mapData?.map(mapData => (
// //         <div
// //           className='   absolute  top-[5%] left-[15%] group   text-2xl'
// //           key={mapData?.id}
// //         >
// //           <button className=' h-10 w-10 opacity-0  text-center  items-center justify-center rounded-full bg-blue3 text-white  inline-flex  group'>
// //             <span className='  mt-2 text-2xl'>^</span>
// //           </button>

// //           {/* menu list */}
// //           <div className='z-10  rounded   hidden text-white   group-hover:block py-5 px-8 text-sm font-light bg-blue3 sm:w-[500px] w-[320px] max-w-[700px]'>
// //             <div className='  '>
// //               <div className='pb-5'>
// //                 <p>{mapData?.desc}</p>
// //               </div>

// //               <div className='grid w-full grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8'>
// //                 {mapData?.images?.map(image => (
// //                   <div
// //                     key={image.src}
// //                     className='  h-[90px] bg-cover bg-center'
// //                     style={{
// //                       backgroundImage: `url(${image.src})`
// //                     }}
// //                   ></div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //       {/* ///////end of  map info hover//////// */}
// //       {/* <div className='w-64 h-64 bg-red-100 relative'>
// //         <div
// //           className='w-[300px] h-[300px] absolute inset-0 bg-cover bg-center z-0'
// //           style={{ backgroundImage: 'url(/images/boat-3.jpg)' }}
// //         ></div>
// //         <div className='opacity-0 bg-dark hover:opacity-100 duration-300 font-light text-md text-white  p-3 absolute hover:translate-y-[-90px] inset-0 z-10 flex justify-center items-center '>
// //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //           Pariatur cupiditate quo culpa dignissimos nemo amet aperiam
// //           ullam! Recusandae, voluptate necessitatibus?
// //         </div>
// //       </div> */}
// //     </div>
// //   </div>
// // </section>
