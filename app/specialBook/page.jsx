// import React from 'react'
import SpecialForm from '@/components/bookingForm/Specialform'
export default function SpecialBook () {
  return (
    <>
      <section
        style={{
          backgroundImage: `url("/images/book-1.jpg")`
        }}
        className=' object-cover object-center bg-center items-center text-center justify-center flex flex-col flex-wrap w-screen h-[80vh]  bg-cover   z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
      >
        <div className='  w-full  items-center text-center justify-center  text-white max-w-[1200px] mx-auto  p-5 '>
          <h1 className='  drob-shadows  text-3xl font-semibold '>
            Book your joy
          </h1>
          <p className=' px-5 pt-1 text-gray-700  max-w-[80%] mx-auto '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            incidunt alias! Quas quibusdam ducimus inventore!
          </p>
        </div>
      </section>

      <div className=' sm:my-16 mt-5 container bg-blue3/20  sm:rounded-lg max-w-[740px] mx-auto'>
        <div className='   py-16 sm:p-5 mx-auto'>
          <div className='pb-5   border-b'>
            <h2 className='font-bold text-2xl'>Booking Form</h2>
            <p className='text-gray-700'>
              For your safety and enjoyable trip, the plan is flexible and may
              be rearranged or adjusted based on the weather forecast.
            </p>
            <hr className='border-gray-500' />
            <br />
            <SpecialForm />
          </div>
        </div>
      </div>
      {/* <Calendar /> */}
      {/* <BookForm /> */}
      {/* <Contact /> */}
    </>
  )
}
