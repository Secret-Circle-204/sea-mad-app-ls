import TripsTable from '@/components/program/TripsTable'
// import getAssetURL from '@/lib/get-asset-url'
// import { notFound } from 'next/navigation'
// import { readItems ,readItem } from '@directus/sdk'
// import directus from '@/lib/directus'



//const getTrips = async () => {
//  try {
//    const fetchedTrips = await directus.request(
//      readItems('trips', {
//        fields: ['id', 'title', 'subtitle', 'content', 'main_image' ,'slug' , 'date_published','currMonth', 'image.*.*' ],
//        filter: {
//          date_published: {
//             id: { _neq: null }
//          }
//        },
 
//        sort: ['-sort'], 
//      }),
//      {
//        // next: { revalidate: 7 }
//        cache: 'no-store'
//      }
//    )
//    setTrips(fetchedTrips)









const slideImage = {
  id: 1,
  title: 'The Best Liveaboard of the Red Sea',
  subtitle: 'Red Sea Liveaboards.',
  content:
    ' We are a company that specializes in designing and manufacturing high-quality furniture pieces for homes, offices, and commercial spaces. Our team of experienced and creative designers work tirelessly to create furniture pieces that not only look great but are also functional and comfortable. We pride ourselves on using the best materials and production techniques to ensure that our pieces last for years to come. Our mission is to provide our customers with exceptional service and quality products that enhance their living and working spaces.',

  main_image: '/images/boat/5.png'
}


export default function Trips({params}) {

  return (
    <>
      <main>
        <section
          id='home'
          className='relative h-[90vh] bg-no-repeat object-cover items-center bg-center object-center bg-cover w-full z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
          style={{
            backgroundImage: `url(${slideImage?.main_image})`
          }}
        >
          {/* <img src={slideImage?.main_image} alt="image" /> */}
          <div className='container  pt-32'>
            <div className='-mx-4  flex flex-wrap'>
              <div className='w-full   px-4 pt-20'>
                <div
                  className='wow items-start text-center   fadeInUp mx-auto max-w-[800px] text-white dark:text-white '
                  data-wow-delay='.2s'
                >
                  {/* <h1 className='   drob-shadows  mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight'>
                  {slideImage?.title}
                </h1> */}
                  <p className='mb-12 text-base font-medium !leading-relaxed text-white dark:text-white dark:opacity-90 sm:text-lg md:text-xl'>
                    {/* {slideImage?.subtitle} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='max-w-[1250px] pt-20 mx-auto  px-5  '>

        <div>
          <h2 className='mb-4 text-xl font-bold leading-tight text-black dark:text-white lg:text-3xl sm:leading-tight'>
            PROGRAMS & ROUTES
          </h2>
          <p>
            {' '}
            The Red Sea has a variety of dive sites & destinations for
            liveaboard sea trips. You can go with any scuba diving style you
            enjoy and a choice that matches your needs, such as adventure
            diving trips, a historical journey to shipwrecks, or to chill out
            with pure aquatic nature, corals, and marine life.
          </p>
         </div>
         </div>

        <TripsTable />
      </main>

    </>
  )
}