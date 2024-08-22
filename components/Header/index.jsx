'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'

const BoatData = [
    {
        id: 1,
        name: 'AVAO BOAT',
        slug: 'avao-boat'
    } 
    // {
    //     id: 2,
    //     name: 'PAVO BOAT',
    //     slug: 'pavo-boat'
    // }
]

const Header = () => {
    // const [Relatedexplor, setRelatedexplor] = useState([])
    // const [BoatData, setBoatData] = useState([])

    // const get_boat_data = async () => {
    //   try {
    //     const fetchedBoat = await directus.request(
    //       readItems('the_boats', {
    //         fields: ['slug', 'boat_name']
    //       }),
    //       {
    //         // next: { revalidate: 7 }
    //         cache: 'no-store'
    //       }
    //     )
    //     setBoatData(fetchedBoat)
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //     // Handle errors as needed
    //   }
    // }
    // const get_Related_Explor = async () => {
    //   try {
    //     const fetchedRelated = await directus.request(
    //       readItems('posts', {
    //         fields: ['id', 'title', 'image.*.*', 'slug', 'date_published']
    //       }),
    //       {
    //         // next: { revalidate: 7 }
    //         cache: 'no-store'
    //       }
    //     )
    //     setRelatedexplor(fetchedRelated)
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //     // Handle errors as needed
    //   }
    // }

    // useEffect(() => {
    //   // get_Related_Explor()
    //   get_boat_data()
    // }, [])

    // console.log('related-explor', Relatedexplor)

    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = useState(false)
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen)
    }


    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1)
    const handleSubmenu = (index = -1) => {
        if (openIndex === index) {
            setOpenIndex(-1)
        } else {
            setOpenIndex(index)
        }
    }
    // const [openSubmenu, setOpenSubmenu] = useState(false)
    // const submenuToggleHandler = (

    //     //submenuToggleHandler when submenu is clicked not all the submenus just the have clicked id
    //     index = navigationItems.map((item) => item.label).indexOf(id)


    // ) => {
    //     setOpenSubmenu(!openSubmenu)
    // }




    const navigationItems = [
        {
            id: 1,
            label: 'Home',
            path: '/',
            newTab: false
        },
        {
            id: 2,
            label: 'About Us',
            path: '/about',
            newTab: false
        },
        {
            id: 3,
            label: 'Fleet',
            
            submenu: BoatData.map((item) => {
              
                return { id: item.id, label: item.name, path: `/${item.slug}` }
               
            }),
            path: '#',
            newTab: false,

        },
        {
            id: 4,
            label: 'Programs & Trips',
            path: '/trips',
            newTab: false
        },

        {
            id: 5,
            label: 'Activities',
            path: '/activities',
            newTab: false
        },


        {
            id: 6,
            label: 'Services',
            submenu: [
                // { id: 3.1, label: 'Blog', path: `/blog` },
                { id: 3.2, label: 'Our Services', path: '/services', newTab: false },
                // { id: 3.3, label: 'Page-2', path: '/services/', newTab: false },
            ],
            path: '/#',
            newTab: false
        }, //Services has a dropdown menu links
        // {
        //     id: 5,
        //     label: 'Menu',
        //     path: '/menu',
        //     newTab: false
        // },

        { id: 7, label: 'Contact Us', path: '/contact', newTab: false }

        // { id: 4, label: 'Blog', path: '/blog', newTab: false },
    ];

    return (
        <>
            <header className={`header fixed  lg:py-1 py-3   z-40 flex w-full items-center dark:bg-transparent bg-blue3 `}>
                <div className='mx-auto max-w-[1250px] sm:pr-3 sm:space-x-32 max-sm:px-3 relative  w-full  flex items-center  justify-between    '>
                    <div className='w-60 max-w-full '>
                        <Link
                            href='/'
                            className={`header-logo block w-full hover:scale-105 hover:opacity-80  `}
                        >
                            {/* <h1 className='text-xl font-bold text-white dark:text-white'>
              SEA-MAD
            </h1> */}
                            <Image
                                src='/images/logo/logo-2.svg'
                                alt='logo'
                                width={110}
                                height={30}
                                className='w-full '
                            />
                            {/* <Image
                                src='/images/logo/logo.svg'
                                alt='logo'
                                width={110}
                                height={30}
                                className='  w-full dark:block'
                            /> */}
                        </Link>
                    </div>

                    <div className='navbar-links'>
                        <button
                            onClick={navbarToggleHandler}
                            id='navbarToggler'
                            aria-label='Mobile Menu'
                            className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden'
                        >
                            <span
                                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ' '
                                    }`}
                            />
                            <span
                                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0 ' : ' '
                                    }`}
                            />
                            <span
                                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                                    }`}
                            />
                        </button>
                        <nav id='navbarCollapse' className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue3 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 
           ${navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'} `}>

                            <ul className='block  lg:flex sm:space-x-8 '>
                                {navigationItems?.map((item, index) => (
                                    <li key={item.id} className=' cursor-pointer    text-white group relative'>
                                        {/* Handle normal menus item */}

                                        {item.submenu ? (
                                            // Handle dropdowns menu item
                                            <>
                                                <Link
                                                    className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                                                    href={`${item?.path}`}
                                                    onClick={() => handleSubmenu(index)}





                                                >
                                                    {item.label}

                                                    <span
                                                        // aria-expanded={navbarOpen ? 'true' : 'false'}
                                                        // aria-controls='navbarCollapse'
                                                        className=" dropdown w-4 h-4 ml-2   fill-current text-white group-hover:text-gray-300 dark:group-hover:text-gray-400"

                                                    >
                                                        ▼
                                                    </span>
                                                </Link>
                                                {/* submenu dropdowns */}
                                                <ul
                                                    className={`${openIndex === index ? 'block' : 'hidden'}  w-full submenu relative top-full left-0 rounded-md max-sm:bg-none bg-blue3 text-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:min-w-[180px] lg:mr-10 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full `}
                                                >
                                                    {item?.submenu?.map((subItem) => (
                                                        <li key={subItem?.id}
                                                        //  className={`${openSubmenu  === subItem ? 'block' : 'hidden'} `}
                                                        className='cursor-pointer'
                                                        >
                                                            <Link
                                                                className=' px-4 block whitespace-no-wrap rounded py-2.5 text-sm text-white hover:opacity-70 dark:text-white lg:px-3'
                                                                href={`${subItem?.path}`} // Adjust link based on your needs
                                                            >
                                                                {subItem?.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            // Handle regular navigation item
                                            // <Link
                                            //     key={item.id}
                                            //     className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                                            //     href={`${item?.path}`}
                                            // >
                                            //     {item.label}
                                            // </Link>

                                            <Link
                                                className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                                                href={`${item?.path}`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
