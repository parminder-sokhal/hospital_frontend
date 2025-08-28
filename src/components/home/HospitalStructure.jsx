import React from 'react';

const HospitalStructure = () => {
  return (
    <div className="container gap-4 mx-auto pb-10 py-5 px-10 lg:px-40">
      <div className="text-center mb-10">
        <h2 className="flex justify-start text-4xl text-gray-800">Hospital Structure</h2>
      </div>

      <div className='flex flex-col  sm:flex-row md:flex-row  lg:flex-row flex-wrap gap-4 items-center justify-center'>

        {/* 1. 10 Bedded Hospital */}
        <div className="flex-1  bg-gray-200 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">10 Bedded Hospital</h3>
        </div>

        {/* 2. Private Rooms / Luxury Room */}
        <div className="flex-1 bg-pink-200 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Private Rooms</h3>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Luxury Room</h3>
        </div>

        {/* 4. Recreation Activities / Gym */}
        <div className="flex-1 bg-yellow-100 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Recreation Activities</h3>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Gym</h3>
        </div>

        {/* 5. Counseling Room */}
        <div className="flex-1 bg-blue-100 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Counseling Room</h3>
        </div>

        {/* 6. Pharmacy */}
        <div className="flex-1 bg-green-100 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Pharmacy</h3>
        </div>

        {/* 8. Blood Collection Centre */}
        <div className="flex-1 bg-purple-100 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Blood Collection Centre</h3>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Pathology</h3>
        </div>

        {/* 9. Cashless OPD Facilities */}
        <div className="flex-1 bg-red-100 rounded-md p-4 py-8 text-center shadow-sm flex flex-col items-center justify-center min-h-52 w-full ">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Cashless OPD Facilities</h3>
          <h3 className="font-bold text-md text-gray-600 mb-2">Through Visit Health TPA</h3>
        </div>

      </div>
    </div>
  );
};

export default HospitalStructure;
