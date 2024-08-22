
import React from 'react'

export default function RelatedActivitie({ data, handleActive, active }) {
    console.log('Activities data', data)

    return (
        <>





            <section  className={`${active === data.id ? 'block' : 'hidden'}  `}>
                <div className="container px-5 py-12 mx-auto">
                    {data?.detail?.map((data) => (
                    <div key={data?.id} className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8   gap-6 flex flex-wrap md:flex-nowrap">
                            <div className=" lg:w-1/2 lg:p-0 w-full p-3  mx-auto md:mb-0 mb-6   ">
                                 <img src="https://dummyimage.com/600x400" alt=" image" />
                            </div>
                            <div className=" text-left lg:w-1/2 lg:p-0 w-full p-3   ">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{data?.title}</h2>
                                <p className="leading-relaxed">{data?.description}</p>
                               
                            </div>
                        </div>
                         
                       
                    </div>
                        
                    ))}
                </div>



        </section >


         
        </>
    )

}