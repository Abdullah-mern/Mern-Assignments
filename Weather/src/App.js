import "./App.css";

import React, { useState, useEffect } from 'react';

function App() {
  const getCitiesForCountry = (country) => {
    switch (country) {
      case 'USA':
        return [
          'New York',
          'Los Angeles',
          'Chicago',
          // Add more cities for USA
        ];
      case 'Canada':
        return [
          'Toronto',
          'Montreal',
          'Vancouver',
          // Add more cities for Canada
        ];
      case 'UK':
        return [
          'London',
          'Manchester',
          'Birmingham',
          // Add more cities for UK
        ];
      // Add more countries here
      default:
        return [];
    }
  }
  // State variables for country and city selection
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // State variable for weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data for a given city
  const fetchWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=7578dc6f0001a004c012e9a6c1ca7792`);
    const data = await response.json();
    setWeatherData(data);
  };

  // UseEffect hook to fetch weather data when city is selected
  useEffect(() => {
    if (selectedCity) {
      const fetchWeatherData = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=7578dc6f0001a004c012e9a6c1ca7792`
        );
        const data = await response.json();
        setWeatherData(data);
      };
      fetchWeatherData();
    }
  }, [selectedCity]);

  // Function to handle country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
  };

  // Function to handle city selection
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Return JSX for rendering
  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label htmlFor="country-select">Select a country:</label>
        <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          {/* Add more countries here */}
        </select>
      </div>
      {selectedCountry && (
        <div>
          <label htmlFor="city-select">Select a city:</label>
          <select id="city-select" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {getCitiesForCountry(selectedCountry).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
      {weatherData && (
        <div>
          <h2>Weather in {selectedCity}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* Display more weather data here */}
        </div>
      )}
    </div>
  );
}

export default App;
