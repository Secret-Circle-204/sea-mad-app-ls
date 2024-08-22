'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

// import Link from 'next/link'
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Download from "yet-another-react-lightbox/plugins/download";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import getAssetURL from '@/lib/get-asset-url';











// const slidesImages = [
//     {
//       id: 1,
//       name: 'AVAO BOAT',
//       overVeiw:
//         ' AVAO boat is a new modern wooden boat, fully prepared & equipped for diving liveaboard. The boat cabins feature an ensuite bathroom, mini-bar, storage space, and AC. Inside the main deck is a spacious salon with comfortable sofas, an entertainment area, a dining room, a buffet station, and a bar. There is also an open-air lounge and bar on the sun deck, the perfect place to unwind at the end of a day of fantastic diving with a cold drink in hand. The third lounge and sunbeds are up on the Skydeck for relaxing and soaking up the sun in between dives.',
//       // feature: [
//       //   {
//       //     id: 1,
//       //     name: 'Cabin',
//       //     overVeiw: 'Wooden Cabin'
//       //   },
//       //   {
//       //     id: 2,
//       //     name: 'Cabin',
//       //     overVeiw: 'Wooden Cabin'
//       //   },
//       //   {
//       //     id: 3,
//       //     name: 'Cabin',
//       //     overVeiw: 'Wooden Cabin'
//       //   },
//       //   {
//       //     id: 4,
//       //     name: 'Cabin',
//       //     overVeiw: 'Wooden Cabin'
//       //   }
//       // ],
//       images: [
//         {
//           src: '/images/boat/1.png',
//           alt: 'sea-island'
//         },
//         {
//           src: '/images/boat/2.png',
//           alt: 'sea-island'
//         },
//         {
//           src: '/images/boat/1.png',
//           alt: 'sea-island'
//         },
//         {
//           src: '/images/boat/3.png',
//           alt: 'sea-island'
//         }
//       ]
//     }
//   ]

export default function BoatLightBox({ slide, MainImageclass }) {
    const [open, setOpen] = useState(false);

    const className = MainImageclass
    console.log('slides  s)', slide)

    const position = "bottom"
    const width = 120
    const height = 100
    const border = 0.5
    const borderRadius = 6
    const gap = 16
    const padding = 4
    const preload = 2
    const showToggle = true


    //  const slides = slide.map((item, index) => {
    //         return {
    //             src: getAssetURL(item.directus_files_id),
    //             alt: 'sea-island'
    //         }
    //     })
    const slides = [

        {
            src: '/images/boat/1.png',
            alt: 'sea-island'
        },
        {
            src: '/images/boat/1.png',
            alt: 'sea-island'
        },
        {
            src: '/images/boat/1.png',
            alt: 'sea-island'
        },
        {
            src: '/images/boat/3.png',
            alt: 'sea-island'
        },
        {
            src: '/images/boat/1.png',
            alt: 'sea-island'
        }
    ]
    const slid = slides?.map((item => (  {
        src: item.src,
        alt: item.alt
    })))
    return (
        <>


            <Image
                className={className}
                onClick={() => setOpen(true)} src={"/images/boat/1.png"} alt="sea-island" loading="lazy" width={500} height={350} />
            {/* <button onClick={() => setOpen(true)} className='cursor-pointer'>
                    open image
                </button> */}
            <Lightbox
                open={open}

                animationSlide={true}
                animationDuration={700}
                animationTimingFunction="cubic-bezier(0.25, 0.1, 0.25, 1)"
                toolbar={{
                    buttons: [
                        "download",
                        <button key="my-button" type="button" className="yarl__button">

                        </button>,
                        "slideshow",
                        "close",
                    ],
                }}
                close={() => setOpen(false)}
                styles={{
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        // h-auto hover:opacity-90  max-w-full rounded-lg



                    }
                }}

                plugins={[Thumbnails, Slideshow]}
                slides={slid}
                carousel={{ preload }}
                thumbnails={{
                    show: showToggle,
                    position: position,
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    border: border,
                    padding: padding,
                    gap: gap

                }}


            />

            <div
                className='mt-2 grid grid-cols-4 lg:grid-cols-5 gap-2'
            >

                {slides?.map((img, index) => (
                    <div
                        className=''
                        key={index}>

                        <img
                            className=' cursor-pointer  h-[95px] object-cover object-center   w-full rounded-lg'
                            onClick={() => setOpen(true)}
                            src={img?.src}
                            alt=''
                            width={140}
                            height={90}
                        // loading="lazy"
                        />

                    </div>
                ))}
            </div>
        </>
    );
}






// const boats = [
//     {
//         id: 1,
//         title: 'Cabin',
//         Supplies: 'Supplies',
//         Specification: 'Boat Specification',
//         Specification_desc: 'The boat specifications are as follows . lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
//         Specification_table: [
//             {
//                 id: 1,
//                 title: 'Year Built: 2023',
//                 desc: 'Length: 36m',
//                 value: 'Length: 36m'

//             },
//             {
//                 id: 2,
//                 title: '2012Engine 1: CAT C9 Acert Diesel Marine Engine   503 BHP',
//                 desc: 'Beam: 9.2m',
//                 value: 'Beam: 9.2m'
//             },
//             {
//                 id: 3,
//                 title: 'Engine 2: CAT C7 Diesel Engine  275 BHP',
//                 desc: ' 1,000 m',
//                 value: 'Guest Capacity: 26'
//             },
//             {
//                 id: 4,
//                 title: 'Fuel capacity: 19000 liters',
//                 desc: ' 1,000 m',
//                 value: 'Number of bathrooms: 13'
//             },
//             {
//                 id: 5,
//                 title: 'Freshwater maker: x2 Aquagib 260 ltr/hr',
//                 desc: ' 1,000 m',
//                 value: ' Water capacity: 22,500 liters'
//             },

//         ],
//         Supplies_desc:
//             'The Boat provides all diving supplies to make sure that your trip will go smoothly.',
//         main_image: '/images/boat-s.png',
//         Supplies_image: '/images/supplies.png',
//         Restaurant_image: '/images/Restaurant/7.png',
//         desc: ' The boat  has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. The boat  has a variety of cabin types on each floor of it. All cabins include windows to enjoy the sea view. lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//         feature: [
//             {
//                 id: 1,
//                 name: 'Cabin',
//                 overVeiw: 'Wooden Cabin'
//             },
//             {
//                 id: 2,
//                 name: 'Cabin',
//                 overVeiw: 'Wooden Cabin'
//             },
//             {
//                 id: 3,
//                 name: 'Cabin',
//                 overVeiw: 'Wooden Cabin'
//             }
//         ],
//         restruanImages: [
//             {
//                 src: '/images/Restaurant/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Restaurant/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Restaurant/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Restaurant/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Restaurant/1.png',
//                 alt: 'sea-island'
//             }
//         ],
//         Reception_images: [
//             {
//                 src: '/images/Reception/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Reception/3.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Reception/2.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Reception/4.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/Reception/5.png',
//                 alt: 'sea-island'
//             }
//         ],
//         images: [
//             {
//                 src: '/images/boat/1.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/boat/2.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/boat/2.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/boat/2.png',
//                 alt: 'sea-island'
//             },
//             {
//                 src: '/images/boat/3.png',
//                 alt: 'sea-island'
//             }
//         ]
//     }
// ]