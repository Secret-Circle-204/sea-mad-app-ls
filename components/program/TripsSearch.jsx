import React from 'react'

const TripsSearch = ({ filter, handleFilterChange, handleResetFilter, years, trips }) => {
    return (
        <div className=" max-w-[1200px] mx-auto search-bar  items-center text-center flex  flex-wrap flex-col  justify-center  p-3 gap-3">
            <p>Find your Next trip</p>
            <div className="  flex lg:flex-row    flex-col lg:py-5   gap-3 w-full">
                <input
                    type="text"
                    name="name"
                    value={filter.name}
                    onChange={handleFilterChange}
                    className=" lg:w-full  w-auto text-gray-800 rounded border border-gray-300 p-2"
                    placeholder="Trip"
                />
                <select
                    name="month"
                    value={filter.month}
                    onChange={handleFilterChange}
                    className="lg:w-full w-auto rounded border border-gray-300 p-2"
                >
                    <option value="">Month</option>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                        <option key={month} value={month}>{month}</option>

                    ))}
                </select>
                <select
                    name="year"
                    value={filter.year}
                    onChange={handleFilterChange}
                    className="lg:w-full w-auto rounded border border-gray-300 p-2"
                >
                    <option value="">Year</option>

                    {years.map((year) => (


                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <select
                    name="status"
                    value={filter.status}
                    onChange={handleFilterChange}
                    className="lg:w-full w-auto rounded border border-gray-300 p-2"
                >
                    <option value="">Available</option>
                    {trips.map((trip) => (
                        <option key={trip.id} value={trip.status}> {trip?.from} - {trip.startDate} : {trip.status}</option>
                    ))}
                </select>
                <input
                    type="date"
                    name="from"
                    value={filter.from}
                    onChange={handleFilterChange}
                    className="lg:w-full w-auto rounded border text-gray-800 border-gray-300 p-2"
                />

                <input
                    type="date"
                    name="to"
                    value={filter.to}
                    onChange={handleFilterChange}
                    className="lg:w-full w-auto rounded border text-gray-800 border-gray-300 p-2"
                />


            </div>

            {/* <button onClick={handleFilterChange}>Filter</button> */}

            <div className="  w-full">
                <button
                    className=" w-full lg:col-start-6  rounded border border-gray-300 p-2 bg-blue3 text-white hover:bg-blue3/90 focus:outline-none focus:ring-2 focus:ring-blue3/80 focus:ring-offset-2"
                    onClick={handleResetFilter}>Reset</button>
            </div>
        </div>
    )
}

export default TripsSearch