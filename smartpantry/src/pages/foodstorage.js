import React from 'react';
import './foodstorage/foodstorage.css'; 
import foodStorageLogo from './foodstorage/foodstorage logo.jpg'; 

const FoodStorageTips = () => {
  return (
    <div>
      {/* Banner with title and image */}
      <div className="banner">
        <h1 className="banner-title">Food Storage Tips</h1>
        <img src={foodStorageLogo} alt="Food Storage Tips" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Content section */}
      <div className="bodyContainer">
        <h2 style={{ fontSize: '36px', marginLeft: '50px' }}>Best Practices</h2>
        <ul className="tips-list">
          {/* food storage tips */}
          <li>Keep your refrigerator below 40°F (4°C).</li>
          <li>Store foods in airtight containers to maintain freshness.</li>
          <li>Freeze surplus food to extend its shelf life.</li>
          <li>Use clear labels with dates to monitor food storage durations.</li>
          <li>Avoid overcrowding your refrigerator to ensure efficient air circulation.</li>
          <li>Store fruits and vegetables in separate drawers to prevent ethylene gas accumulation.</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodStorageTips;
