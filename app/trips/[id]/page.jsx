// 'use client'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'

import TripDetails from '@/components/program/TripDetails'
import MapDetails from '@/components/program/MapDetails'
import Image from 'next/image'

//map trip deals data
const mapData = [
  {
    id: 1,
    title: 'Island 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',


    images: [
      {
        src: '/images/salem-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/salem-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/salem-1.jpg',
        alt: 'sea-island'
      },

    ]
  },

  {
    id: 2,
    title: 'Island 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',


    images: [
      {
        src: '/images/boat-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-1.jpg',
        alt: 'sea-island'
      }
    ]
  },
  {
    id: 3,
    title: 'Island 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',


    images: [
      {
        src: '/images/boat-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-1.jpg',
        alt: 'sea-island'
      }
    ]
  },
  {
    id: 4,
    title: 'Island 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',

    images: [
      {
        src: '/images/boat-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-1.jpg',
        alt: 'sea-island'
      }
    ]
  },
  {
    id: 5,
    title: 'Island 5',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta ad vitae nulla esse quibusdam et quos optio placeat tenetur perspiciatis consequuntur eum laudantium error. Aperiam totam voluptates dicta adipisci.',

    images: [
      {
        src: '/images/boat-3.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-2.jpg',
        alt: 'sea-island'
      },
      {
        src: '/images/boat-1.jpg',
        alt: 'sea-island'
      }
    ]
  },
]



//fetch trip data

// async function getProject (id) {
//   try {
//     const plan = await directus.request(
//       readItem('os_deals', id, {
//         // filter: {
//         //   id: { _eq: id }
//         // },
//         fields: [
//           '*',
//           'name',
//           'boat',
//           'from',
//           'to',
//           'days',
//           'days.item.*',
//           'available_places',
//           'currency',
//           'price',
//           'status',
//           'currMonth',
//           'id',
//           // 'author',
//           // 'author.*',

//           'sort'
//           // 'related_projects.*.*',

//           // 'service_related.*.*'
//         ],
//         // sta: ['b'],
//         // status: ['published']
//         limit: -1
//         // sort: ['sort']
//       }),
//       {
//         // next: { revalidate: 7 }
//         // next: {
//         //   revalidate: 1
//         // }
//         cache: 'no-store'
//       }
//     )

//     console.log('plan', plan)
//     return plan
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }
// }





//we wil create a plan data here
// const planData = [
//   {

//     id: '21e05753-b453-4446-b35e-d0d93956d917',
//     sort: null,
//     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_created: '2023-09-09T03:14:51.260Z',
//     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_updated: '2024-06-13T19:46:24.062Z',
//     name: ' 6 plan: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
//     owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
//     organization: null,
//     deal_stage: null,
//     deal_notes: null,
//     boat: 'Sea Side Boat',
//     status: 'available',
//     available_places: 12,
//     from: '2024-07-01',
//     to: '2024-07-06',
//     price: 150,
//     currency: '$',
//     currMonth: '2024-06-15',
//     mapPoints: [
//       {
//         id: 1,
//         name: 'Salem',
//         point: true,
//         sort: 1,
//         top: 'top-[42%]',
//         left: 'left-[39%]'

//       },
//       {
//         id: 2,
//         name: 'hurghada',
//         point: true,
//         sort: 2,
//         top: 'top-[22%]',
//         left: 'left-[32%]'
//       },
//       {
//         id: 3,
//         name: 'Tiran',
//         point: true,
//         sort: 3,
//                 top: 'top-[22%]',
//         left: 'left-[32%]'
//       },
//       {
//         id: 4,
//         name: 'Brother Islands',
//         point: false,
//         sort: 4,
//                 top: 'top-[22%]',
//         left: 'left-[32%]'
//       },
//       {
//         id: 5,
//         name: 'Daedalus',
//         point: false,
//         sort: 5,
//                 top: 'top-[22%]',
//         left: 'left-[32%]'
//       }
//     ],
//     days: [
//       {
//         id: 1,
//         sort: 1,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 1,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.873Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:15:33.818Z',
//           day_number: 'Day-1',
//           day_details:
//             '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 2,
//         sort: 2,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 2,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.889Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:17:20.570Z',
//           day_number: 'Day-2',
//           day_details:
//             '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 3,
//         sort: 3,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 1,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.873Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:15:33.818Z',
//           day_number: 'Day-3',
//           day_details:
//             '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 4,
//         sort: 4,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 2,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.889Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:17:20.570Z',
//           day_number: 'Day-4',
//           day_details:
//             '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 5,
//         sort: 5,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 1,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.873Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:15:33.818Z',
//           day_number: 'Day-5',
//           day_details:
//             '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 6,
//         sort: 6,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 2,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.889Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:17:20.570Z',
//           day_number: 'Day-6',
//           day_details:
//             '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       }
//     ]
//   },

//   {
//     id: 'e3b466ee-61db-42b6-bee2-1bc96b0534bb',
//     sort: null,
//     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_created: '2024-06-07T02:36:48.502Z',
//     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_updated: '2024-06-11T13:59:29.903Z',
//     name: '7 plan: Daedalus-Brother Islands-Safaga',
//     owner: null,
//     organization: null,
//     deal_stage: null,
//     deal_notes: null,
//     boat: 'Sea Boat',
//     status: 'available',
//     available_places: 5,
//     from: '2024-07-17',
//     to: '2024-07-23',
//     price: 260,
//     currency: '$',
//     currMonth: '2024-06-29',
//     mapPoints: [
//       {
//         id: 1,
//         name: 'Salem',
//         point: false,
//         sort: 1,
//         top: 'top-[42%]',
//         left: 'left-[39%]'

//       },
//       {
//         id: 2,
//         name: 'hurghada',
//         point: true,
//         sort: 2,
//         top: 'top-[22%]',
//         left: 'left-[32%]'
//       },
//       {
//         id: 3,
//         name: 'Tiran',
//         point: true,
//         sort: 3,
//                 top: 'top-[22%]',
//         left: 'left-[32%]'
//       },
//       {
//         id: 4,
//         name: 'Brother Islands',
//         point: true,
//         sort: 4,
//                 top: 'top-[90%]',
//         left: 'left-[80%]'
//       },
//       {
//         id: 5,
//         name: 'Daedalus',
//         point: false,
//         sort: 5,
//                 top: 'top-[22%]',
//         left: 'left-[32%]'
//       }
//     ],
//     days: [
//       {
//         id: 1,
//         sort: 1,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 1,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.873Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:15:33.818Z',
//           day_number: 'Day-1',
//           day_details:
//             '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 2,
//         sort: 2,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 2,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.889Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:17:20.570Z',
//           day_number: 'Day-2',
//           day_details:
//             '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       }
//     ]
//   },
//   {
//     id: '11da9404-be68-4aa5-81d4-efa015081cd1',
//     sort: null,
//     user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_created: '2024-06-10T13:32:47.902Z',
//     user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//     date_updated: '2024-06-11T16:38:28.764Z',
//     name: ' 9 plan: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
//     owner: null,
//     organization: null,
//     deal_stage: null,
//     deal_notes: null,
//     boat: 'text',
//     status: 'available',
//     available_places: 5,
//     from: '2024-06-12',
//     to: '2024-06-20',
//     price: 350,
//     currency: '$',
//     currMonth: '2024-06-21',
//     mapPoints: [
//       {
//         id: 1,
//         point: 'Salem',
//         sort: 1
//       },
//       {
//         id: 2,
//         point: 'Tiran',
//         sort: 2
//       },
//       {
//         id: 3,
//         point: 'Brother Islands',
//         sort: 3
//       },
//       {
//         id: 4,
//         point: 'Elphinstone',
//         sort: 4
//       },
//       {
//         id: 5,
//         point: 'Daedalus',
//         sort: 5
//       }
//     ],
//     days: [
//       {
//         id: 1,
//         sort: 1,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 1,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.873Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:15:33.818Z',
//           day_number: 'Day-1',
//           day_details:
//             '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       },
//       {
//         id: 2,
//         sort: 2,
//         collection: 'programs_details',
//         os_deals_id: {
//           id: '21e05753-b453-4446-b35e-d0d93956d917',

//           days: [1, 2, 5, 6, 14, 15]
//         },
//         item: {
//           id: 2,
//           status: 'published',
//           sort: null,
//           user_created: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_created: '2024-06-07T01:03:15.889Z',
//           user_updated: 'bbd5aed9-205b-4c1c-8cdc-b10467bb1476',
//           date_updated: '2024-06-07T02:17:20.570Z',
//           day_number: 'Day-2',
//           day_details:
//             '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
//         }
//       }
//     ]
//   }
// ]

// getProject function




const planData = [
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
    to: '2024-08-29',
    price: 150,
    currency: '$',
    month: 'July',
    year: '2024',
    mapPoints: [
      {
        id: 3,
        name: 'Salem',
        point: true,
        sort: 3,
        top: 'top-[42%]',
        left: 'left-[39%]'

      },
      {
        id: 1,
        name: 'hurghada',
        point: true,
        sort: 1,
        top: 'top-[6.5%]',
        left: 'left-[27%]'
      },
      {
        id: 2,
        name: 'Goat',
        point: false,
        sort: 2,
        top: 'top-[19.5%]',
        left: 'left-[35.5%]'
      },
      {
        id: 4,
        name: 'Brother Islands',
        point: false,
        sort: 4,
        top: 'top-[51.5%]',
        left: 'left-[55%]'
      },
      {
        id: 5,
        name: 'ELphinstone',
        point: false,
        sort: 5,
        top: 'top-[73%]',
        left: 'left-[57.5%]'
      },
      {
        id: 6,
        name: 'Daedalus',
        point: false,
        sort: 6,
        top: 'top-[80%]',
        left: 'left-[63.5%]'
      }
    ],
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
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
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
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 3,
        sort: 3,
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
          day_number: 'Day-3',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 4,
        sort: 4,
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
          day_number: 'Day-4',
          day_details:
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 5,
        sort: 5,
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
          day_number: 'Day-5',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 6,
        sort: 6,
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
          day_number: 'Day-6',
          day_details:
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
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
    name: 'Brother Islands 5 Days: North-Tiran-Brother ',
    owner: '95e535d2-f45b-4d94-891b-a89ee6ed1475',
    organization: null,
    deal_stage: null,
    deal_notes: null,
    boat: 'Sea Side Boat',
    status: 'available',
    available_places: 12,
    from: '2024-09-06',
    to: '2024-09-11',
    price: 150,
    currency: '$',
    month: 'September',
    year: '2024',
    mapPoints: [
      {
        id: 3,
        name: 'Salem',
        point: false,
        sort: 3,
        top: 'top-[42%]',
        left: 'left-[39%]'

      },
      {
        id: 1,
        name: 'hurghada',
        point: true,
        sort: 1,
        top: 'top-[6.5%]',
        left: 'left-[27%]'
      },
      {
        id: 2,
        name: 'Goat',
        point: false,
        sort: 2,
        top: 'top-[19.5%]',
        left: 'left-[35.5%]'
      },
      {
        id: 4,
        name: 'Brother Islands',
        point: true,
        sort: 4,
        top: 'top-[51.5%]',
        left: 'left-[55%]'
      },
      {
        id: 5,
        name: 'ELphinstone',
        point: false,
        sort: 5,
        top: 'top-[73%]',
        left: 'left-[57.5%]'
      },
      {
        id: 6,
        name: 'Daedalus',
        point: false,
        sort: 6,
        top: 'top-[80%]',
        left: 'left-[63.5%]'
      }
    ],
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
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
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
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 3,
        sort: 3,
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
          day_number: 'Day-3',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 4,
        sort: 4,
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
          day_number: 'Day-4',
          day_details:
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 5,
        sort: 5,
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
          day_number: 'Day-5',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
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
    name: 'Salem Express  5-days: North-Tiran-Brother Islands-Daedalus-Elphinstone-Salem   Express',
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
    mapPoints: [
      {
        id: 3,
        name: 'Salem',
        point: false,
        sort: 3,
        top: 'top-[42%]',
        left: 'left-[39%]'

      },
      {
        id: 1,
        name: 'hurghada',
        point: false,
        sort: 1,
        top: 'top-[6.5%]',
        left: 'left-[27%]'
      },
      {
        id: 2,
        name: 'Goat',
        point: false,
        sort: 2,
        top: 'top-[19.5%]',
        left: 'left-[35.5%]'
      },
      {
        id: 4,
        name: 'Brother Islands',
        point: false,
        sort: 4,
        top: 'top-[51.5%]',
        left: 'left-[55%]'
      },
      {
        id: 5,
        name: 'ELphinstone',
        point: false,
        sort: 5,
        top: 'top-[73%]',
        left: 'left-[57.5%]'
      },
      {
        id: 6,
        name: 'Daedalus',
        point: false,
        sort: 6,
        top: 'top-[80%]',
        left: 'left-[63.5%]'
      }
    ],
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
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
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
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 3,
        sort: 3,
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
          day_number: 'Day-3',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 4,
        sort: 4,
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
          day_number: 'Day-4',
          day_details:
            '<p><span className="text-xl font-medium">loreeemmmmmkljdsadasda</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      },
      {
        id: 5,
        sort: 5,
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
          day_number: 'Day-5',
          day_details:
            '<p><span className="text-xl font-medium">Arriving &amp; Check-in</span><br>Transfer from Hurghada Airport to the &ldquo;Boats Dock&rdquo; at New Marina. Boat check-in. (Breakfast, Lunch, or Dinner) on the boat, depending on your arrival time. Dive guide introduction for the boat plan, safety diving statements, and recommendations for a safe and enjoyable vacation. Also, a short briefing about marine life and dive sites you may visit throughout your liveaboard trip.</p>'
        }
      }
    ]
  },


]
export default async function PlanDetails({ params }) {

  const plan = [...planData].find(plan => plan?.id === params?.id)
  // getProject function
  console.log('Server-side data:', plan)

  return (
    <>
      <section className='max-w-[1220px] sm:pb-16 sm:pt-32 py-[75px] mx-auto'>
        {/* start of map related plan details */}
        <div className=' w-full  flex flex-wrap items-center justify-between border-b border-body-color border-opacity-50 pb-4 dark:border-white dark:border-opacity-10'></div>
        <div className='map-location relative    w-full  min-h-[800px] lg:min-h-[900px] max-sm:min-h-[330px] object-cover object-center rounded'>
          {/* //////  start of map info hover///////// */}
          <MapDetails mapPoints={plan?.mapPoints} mapData={mapData} />
          {/* ////// end of map info hover///////// */}
          <Image
            src={'/images/map-2.png'}
            alt='sea-island'
            fill
            className='  w-full z-20  absolute  h-[100%]   object-center rounded '
          />








        </div>
        {/* end of map related plan details */}

       
        {/* {plan?.map(plan => ( */}
        {/* <TripDetails key={plan?.id} plan={plan} /> */}
        {/* <TripDetails plan={plan} /> */}
        {/* ))} */}
        {plan && <TripDetails key={plan?.id} plan={plan} />}
        {/* <TripDetails key={plan?.id} plan={plan} /> */}
      </section>
      {/* <Testimony /> */}
    </>
  )
}
