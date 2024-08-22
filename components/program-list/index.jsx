'use client'
// import { Button } from '@nextui-org/button'
import React from 'react'
// import NewsLatterBox from '@/components/Contact/NewsLatterBox'

export default function ProgramList () {
  const [openTab, setOpenTab] = React.useState(1)
  // const [isOpen, setOpen] = React.useState(false)

  return (
    <>
      <section className='  flex flex-wrap'>
        <div className='w-full p-2 bg-teal-500/80 text-white'>
          <h1 className='text-2xl font-semibold '>Brothers & Daedalus Route</h1>
          <p className='text-xl font-semibold'>ADVENTURE AWAITS</p>
        </div>

        <div className='w-full'>
          <ul
            className='flex gap-3  mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='  max-w-[180px]   last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white   bg-blue3/70'
                    : 'text-white  bg-blue3')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Day-1
              </a>
            </li>
            <li className='  max-w-[180px]   last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white   bg-blue3/70'
                    : 'text-white  bg-blue3')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Day-2
              </a>
            </li>
            <li className='  max-w-[180px]   last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white   bg-blue3/70'
                    : 'text-white  bg-blue3')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Day-3
              </a>
            </li>
            <li className='  max-w-[180px]   last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-2 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 4
                    ? 'text-white   bg-blue3/70'
                    : 'text-white  bg-blue3')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(4)
                }}
                data-toggle='tab'
                href='#link4'
                role='tablist'
              >
                Day-4
              </a>
            </li>
          </ul>
          <div className='relative  text-blue3 dark:text-white flex flex-col min-w-0 break-words   bg-none w-full mb-6   rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <p>
                    <span className='text-xl font-medium'>
                      Arriving & Check-in
                    </span>
                    <br />
                    Transfer from Hurghada Airport to the “Boats Dock” at New
                    Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the
                    boat, depending on your arrival time. Dive guide
                    introduction for the boat plan, safety diving statements,
                    and recommendations for a safe and enjoyable vacation. Also,
                    a short briefing about marine life and dive sites you may
                    visit throughout your liveaboard trip.
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <p>
                    <span className='text-xl font-medium'>
                      1 Check Dive, 1 Regular Dive & 1 Night Dive at “Gota Abu
                      Ramada or Small Giftun”
                    </span>
                    <br />
                    Breakfast & Briefing by dive guide about Check-Dive at “Gota
                    Abu Ramada” while the boat is sailing to it. Check Dive at
                    Gota Abu Ramada to check all equipment, safety requirements,
                    and SMB. Break for lunch & chill out. Dive site briefing,
                    then 1st Dive at “Gota Abu Ramada“ Break & chill out while
                    enjoying the sunset & dinner. Dive site briefing, then Night
                    Dive at Gota Abu Ramada The boat sails at night to Brothers
                    Islands.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <p>
                    <span className='text-xl font-medium'>
                      3 Dives at Brothers Islands
                    </span>
                    <br />
                    Dive site briefing, then 1st Dive at Big Brother Island.
                    Short break & breakfast. Dive site briefing, then 2nd Dive
                    at Big Brother Island. Break for lunch & chill out. Dive
                    site briefing, then 3rd Dive at Little Brother Island.
                    Dinner and chilling out. The boat sails at night to
                    Daedalus.
                  </p>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id='link4'>
                  <p>
                    <span className='text-xl font-medium'>
                      3 Dives at Daedalus Reef
                    </span>
                    <br />
                    Dive site briefing, then 1st Dive at North Plateau. Short
                    break & breakfast. Dive site briefing, then 2nd Dive at
                    South Plateau. Break for lunch & chill out. Dive site
                    briefing, then 3rd Dive at Light House of Daedalus. Chilling
                    out while enjoying the sunset and dinner. Overnight at
                    Daedalus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
