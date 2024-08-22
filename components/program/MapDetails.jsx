
import React from 'react';


export default function MapDetails({ mapPoints, mapData }) {
  return (
    <>
      {mapPoints?.map((point, index) => (
        <div
          key={index}
          className={`z-30 group self-center absolute group-hover:select-none select-none  ${point?.top} ${point?.left}   text-2xl`}
        >
          <button
            className={`w-5  h-5 lg:h-10 lg:w-10 text-center items-center group group-hover:select-none  justify-center rounded-full border-0 border-blue-300 text-white inline-flex group`}
          >
            <span
              className={`${point?.point === true ? 'animate-ping  opacity-100  lg:h-8 lg:w-8' : 'opacity-0'}   group-hover:select-none   text-xl bg-gradient-to-tr from-red-900 via-red-500   to-red-600 bg-red-600 inline-flex w-3 h-3 lg:h-6 lg:w-6 rounded-full  `}
            ></span>
          </button>

          <div className={`     
            z-10 group-hover:z-30 absolute top-0 transition transform    group-hover:transition group-hover:transform 
            translate-y-8   group-hover:scale-95 group-hover:ease-in-out invisible 
             group-hover:visible pr-10 
 
             pt-2 pb-2 mt-12 translate-x-0 lg:group-hover:-translate-x-36    
            group-hover:duration-500
              group-hover:translate-y-0
            rounded overflow-clip  text-white group-hover:select-none    lg:py-5 py-4 lg:px-4 px-3 lg:text-sm text-sm font-light bg-dark  lg:w-[500px]  w-[250px]  max-w-[600px]`}>
            <div>
              <div className='pb-5'>
                <p className='lg:text-xl text-md'>{mapData[point.id - 1]?.title}</p>
                <p>{mapData[point.id - 1]?.desc}</p>
              </div>

              <div className='grid lg:w-full  grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-2'>
                {mapData[point.id - 1]?.images?.map((image) => (
                  <div
                    key={image?.src}
                    className='lg:h-[90px] h-[60px] bg-cover bg-center'
                    style={{ backgroundImage: `url(${image?.src})` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
