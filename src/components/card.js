import React from 'react'

function Card({ rocketName, rocketType, launchDate, country, description }) {
  return (
    <div className=" card bg-white font-customMont mt-12">
      <div className="px-6 py-4 bg-white ">
        <div className="font-bold text-xl mb-2 bg-white italic ">{rocketName}</div>
        <p className="text-gray-700 bg-white text-base">
          <span className=" bg-white font-semibold">Type:</span> {rocketType}
        </p>
        <p className=" bg-white text-gray-700 text-base">
          <span className=" bg-white font-semibold">Launch Date:</span> {launchDate}
        </p>
        <p className="bg-white text-gray-700 text-base">
          <span className="bg-white font-semibold">Country:</span> {country}
        </p>
        <p className="bg-white text-gray-700 text-base">
          <span className="font-semibold bg-white">Description:</span> {description}
        </p>
      </div>
    </div>
  );
}

export default Card