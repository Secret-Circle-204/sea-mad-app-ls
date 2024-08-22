'use client'
import React, { useState } from 'react'
import RelatedActivitie from '../Activities/RelatedActivitie'
export default function ActivitiePage() {


    const handleActive = (id) => {
        setActive(id)
    }

    const data = [
        {
            id: 1,
            title: 'SNORKELING',
            subtitle: 'at Red Sea Diving Safari',
            detail: [
                {
                    id: 1,
                    title: 'MARSA SHAGRA HOUSE REEF',
                    description: 'Guests staying at Marsa Shagra are invited to enjoy snorkeling free of charge (excluding equipment) on the house reef. It is, without doubt, one of the best house reefs with a huge diversity of marine life and is accessible to all levels of',
                    image: [
                        './images/blog/blog-01.jpg',
                        './images/blog/blog-02.jpg',
                        './images/blog/blog-03.jpg'
                    ]
                },
                {
                    id: 2,
                    title: 'SATAYAH REEF (DOLPHIN REEF)',
                    description: 'Guests staying at Marsa Shagra are invited to enjoy snorkeling free of charge (excluding equipment) on the house reef. It is, without doubt, one of the best house reefs with a huge diversity of marine life and is accessible to all levels of',
                    image: [
                        './images/blog/blog-01.jpg',
                        './images/blog/blog-02.jpg',
                        './images/blog/blog-03.jpg'
                    ]

                }
            ]

        },
        {
            id: 2,
            title: 'KITE SURFING',
            subtitle: 'at Red Sea Diving Safari',
            detail: [
                {
                    id: 1,
                    title: 'KITE SURFING',
                    description: ' Shagra are invited to enjoy snorkeling free of charge (excluding equipment) on the house reef. It is, without doubt, one of the best house reefs with a huge diversity of marine life and is accessible to all levels of',
                    image: [
                        './images/blog/blog-01.jpg',
                        './images/blog/blog-02.jpg',
                        './images/blog/blog-03.jpg'
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'YOGA',
            subtitle: 'at Red Sea Diving Safari',
            detail: [
                {
                    id: 1,
                    title: 'YOGA',
                    description: ' enjoy snorkeling free of charge (excluding equipment) on the house reef. It is, without doubt, one of the best house reefs with a huge diversity of marine life and is accessible to all levels of',
                    image: [
                        './images/blog/blog-01.jpg',
                        './images/blog/blog-02.jpg',
                        './images/blog/blog-03.jpg'
                    ]
                },

            ]
        },
        {
            id: 4,
            title: 'ANOTHER TITLE',
            subtitle: 'at Red Sea Diving Safari',
            detail: [
                {
                    id: 1,
                    title: 'ANOTHER TITLE',
                    description: ' enjoy snorkeling free of charge (excluding equipment) on the house reef. It is, without doubt, one of the best house reefs with a huge diversity of marine life and is accessible to all levels of',
                    image: [
                        './images/blog/blog-01.jpg',
                        './images/blog/blog-02.jpg',
                        './images/blog/blog-03.jpg'
                    ]
                },

            ]
        }
    ]

    const [active, setActive] = useState(1)






    return (
        <div className='w-screen h-full py-12 mx-auto '>
            <section
                    className=' w-screen bg-cover mx-auto     h-[80vh]  object-cover object-center bg-center bg-no-repeat items-center text-center justify-center flex flex-col flex-wrap    '
                style={{
                    backgroundImage: `url("/images/activeti.jpg")`
                }}
            >
                <div className='   bg-blue3/30 shadow-primary/40   shadow-2xl drop-shadow-2xl   w-full  items-center text-center justify-center  text-white max-w-[1200px] mx-auto  p-5 '>
                    <h1 className='  drob-shadows   text-3xl font-semibold '>
                        {/* {data[active - 1]?.title} */}
                        DISCOVER AMAZING EXPERIENCES 
                    </h1>
                    <p className=' px-5 pt-1  max-w-[80%] mx-auto '>
                    A wide range of activities available in and around our villages


                    </p>
                </div>
            </section>

            <div className=' mt-16    bg-blue3   max-w-[1200px] mx-auto text-2xl font-bold flex flex-wrap items-center p-6 justify-between  '>
                {/* by default show activitie 1 */}

                {data?.map(data => (
                    <button
                        key={data?.id}
                        className={`  font-bold  ${active === data?.id ? 'text-blue-600 border-b-2' : 'text-white'}  `} onClick={() => handleActive(data?.id)}>
                        {data?.title}
                    </button>

                ))}

            </div>

            <div className=' max-w-[1200px] mx-auto py-12 ' >
                {data?.map(data => (
                    <div key={data?.id} className={` ${active === data?.id ? 'block' : 'hidden'}     w-full `}>
                        <div className='w-full border-b border-body-color border-opacity-50   text-2xl p-3  gap-4'>
                            <h2>{data?.title}</h2>
                            <p>{data?.subtitle}</p>
                        </div>
                        <div className='w-full grid grid-cols-1 gap-4'>

                            <RelatedActivitie data={data} active={active} handleActive={handleActive} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
