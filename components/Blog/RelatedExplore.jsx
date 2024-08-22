'use client'
import SharePost from '@/components/Blog/SharePost'
import TagButton from '@/components/Blog/TagButton'
import BookForm from '@/components/Contact/BookForm'
import Image from 'next/image'
import jsPDF from 'jspdf'
import React, { useRef, useState, useEffect } from 'react'
import { HiCloudDownload,HiDocumentDownload,HiDownload} from 'react-icons/hi'
const RelatedExplore = ({ explors  }) => {
  const handleDownload = async (fileUrl) => {
    const pdf = new jsPDF()
    const res = await fetch(fileUrl)
    const blob = await res.blob()
    const pdfUrl = URL.createObjectURL(blob)
    pdf.addImage(pdfUrl, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), 0)
    pdf.save('file.pdf')
  }

  const  relatedExplore = explors?.find(explor => explor.id === explor?.id)
  

  return (
    <section className='overflow-hidden pt-[180px] pb-[120px]'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-8/12'>
            <h2 className='mb-3 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight'>
              {relatedExplore?.title}
            </h2>
            <p>{relatedExplore?.desc}</p>
            <div>
              <div>
                <p className='mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed'>
                  {relatedExplore?.content}
                </p>
                <div className='mb-10 w-full overflow-hidden rounded'>
                  <div className='relative aspect-[97/60] w-full sm:aspect-[97/44]'>
                    <Image
                      src={relatedExplore?.image}
                      alt='image'
                      fill
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                </div>
                <div className='relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9'>
                  <p className='  text-lg leading-7 font-medium text-justify first-line:font-semibold first-line:uppercase  text-gray-500'>{relatedExplore?.summary}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-4/12'>
            <div className='mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10'>
              <h3 className='border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white'>
                Click on the file name to download it.
              </h3>
              <ul className='mb-10 p-8 text-md font-medium flex flex-col items-start justify-between'>
                {explors?.map((explore) => (
                  explore?.file &&
                   
                  
                   
                  
                   
                  
                   
                  
                   
                  
                   
                  
                  explore?.summary &&
                  explore?.id && (
                    <li
                      key={explore?.id}
                      className=' mb-2  px-2  gap-5  flex flex-col w-full   items-center  '
                    >
                      {explore?.pdf?.map((pdf) => (
                        <button
                          key={pdf?.id}
                          type='button'
                          title={'Download ' + pdf?.file}
                          aria-label='Download'
                          // onClick={() => handleDownload(pdf.file)}
                           onClick={() => window.open(pdf.file)}
                            className='group bg-blue3  hover:scale-95 rounded-lg p-4 w-full  text-lg font-semibold  text-white   py-6 gap-5  '
                           >
                          <h2 className=''>{pdf?.name}</h2>
                           <p className='group text-sm in pt-2 font-light leading-snug hover:text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dicta eveniet enim.</p>
                          <span className=' group group-hover:text-primary   cursor-pointer download-Icon text-3xl text-white'>
                             <HiDocumentDownload />
                             {/* <HiDownload />
                             <HiCloudDownload /> */}
 

                          </span>
                        </button>
                         
                      ))}

                      
                      {/* <TagButton tag={explore?.id} /> */}
                    </li>
                  )
                ))}
              </ul>
            </div>
            {/* <SharePost /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
  
export default RelatedExplore
 