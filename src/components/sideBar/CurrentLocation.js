import React from 'react';
import Location from './Location';

const CurrentLocation = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <h4>{weather.name}</h4>
      <div className='temp'>
        <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            />
        
            {Math.round(weather.main.temp)}°C
      </div>    
    </div>
  );
};

export default CurrentLocation;
