'use client'

import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle'
import SingleBlog from './SingleBlog'
// import blogData from './blogData'
import getAssetURL from '@/lib/get-asset-url'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const blogHome = [
  {
    id: 1,
    title: 'Marine Life',
    date_published: '28-05-2024',
    content:
      'The Red Sea, al-Baḥr al-ʾAḥmar has brilliant soft coral gardens and millions of anthias are synonymous with the perception of....',
    image: '/images/blog-1.jpg',
    // author: {
    //   name: 'Samuyl Joshi',
    //   image: '/images/blog/author-01.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['creative'],
    publishDate: '28-05-2024'
  },
  {
    id: 2,
    title: 'Sharks on the sea',
    date_published: '28-05-2024',
    content: 'Shark Diving in the Red Sea: A Must-Do Experience for Divers...',
    image: '/images/blog-2.jpg',
    // author: {
    //   name: 'Musharof Chy',
    //   image: '/images/blog/author-02.png',
    //   designation: 'Content Writer'
    // },
    // tags: ['computer'],
    publishDate: '28-05-2024'
  },
  {
    id: 3,
    title: ' Corals in the Red Sea',
    date_published: '28-05-2024',
    content:
      'Corals come in vast and confusing number of sizes, shapes and colours. Same species are easily confused due to their..',
    image: '/images/blog-3.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 4,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/blog-1.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 5,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/blog-21.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  },
  {
    id: 6,
    title: 'high quality Room for living',
    date_published: '28-05-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/blog-3.jpg',
    // author: {
    //   name: 'Lethium Deo',
    //   image: '/images/blog/author-03.png',
    //   designation: 'Graphic Designer'
    // },
    // tags: ['design'],
    publishDate: '28-05-2024'
  }
]

export default function Blog () {
  // const [blogHome, setBlogHome] = useState([])

  // const get_Blog_Home = async () => {
  //   try {
  //     const fetchedBlogHome = await directus.request(
  //       readItems('posts', {
  //         fields: [
  //           'id',
  //           'title',
  //           'content',
  //           // 'summary',
  //           'image.*',
  //           'slug',
  //           'date_published'
  //         ]
  //       }),
  //       {
  //         next: { revalidate: 15000 }
  //         // cache: 'no-store'
  //       }
  //     )
  //     setBlogHome(fetchedBlogHome)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }

  // useEffect(() => {
  //   get_Blog_Home()
  // }, [])

  console.log('related-explor', blogHome)

  // console.log(blog)
  // console.log('blogCard-data-in-blogHome', explor)
  // const { title, image, paragraph, author, tags, publishDate } = blog

  return (
    <section
      id='blog'
      className='bg-primary/[.03] w-screen mt-20 sm:px-1 py-16 md:py-20 lg:py-28'
    >
      {/* <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        /> */}

      <div className=' max-w-[1250px] mx-auto mb-10 flex flex-col items-center justify-center text-center'>
        <h1 className=' text-xl font-bold text-blue3 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
          Posts from our Blog
        </h1>
        <p className='text-body-color dark:text-gray-300 mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-5 lg:gap-x-6 xl:grid-cols-3'>
          {/* {blogData.map(blog => (
            <div key={blog.id} className='w-full'>
              <SingleBlog blog={blog} />
            </div>
          ))} */}
          {/* fetch first 3 blogs only */}
          {blogHome
            ?.slice(0, 3)
            .map(({ id, title, content, image, date_published }) => (
              <div
                key={id}
                className='wow  mx-5 sm:mx-7 shadow-md  hover:shadow-xl hover:scale-105 hover:opacity-90   delay-75 duration-300   fadeInUp relative overflow-hidden rounded-md bg-white   dark:bg-dark'
                data-wow-delay='.1s'
              >
                {/* className='object-cover bg-center bg-cover w-full ' */}
                <Link href={`/blog/${id}`} className='relative block h-[220px] w-full'>
          <Image
            className=' w-full h-[230px] lg:h-[220px] object-cover bg-center bg-cover '
            // src={getAssetURL(explor?.image)}
            src={image}
            alt='image'
             loading='lazy'
             width={400}
             height={300}
          />
        </Link>
                <div className='p-6 sm:p-8 md:py-8 md:px-5 lg:p-8 xl:py-8 xl:px-4 2xl:p-8'>
                  <h3>
                    <Link
                      href={`/blog`}
                      className='mb-4 block text-left text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'
                    >
                      {title}
                    </Link>
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className=' w-full  text-left font-light text-md line-clamp-4 mb-9   dark:border-white dark:border-opacity-10'
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
                    <div className='absolute bottom-3  mx-auto  w-[80%] flex flex-row   justify-between items-center'>
                      <h4 className='mb-1 text-sm font-medium text-dark dark:text-white'>
                        publish-Date:
                      </h4>
                      <p className='text-xs text-body-color'>
                        {date_published}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <Link href='/blog'>
          <button className='inline-flex items-center justify-center mt-16 rounded-lg bg-blue3 py-4 px-8 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-10 xl:px-12 2xl:px-10'>
            Show All Posts
          </button>
        </Link>
      </div>
    </section>
  )
}
