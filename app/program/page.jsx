const slideImage = {
  id: 1,
  title: 'The best dive sites of the Red Sea',
  subtitle: 'Red Sea Liveaboards.',
  content:
    ' We are a company that specializes in designing and manufacturing high-quality furniture pieces for homes, offices, and commercial spaces. Our team of experienced and creative designers work tirelessly to create furniture pieces that not only look great but are also functional and comfortable. We pride ourselves on using the best materials and production techniques to ensure that our pieces last for years to come. Our mission is to provide our customers with exceptional service and quality products that enhance their living and working spaces.',

  main_image: 'images/boat-3.jpg'
}

export default function ProgramPage () {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${slideImage?.main_image})`
        }}
        className='relative h-[80vh]   w-screen object-cover bg-center object-center bg-cover   z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
      >
        <h1 className='absolute uppercase  text-white  sm:text-3xl text-2xl sm:font-bold font-medium text-center sm:left-[45%]  top-[50%] left-[30%]'>
          Programs
        </h1>
      </section>
      <section className=' px-5 py-32 max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
        <div className=' rounded-lg bg-gray-200 lg:col-span-2'>dasas</div>
        <div className='space-y-2 rounded-lg bg-gray-200'>
          <details className='overflow-hidden text-white dark:text-blue3 text-md font-medium rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center justify-between gap-2 text-white dark:text-blue3 text-md font-medium bg-blue3 dark:bg-white p-4   transition'>
              <span className='text-md font-medium'> Availability </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='border-t text-white dark:text-blue3 text-md font-medium border-gray-200 bg-blue3 dark:bg-white'>
              <header className='flex items-center justify-between p-4'>
                <span className='text-md text-gray-700'> 0 Selected </span>

                <button
                  type='button'
                  className='text-md text-gray-900 underline underline-offset-4'
                >
                  Reset
                </button>
              </header>

              <ul className='space-y-1 border-t border-gray-200 p-4'>
                <li>
                  <label
                    htmlFor='FilterInStock'
                    className='inline-flex items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      id='FilterInStock'
                      className='size-5 rounded border-gray-300'
                    />

                    <span className='text-md font-medium text-gray-700'>
                      {' '}
                      In Stock (5+){' '}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor='FilterPreOrder'
                    className='inline-flex items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      id='FilterPreOrder'
                      className='size-5 rounded border-gray-300'
                    />

                    <span className='text-md font-medium text-gray-700'>
                      {' '}
                      Pre Order (3+){' '}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor='FilterOutOfStock'
                    className='inline-flex items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      id='FilterOutOfStock'
                      className='size-5 rounded border-gray-300'
                    />

                    <span className='text-md font-semibold text-gray-700'>
                      {' '}
                      Out of Stock (10+){' '}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details className='overflow-hidden text-white dark:text-blue3 text-md font-semibold rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer text-white items-center justify-between gap-2 bg-blue3 dark:bg-white p-4   transition'>
              <span className='text-md font-semibold'> Price </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='border-t text-white dark:text-blue3 text-md font-medium border-gray-200 bg-blue3 dark:bg-white'>
              <header className='flex items-center justify-between p-4'>
                <span className='text-white dark:text-blue3 text-md font-medium text-md '>
                  {' '}
                  The highest price is $600{' '}
                </span>

                <button
                  type='button'
                  className='text-md text-gray-900 underline underline-offset-4'
                >
                  Reset
                </button>
              </header>

              <div className='border-t border-gray-200 p-4'>
                <div className='flex justify-between gap-4'>
                  <label
                    htmlFor='FilterPriceFrom'
                    className='flex items-center gap-2'
                  >
                    <span className='text-md text-gray-600'>$</span>

                    <input
                      type='number'
                      id='FilterPriceFrom'
                      placeholder='From'
                      className='w-full rounded-md border-gray-200 shadow-sm sm:text-md'
                    />
                  </label>

                  <label
                    htmlFor='FilterPriceTo'
                    className='flex items-center gap-2'
                  >
                    <span className='text-md text-gray-600'>$</span>

                    <input
                      type='number'
                      id='FilterPriceTo'
                      placeholder='To'
                      className='w-full rounded-md border-gray-200 shadow-sm sm:text-md'
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  )
}
