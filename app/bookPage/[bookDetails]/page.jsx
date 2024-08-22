// import React from 'react'
import ProgramForm from '@/components/bookingForm/TripsForm'
export default function page ({ params }) {
  return (
    <div className='text-3xl font-bold py-32'>
      Booking
      <ProgramForm />
    </div>
  )
}
