'use client'
import { getYear, getDaysInMonth, startOfMonth, addDays, format, parse } from 'date-fns'
import Image from 'next/image'
import Programlist from '@/components/program-list'
import Program from '@/components/program'
import Link from 'next/link'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'
import { readItems } from '@directus/sdk'
import React, { useState, useEffect } from 'react'
import getAssetURL from '@/lib/get-asset-url'
import Calendar from '@/components/bookingForm/calendar'
import CalendarMonths from '@/components/bookingForm/CalendarMonths'
import TripsSearch from '@/components/program/TripsSearch'
import TripsMain from '@/components/program/TripsMain'

const plan = [ 
    {
        id: '21e05753-b453-4446-b35e-d0d93956d917',
        sort: null,
        user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_created: '2023-09-09T03:14:51.260Z',
        user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_updated: '2024-06-13T19:46:24.062Z',
        name: 'Salem Express 6-days: Elphinstone-Salem   Express',
        owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
        organization: null,
        deal_stage: null,
        deal_notes: null,
        boat: 'Sea Side Boat',
        status: 'available',
        available_places: 12,
        from: '2024-08-23',
        to: '2024-09-06',
        price: 150,
        currency: '$',
        month: 'July',
        year: '2024',
        days: [
            {
                id: 1,
                sort: 1,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 1,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.873Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:15:33.818Z',
                    day_number: 'Day-1',
                    day_details:
                        '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            },
            {
                id: 2,
                sort: 2,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 2,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.889Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:17:20.570Z',
                    day_number: 'Day-2',
                    day_details:
                        '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            }
        ]
    },

    {
        id: '11da9404-be68-4aa5-81d4-efa015081cd1',
        sort: null,
        user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_created: '2023-09-09T03:14:51.260Z',
        user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_updated: '2024-06-13T19:46:24.062Z',
        name: 'Brother Islands 7 Days: North-Tiran-Brother ',
        owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
        organization: null,
        deal_stage: null,
        deal_notes: null,
        boat: 'Sea Side Boat',
        status: 'available',
        available_places: 12,
        from: '2024-08-25',
        to: '2024-09-08',
        price: 150,
        currency: '$',
        month: 'September',
        year: '2024',
        days: [
            {
                id: 1,
                sort: 1,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 1,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.873Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:15:33.818Z',
                    day_number: 'Day-1',
                    day_details:
                        '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            },
            {
                id: 2,
                sort: 2,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 2,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.889Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:17:20.570Z',
                    day_number: 'Day-2',
                    day_details:
                        '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            }
        ]
    },

    {
        id: 'e3b466ee-61db-42b6-bee2-1bc96b0534bb',
        sort: null,
        user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_created: '2023-09-09T03:14:51.260Z',
        user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
        date_updated: '2024-06-13T19:46:24.062Z',
        name: 'Salem Express  6-days: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
        owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
        organization: null,
        deal_stage: null,
        deal_notes: null,
        boat: 'Sea Side Boat',
        status: 'available',
        available_places: 12,
        from: '2024-09-01',
        to: '2024-09-06',
        price: 150,
        currency: '$',
        month: 'September',
        year: '2024',
        days: [
            {
                id: 1,
                sort: 1,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 1,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.873Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:15:33.818Z',
                    day_number: 'Day-1',
                    day_details:
                        '<p><span class="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            },
            {
                id: 2,
                sort: 2,
                collection: 'programs_details',
                os_deals_id: {
                    id: '21e05753-b453-4446-b35e-d0d93956d917',

                    days: [1, 2, 5, 6, 14, 15]
                },
                item: {
                    id: 2,
                    status: 'published',
                    sort: null,
                    user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_created: '2024-06-07T01:03:15.889Z',
                    user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
                    date_updated: '2024-06-07T02:17:20.570Z',
                    day_number: 'Day-2',
                    day_details:
                        '<p><span class="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
                }
            }
        ]
    },


]

const filterTrips = (trips, filter) => {



    const filteredTrips = []
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i]
        const { month, year, status, name, available_places, from, to } = trip

        if (
             // (!filter.destination.toLowerCase() || filter.destination.toLowerCase() === destination.toLowerCase()) &&
            (!filter.month || filter.month.toLowerCase() === month.toLowerCase()) &&
            (!filter.year || filter.year === year) &&
            (!filter.status || filter.status === status) &&
            (!filter.name || name.toLowerCase().includes(filter.name.toLowerCase())) &&
            (!filter.available_places || filter.available_places === available_places) &&
            (!filter.from || !filter.to || (from >= filter.from && to <= filter.to))
        ) {
            filteredTrips.push(trip)
        }
    }
    return filteredTrips


}


const TripsTable = () => {

    const years = []
    for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 6; i++) {
        years.push(i)
    }


    const [filter, setFilter] = useState({
        month: '',
        from: '',
        to: '',
        // destination: '',
        year: '',
        status: '',
        name: '',
    })

    const handleFilterChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value,
        })
    }

    const handleResetFilter = () => {
        setFilter({
            month: '',
            from: '',
            to: '',
            // destination: '',
            year: '',
            status: '',
            name: '',
        })
    }

    const filteredTrips = filterTrips(plan, filter)

    return (
        <main className='pt-32 p-4 lg:p-10'>
            <TripsSearch trips={plan} filter={filter} years={years}  handleFilterChange={handleFilterChange} handleResetFilter={handleResetFilter} />

            <div className=" trips_page max-w-[1220px] mx-auto grid grid-cols-1 lg:gap-4 lg:p-4 md:grid-cols-1 lg:grid-cols-1">



                {filteredTrips?.map((trip ,filter) => {
                    return (

                        <TripsMain key={trip.id} filter={filter} plan={trip} />
                    )
                })}

            </div>

        </main>
    )
}

export default TripsTable