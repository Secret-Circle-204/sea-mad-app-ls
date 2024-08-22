import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle'
import SingleFeature from './SingleFeature'
import featuresData from './featuresData'
import Image from 'next/image'

const Features = () => {
  return (
    <section id='features' className='bg-primary/[.03] pt-16 md:pt-20 lg:pt-28'>
      <div className='container max-w-[1200px] mx-auto'>
        {/* <SectionTitle


          center
        /> */}
        <div className=' items-center sm:items-start mb-12 w-full text-center sm:text-left text-lg mx-auto'>
          {' '}
          {/* <p>We are constantly adding new features to our platform.</p> */}
          <div className=' w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
            <div className='   lg:col-span-2 rounded-lg   dark:bg-transparent'>
              <h1 className='mb-5 text-xl font-bold  text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
                why sea mad?
              </h1>
              <p className='mt-0.5 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptas distinctio nesciunt quas non animi. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Iure iste
                eveniet natus quae accusamus, illo atque voluptas quas doloribus
                consectetur?......
              </p>
              <Link href='/about'>
                <button className='bg-blue3 hover:bg-blue3/90 text-white font-bold py-2 px-4 rounded mt-5'>
                  Read More
                </button>
              </Link>
            </div>
            <div className='sm:max-h-[300px] rounded-lg bg-gray-200 '>
              <Image
                src={'/images/sun-deck/5.png'}
                alt=''
                className='size-20 w-full h-full rounded-lg object-cover'
                width={500}
                height={500}
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {/* <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              asperiores id, assumenda maxime quae dolore sunt explicabo soluta
              ut nulla!
            </p>
          </div>
          <div>
            <Image
              src={'/images/boat-1.jpg'}
              alt='img'
              fill={true}
              loading='lazy'
            />
          </div> */}
          {/* {featuresData.map(feature => (
            <SingleFeature key={feature.id} feature={feature} />
          ))} */}
        </div>
      </div>
    </section>
  )
}

export default Features
