// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// // import ThemeToggler from './ThemeToggler'
// import menuData from './menuData'
// import directus from '@/lib/directus'
// import { readItems, readItem } from '@directus/sdk'
// import getAssetURL from '@/lib/get-asset-url'

// const BoatData = [
//   {
//     id: 1,
//     name: 'AVAO-BOAT',
//     slug: 'avao-boat-details'
//   }
// ]

// const Header = () => {
//   // const [Relatedexplor, setRelatedexplor] = useState([])
//   // const [BoatData, setBoatData] = useState([])

//   // const get_boat_data = async () => {
//   //   try {
//   //     const fetchedBoat = await directus.request(
//   //       readItems('the_boats', {
//   //         fields: ['slug', 'boat_name']
//   //       }),
//   //       {
//   //         // next: { revalidate: 7 }
//   //         cache: 'no-store'
//   //       }
//   //     )
//   //     setBoatData(fetchedBoat)
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error)
//   //     // Handle errors as needed
//   //   }
//   // }
//   // const get_Related_Explor = async () => {
//   //   try {
//   //     const fetchedRelated = await directus.request(
//   //       readItems('posts', {
//   //         fields: ['id', 'title', 'image.*.*', 'slug', 'date_published']
//   //       }),
//   //       {
//   //         // next: { revalidate: 7 }
//   //         cache: 'no-store'
//   //       }
//   //     )
//   //     setRelatedexplor(fetchedRelated)
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error)
//   //     // Handle errors as needed
//   //   }
//   // }

//   // useEffect(() => {
//   //   // get_Related_Explor()
//   //   get_boat_data()
//   // }, [])

//   // console.log('related-explor', Relatedexplor)

//   // Navbar toggle
//   const [navbarOpen, setNavbarOpen] = useState(false)
//   const navbarToggleHandler = () => {
//     setNavbarOpen(!navbarOpen)
//   }

//   // Sticky Navbar
//   // const [sticky, setSticky] = useState(false)
//   // const handleStickyNavbar = () => {
//   //   if (window.scrollY >= 80) {
//   //     setSticky(true)
//   //   } else {
//   //     setSticky(false)
//   //   }
//   // }
//   // useEffect(() => {
//   //   window.addEventListener('scroll', handleStickyNavbar)
//   // })

//   // submenu handler
//   const [openIndex, setOpenIndex] = useState(-1)
//   const  handleSubmenu = index => {
//     if (openIndex === index) {
//       setOpenIndex(-1)
//     } else {
//       setOpenIndex(index)
//     }
//   }

//   const navigationItems = [
//     {
//       id: 1,
//       label: 'Home',
//       path: '/',
//       newTab: false
//     },
//     {
//       id: 2,
//       label: 'About Us',
//       path: '/about',
//       newTab: false
//     },

//     {
//       id: 6,
//       label: 'Programs & Trips',
//       path: '/trips',
//       newTab: false
//     },

//     {
//       id: 3,
//       label: 'Services',
//       submenu: [
//         { id: 3.1, label: 'Service 1', path: `${BoatData[0]?.id}` },
//         { id: 3.2, label: 'Service 2' },
//         { id: 3.3, label: 'Service 3' },
//       ],
//       path: '#',
//       newTab: false
//     }, //Services has a dropdown menu links
//     {
//       id: 5,
//       label: 'Menu',
//       path: '/menu',
//       newTab: false
//     },
//     {
//       id: 7,
//       label: 'The Boats',
//       submenu: [
//         { id: 7.1, label: 'AVAO BOAT-1', path: '/boat', newTab: false },
//         { id: 7.2, label: 'AVAO BOAT-2', path: '/the-boat/rooms-details', newTab: false },
//         { id: 7.3, label: 'AVAO BOAT-3', path: '/the-boat/food-and-drink', newTab: false },

//       ],
//       path: '#',
//       newTab: false,

//     },

//     { id: 4, label: 'Contact Us', path: '/contact', newTab: false }
//   ];

//   return (
//     <>
//       <header className={`header fixed  lg:py-1 py-3   z-40 flex w-full items-center dark:bg-transparent bg-dark `}>
//         <div className='mx-auto max-w-[1250px] sm:pr-3 sm:space-x-32 max-sm:px-3 relative  w-full  flex items-center  justify-between    '>
//           <div className='w-60 max-w-full '>
//             <Link
//               href='/'
//               className={`header-logo block w-full hover:scale-105 hover:opacity-80  `}
//             >
//               {/* <h1 className='text-xl font-bold text-white dark:text-white'>
//               SEA-MAD
//             </h1> */}
//               <Image
//                 src='/images/logo/logo-2.svg'
//                 alt='logo'
//                 width={110}
//                 height={30}
//                 className='w-full dark:hidden'
//               />
//               <Image
//                 src='/images/logo/logo.svg'
//                 alt='logo'
//                 width={110}
//                 height={30}
//                 className='hidden w-full dark:block'
//               />
//             </Link>
//           </div>

//           <div className='navbar-links'>
//             <button
//               onClick={navbarToggleHandler}
//               id='navbarToggler'
//               aria-label='Mobile Menu'
//               className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden'
//             >
//               <span
//                 className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ' '
//                   }`}
//               />
//               <span
//                 className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0 ' : ' '
//                   }`}
//               />
//               <span
//                 className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '
//                   }`}
//               />
//             </button>
//            <nav id='navbarCollapse' className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue3 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 
//            ${navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'} `}>

//          <ul className='block lg:flex sm:space-x-8'>
//      {navigationItems?.map((item) => (
//  <li key={item?.id} className=' items-center text-white group relative'>
//    {/* Handle normal menus item */}
//    
//    {item.submenu ? (
//      // Handle dropdowns menu item
//      <>
//        <Link
//          className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
//          href={`${item?.path}`}
//        >
//          {item.label}
//          <svg
//            className="w-5 h-5 ml-2 fill-current text-white group-hover:text-gray-300 dark:group-hover:text-gray-400"
//            xmlns="http://www.w3.org/2000/svg"
//            viewBox='0 0 15 14'
//          >
//            <path
//              fillRule="evenodd"
//              fill='currentColor'
//              clipRule="evenodd"
//            />
//          </svg>
//        </Link>
//        {/* submenu dropdowns */}
//        <ul
//          className='w-full submenu relative top-full left-0 rounded-md max-sm:bg-none bg-blue3 text-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:min-w-[180px] lg:mr-10 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full'
//        >
//          {item.submenu.map((subItem) => (
//            <li key={subItem.id} className='' >
//              <Link
//                className=' px-4 block whitespace-no-wrap rounded py-2.5 text-sm text-white hover:opacity-70 dark:text-white lg:px-3'
//                href={`${subItem.path}`} // Adjust link based on your needs
//              >
//                {subItem.label}
//              </Link>
//            </li>
//          ))}
//        </ul>
//      </>
//    ) : (
//      // Handle regular navigation item
//                       <Link
//                         key={item.id}
//                         className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
//                         href={`${item?.path}`}
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header
//#######++++++++++++++++++++#########
// // <nav
// //   id='navbarCollapse'
// //   className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue3 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
// //     navbarOpen
// //       ? 'visibility top-full opacity-100'
// //       : 'invisible top-[120%] opacity-0'
// //   }`}
// // >
// //   <ul className='block  lg:flex sm:space-x-8'>
// //     {menuData.map((menuItem, index) => (
// //       <li key={menuItem.id} className='group relative'>
// //         {menuItem.path ? (
// //           <Link
// //             href={menuItem.path}
// //             className={`flex py-2 text-base text-white group-hover:opacity-70  dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
// //           >
// //             {menuItem.title}
// //           </Link>
// //         ) : (
// //           <>
// //             <Link
// //               onClick={() => handlesubmenu(index)}
// //               className='flex cursor-pointer items-center   py-2  text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'
// //               href={'#'}
// //             >
// //               {menuItem.title}
// //               <span className='pl-3'>
// //                 <svg width='15' height='14' viewBox='0 0 15 14'>
// //                   <path
// //                     fill='currentColor'
// //                   />
// //                 </svg>
// //               </span>
// //             </Link>
// //             <div
// //               className={`submenu relative top-full left-0 p-2 rounded-md max-sm:bg-none bg-blue3 text-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:min-w-[180px] lg:mr-10 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
// //                 openIndex === index ? 'block' : 'hidden'
// //               }`}
// //             >
// //               {menuItem.submenu.map(submenuItem => (
// //                 <Link
// //                   href={submenuItem.path}
// //                   key={submenuItem.id}
// //                   className='block rounded py-2.5 text-sm text-white hover:opacity-70 dark:text-white lg:px-3'
// //                 >
// //                   {submenuItem.title}
// //                 </Link>
// //               ))}
// //             </div>
// //           </>
// //         )}
// //       </li>
// //     ))}
// //     {/* Tha boats menu */}
// //     <li className='dropdown items-center text-white  group relative'>
// //       <button className='flex items-center py-2 text-base text-white group-hover:opacity-70  dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'>
// //         <span className='mr-1'>The Boats</span>
// //         <span className='pl-1'>
// //           <svg width='15' height='14' viewBox='0 0 15 14'>
// //             <path
// //               fill='currentColor'
// //             />
// //           </svg>
// //         </span>
// //       </button>
// //       <ul className=' w-full submenu relative top-full left-0   rounded-md max-sm:bg-none bg-blue3 text-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:min-w-[180px] lg:mr-10 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full  dropdown-menu   hidden    pt-1'>
// //         {BoatData?.map(submenuboat => (
// //           <li key={submenuboat.id} className=' '>
// //             <Link
// //               href={submenuboat.slug}
// //               className=' px-4 block whitespace-no-wrap rounded py-2.5 text-sm text-white hover:opacity-70 dark:text-white lg:px-3'
// //             >
// //               {submenuboat.name}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </li>
// //     {/* Tha boats menu */}
// //     {/* {BoatData.map((BoatData, index) => (
// //       <li key={BoatData.id} className='group relative'>
// //         {BoatData.slug ? (
// //           <Link
// //             href={BoatData.slug}
// //             className={`flex py-2 text-base text-white group-hover:opacity-70  dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
// //           >
// //             The Boats
// //           </Link>
// //         ) : (
// //           <>
// //             <Link
// //               onClick={() => handlesubmenu(index)}
// //               className='flex cursor-pointer items-center justify-between py-2  text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'
// //               href={'#'}
// //             >
// //               {BoatData.name}
// //               <span className='pl-3'>
// //                 <svg width='15' height='14' viewBox='0 0 15 14'>
// //                   <path
// //                     fill='currentColor'
// //                   />
// //                 </svg>
// //               </span>
// //             </Link>
// //             <div
// //               className={`submenu relative top-full left-0 p-2 rounded-md max-sm:bg-none bg-blue3 text-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:min-w-[180px] lg:mr-10 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
// //                 openIndex === index ? 'block' : 'hidden'
// //               }`}
// //             >
// //               {BoatData?.map(submenuItem => (
// //                 <Link
// //                   href={submenuItem.path}
// //                   key={submenuItem.id}
// //                   className='block rounded py-2.5 text-sm text-white hover:opacity-70 dark:text-white lg:px-3'
// //                 >
// //                   {submenuItem.name}
// //                 </Link>
// //               ))}
// //             </div>
// //           </>
// //         )}
// //       </li>
// //     ))} */}
// //   </ul>
// // </nav>

// // import { useTheme } from 'next-themes'

// // const ThemeToggler = () => {
// //   const { theme, setTheme } = useTheme()
// //   return (
// //     <button
// //       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
// //       className='bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white dark:text-white md:h-14 md:w-14'
// //     >
// //       <svg
// //         viewBox='0 0 23 23'
// //         className='h-5 w-5 stroke-current dark:hidden md:h-6 md:w-6'
// //         fill='none'
// //       >
// //         <path
// //           d='M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z'
// //           strokeWidth='2'
// //           strokeLinecap='round'
// //           strokeLinejoin='round'
// //         />
// //       </svg>
// //       <svg
// //         viewBox='0 0 25 24'
// //         fill='none'
// //         xmlns='http://www.w3.org/2000/svg'
// //         className='hidden h-5 w-5 dark:block md:h-6 md:w-6'
// //       >
// //         <mask id='path-1-inside-1_977:1934' fill='white'>
// //           <path d='M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z' />
// //         </mask>
// //         <path
// //           d='M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z'
// //           fill='black'
// //           stroke='white'
// //           strokeWidth='2'
// //           mask='url(#path-1-inside-1_977:1934)'
// //         />
// //       </svg>
// //     </button>
// //   )
// // }

// // export default ThemeToggler
