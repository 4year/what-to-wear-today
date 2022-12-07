import React from 'react';

const CurrentLocation = ({ cityName, weather }) => {
  return (
    <div>
      <h4>{cityName}</h4>
      <div className="temp">
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
