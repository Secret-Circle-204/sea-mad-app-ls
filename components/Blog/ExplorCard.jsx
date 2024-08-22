// import { explor } from '@/types/explor'
import Image from 'next/image'
import Link from 'next/link'
import getAssetURL from '@/lib/get-asset-url'
const ExplorCard = ({ explor }) => {
  console.log('explore-card-data', explor)

  return (
    <>
      <div
        className='wow mx-10 fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark'
        data-wow-delay='.1s'
      >
        <Link href={`/blog/${explor?.id}`} className='relative block h-[220px] w-full'>
          <Image
            className=' w-full lg:h-[220px] object-cover bg-center bg-cover '
            // src={getAssetURL(explor?.image)}
            src={explor?.image}
            alt='image'
             loading='lazy'
             width={400}
             height={300}
          />
        </Link>
        <div className='p-5 sm:p-6 md:py-8 md:px-6 lg:p-6 xl:py-8 xl:px-5 2xl:p-6'>
          <h4 className='text-left '>
            <Link
              href={`/blog/${explor?.id}`}
              className='mb-4 block text-md font-semibold     line-clamp-3 text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-lg'
            >
              {explor?.title}
            </Link>
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: explor?.content }}
            className=' text-left font-light text-md line-clamp-4 mb-9   dark:border-white dark:border-opacity-10'
          ></div>
          <div className='flex  '>
            {/* <div className='mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5'>
              <div className='mr-4'>
                <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                  <Image
                    className='object-cover bg-center bg-cover '
                    src={author?.image}
                    alt='author'
                    fill
                  />
                </div>
              </div> 
              <div className='w-full'>
                <h4 className='mb-1 text-sm font-medium text-dark dark:text-white'>
                  By {author?.name}
                </h4>
                <p className='text-xs text-body-color'>{author?.designation}</p>
              </div>
            </div> */}
            <div className='w-full flex justify-between  items-center'>
              <h4 className='mb-1 text-sm font-medium text-dark dark:text-white'>
                publish-Date:
              </h4>
              <p className='text-xs text-body-color'>
                {explor?.date_published}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplorCard
