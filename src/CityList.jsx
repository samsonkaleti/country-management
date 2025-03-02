import React from 'react';

function CityList({ cities, setCities }) {
  const addCity = () => {
    const name = prompt('Enter city name:');
    if (name) {
      setCities([...cities, name]);
    }
  };

  const deleteCity = (index) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      const updatedCities = cities.filter((_, i) => i !== index);
      setCities(updatedCities);
    }
  };

  return (
    <div className="city-list">
      <button onClick={addCity}>Add City</button>
      {cities.map((city, index) => (
        <div key={index} className="city-item">
          {city}
          <button onClick={() => deleteCity(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;