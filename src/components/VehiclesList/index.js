import React from 'react';
import "./index.css"

const VehicleList = ({ vehicles }) => {
  console.log(vehicles)
  return (
    <div className='vehicles-li'>
      <h2 className='head'>List of Available Vehicles:</h2>
      <ul className='main-text'>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className='list'>
            {vehicle.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
