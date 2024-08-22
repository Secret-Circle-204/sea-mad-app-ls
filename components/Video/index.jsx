'use client'

import Image from 'next/image'
import { useState } from 'react'
import SectionTitle from '../Common/SectionTitle'

const videosec = {
  videoId: 'PqVZ9QaQF2k',
  vidImg:
    'https://c7.alamy.com/comp/CYYK13/hotels-with-red-sea-beaches-in-hurghada-CYYK13.jpg'
}
import ModalVideo from 'react-modal-video'

const Video = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className='relative z-10 py-16 md:py-20 lg:py-28'>
      <div className='container'>
        {/* <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        /> */}
        <div className='mb-10 flex flex-col items-center justify-center text-center'>
          <h1 className='mb-5 text-xl font-bold text-blue3 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
            Experience The Best of The Red Sea
          </h1>
          <p>
            Red Sea Liveaboards stunning marine wildlife, beautiful corals,
            amazing wrecks, turquoise lagoons – experience it all with Blue
            plant Liveaboards.
          </p>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div
              className='wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md'
              data-wow-delay='.15s'
            >
              <div className='relative aspect-[77/40] items-center justify-center'>
                <img
                  src={videosec.vidImg}
                  alt='video image'
                  // fill
                  className='object-cover object-center w-full'
                  // sizes='(max-width: 768px) 100vw, 770px'
                  // priority
                  // placeholder='blur'
                  // loading='lazy'
                />
                <div className='absolute top-0 right-0 flex h-full w-full items-center justify-center'>
                  <button
                    onClick={() => setOpen(true)}
                    className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100'
                  >
                    <svg
                      width='16'
                      height='18'
                      viewBox='0 0 16 18'
                      className='fill-current'
                    >
                      <path d='M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z' />
                    </svg>
                  </button>
                  <ModalVideo
                    channel='youtube'
                    autoplay={true}
                    start={true}
                    isOpen={isOpen}
                    videoId='nbqtnYrczbo'
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 z-[-1]'>
        {/* <img src='/images/video/shape.svg' alt='shape' className='w-full' /> */}
      </div>
    </section>
  )
}

export default Video
