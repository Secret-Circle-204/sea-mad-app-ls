'use client'

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ReviewCard from "@/components/review/ReviewCard";
import { Carousel } from "nuka-carousel";
import { useCarousel } from 'nuka-carousel';


import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const key = 'AIzaSyB6h9Hb6w0zYqXjQoWq7VYxT8GzYk2zQwQ';
// // const key = process.env.GOOGLE_MAPS_API_KEY;
// let res = null;
// const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyB6h9Hb6w0zYqXjQoWq7VYxT8GzYk2zQwQ&fields=reviews');
// `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg9BODxx2X0YRr_Kv0d6GzXk&fields=reviews&key=AIzaSyB6h9Hb6w0zYqXjQoWq7VYxT8GzYk2zQwQ`

const GoogleReviewsComponent = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      mail: 'jane-smith@mail.com',
      name: 'John Doe',
      rating: 5,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'John Doe',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 2,
      mail: 'jane-smith@mail.com',
      name: 'Jane Smith',
      rating: 4,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Jane Smith',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://imgs.search.brave.com/kG66tC5_HxrDy41K1V1nGuskt9uFWSCw5Udy6JHHrNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MTg0NTMxNS9waG90/by9oYXBweS1wb3J0/cmFpdC1vci1idXNp/bmVzcy13b21hbi10/YWtpbmctYS1zZWxm/aWUtaW4tb2ZmaWNl/LWJ1aWxkaW5nLWZv/ci1hLXNvY2lhbC1t/ZWRpYS53ZWJwP2I9/MSZzPTE3MDY2N2Em/dz0wJms9MjAmYz0y/LVZHamxoUElqZmox/STk4SG5BX3FWTTdU/ZVBjaGdWWGUyeTNU/STY1WS0wPQ',
      }
    },
    {
      id: 3,
      mail: 'jane-smith@mail.com',
      name: 'Peter Jones',
      rating: 4,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Peter Jones',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      }
    },
    {
      id: 4,
      mail: 'jane-smith@mail.com',
      name: 'John Doe',
      rating: 4,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'John Doe',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 5,
      mail: 'jane-smith@mail.com',
      name: 'Jane Smith',
      rating: 2,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Jane Smith',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 6,
      mail: 'jane-smith@mail.com',
      name: 'Peter Jones',
      rating: 3,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Peter Jones',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 7,
      mail: 'jane-smith@mail.com',
      name: 'John Doe',
      rating: 5,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'John Doe',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 8,
      mail: 'jane-smith@mail.com',
      name: 'Jane Smith',
      rating: 4,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Jane Smith',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 9,
      mail: 'jane-smith@mail.com',
      name: 'Peter Jones',
      rating: 2,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Peter Jones',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 10,
      mail: 'jane-smith@mail.com',
      name: 'John Doe',
      rating: 5,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'John Doe',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 11,
      mail: 'jane-smith@mail.com',
      name: 'Jane Smith',
      rating: 2,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',
      author: {
        mail: 'jane-smith@mail.com',
        name: 'Jane Smith',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
    {
      id: 12,
      mail: 'jane-smith@mail.com',
      name: 'Peter Jones',
      rating: 1,
      review: '  loremisum dolor sit amet consectetur adipiscing elit In varius eros eget sapien consectetur ultrices Ut quis dapibus libero.',

      author: {
        mail: 'jane-smith@mail.com',
        name: 'Peter Jones',
        link: 'https://www.google.com/maps/contrib/100859090874785206875?hl=en-US&sa=X&ved=2ahUKEwiUituIlpTvAhVYCc0KHbvTCrgQvvQBegQIARBG',
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GhdIvUDamzfPqbYIpwhnGJV2XWSi77iVXfEsiKS=s40-c0x00000000-cc-rp',
      }
    },
  ];





  const handleReviewChange = (index) => {
    setActiveReviewIndex(index);
  };


  const handleSwipeStart = (event) => {
    event.preventDefault(); // Prevent native scrolling
    carouselRef.current.style.transition = 'none'; // Disable transition for smooth start
    const touchStartX = event.touches[0].clientX;
    carouselRef.current.dataset.touchstartX = touchStartX; // Store touch start position
  };

  const handleSwipeMove = (event) => {
    if (!carouselRef.current.dataset.touchstartX) return; // Handle initial touch

    const touchMoveX = event.touches[0].clientX;
    const deltaX = touchMoveX - carouselRef.current.dataset.touchstartX;
    carouselRef.current.style.transform = `translateX(${deltaX}px)`;
  };


  const carouselRef = useRef(null);
  const reviewCardWidth = useRef(0); // Store calculated card width
  const MAX_VISIBLE_REVIEWS = 3; // Number of reviews to show at once


  const handleSwipe = (event) => {
    const deltaX = event.deltaX; // Get swipe delta (positive for right, negative for left)

    if (Math.abs(deltaX) > 50) { // Minimum swipe distance threshold (adjust as needed)
      const newIndex = activeReviewIndex + (deltaX > 0 ? 1 : -1); // Determine new index

      if (newIndex >= 0 && newIndex < reviews.length) {
        setActiveReviewIndex(newIndex);
        carouselRef.current.scrollTo({
          left: newIndex * reviewCardWidth.current, // Scroll to new review position
          behavior: 'smooth',
        });
      }
    }
  };
  // useEffect(() => {
  //   // Fetch reviews from your backend or API here (replace with your logic)
  //   fetch('https://api.example.com/reviews') // Replace with your API endpoint
  //     .then((response) => response.json())
  //     .then((data) => setReviews(data));
  // }, []);

  const filteredReviews = reviews.filter((review) => review.rating >= 3);

  // const renderStarRating = (rating) => {


  //   const stars = [];
  //   for (let i = 1; i <= rating; i++) { // Iterate up to the rating value

  //     stars.push(<span key={i} className="star filled">★</span>);
  //   }


  //   return stars;
  // };
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) { // Iterate up to the rating value
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>
      );
    }
    return stars;
  };
  const settings = {


    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for different screen sizes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for tablet layout
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 980, // Adjust breakpoint for tablet layout
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Adjust breakpoint for mobile layout
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='  w-screen mx-auto relative'>
        <div className="  max-w-[1250px] mx-auto flex flex-col items-center">



          <div className='mb-10flex w-full lg:px-[40px] flex-col    items-center justify-center text-center'>
            <h1 className='mb-5 text-xl font-bold text-blue3   sm:text-2xl lg:text-xl xl:text-2xl'>
              What Our Users Says
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div
            className={`wow fadeInUp w-full mx-auto max-sm:px-10  md:px-16  grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-1 lg:grid-cols-1  rounded-md   p-8   lg:px-5 xl:px-8`}
            data-wow-delay='.1s'

          >
            <Slider   {...settings}>
              {filteredReviews?.map((review, index) => (
                <div key={index} className="review-card my-5 border-[1.5px] border-gray-200 border-opacity-90  drop-shadow-lg shadow-body-color  w-full rounded-xl bg-gray-100 text-gray-700  px-8 py-5  ">
                  <div className="flex items-center mb-3 border-b border-body-color border-opacity-10 py-3">
                    <div className='relative mr-4 h-[50px] w-full max-w-[50px]   rounded-full'>
                      <img src={review?.author?.thumbnail}
                        alt={review?.author?.name} className='h-full rounded-full w-full object-cover' />
                    </div>
                    <div className='w-full'>
                      <h5 className='mb-1 text-lg font-semibold text-gray-700 dark:text-gray-700 lg:text-base xl:text-lg'>
                        {review?.author?.name}
                      </h5>
                      <Link href={review?.author?.link} className='text-sm text-gray-700'>{review?.author?.mail}</Link>
                    </div>
                  </div>
                  <p className=" pb-4 text-base leading-relaxed text-gray-700 dark:border-white dark:border-opacity-10 dark:text-gray-700">
                    “{review.review}”
                  </p>
                  <div className="mb-1 flex items-start justify-between     ">
                    <div>

                      <p className="text-sm text-gray-700   "><span className="text-orange-300 space-x-[1.5px]">{renderStarRating(review.rating)} </span>{review.rating} / 5</p>
                    </div>
                    <div>

                      <p className="text-xs text-gray-700  ">Google reviews</p>
                    </div>
                  </div>
                </div>

              ))}
            </Slider>
          </div>





          <div className='absolute top-5 right-0 z-[-1]'>
            <svg
              width='238'
              height='531'
              viewBox='0 0 238 531'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                opacity='0.3'
                x='422.819'
                y='-70.8145'
                width='196'
                height='541.607'
                rx='2'
                transform='rotate(51.2997 422.819 -70.8145)'
                fill='url(#paint0_linear_83:2)'
              />
              <rect
                opacity='0.3'
                x='426.568'
                y='144.886'
                width='59.7544'
                height='541.607'
                rx='2'
                transform='rotate(51.2997 426.568 144.886)'
                fill='url(#paint1_linear_83:2)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_83:2'
                  x1='517.152'
                  y1='-251.373'
                  x2='517.152'
                  y2='459.865'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' />
                  <stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_83:2'
                  x1='455.327'
                  y1='-35.673'
                  x2='455.327'
                  y2='675.565'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' />
                  <stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute left-0 bottom-5 z-[-1]'>
            <svg
              width='279'
              height='106'
              viewBox='0 0 279 106'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.5'>
                <path
                  d='M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373'
                  stroke='url(#paint0_linear_72:302)'
                />
                <path
                  d='M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373'
                  stroke='url(#paint1_linear_72:302)'
                />
                <path
                  d='M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373'
                  stroke='url(#paint2_linear_72:302)'
                />
                <path
                  d='M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373'
                  stroke='url(#paint3_linear_72:302)'
                />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_72:302'
                  x1='256.267'
                  y1='53.6717'
                  x2='-40.8688'
                  y2='8.15715'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_72:302'
                  x1='256.267'
                  y1='42.6717'
                  x2='-40.8688'
                  y2='-2.84285'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_72:302'
                  x1='256.267'
                  y1='64.6717'
                  x2='-40.8688'
                  y2='19.1572'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear_72:302'
                  x1='256.267'
                  y1='76.6717'
                  x2='-40.8688'
                  y2='31.1572'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleReviewsComponent;