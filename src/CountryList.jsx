import React from 'react';
import StateList from './StateList';

function CountryList({ countries, setCountries }) {
  const addCountry = () => {
    const name = prompt('Enter country name:');
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt('Enter new country name:', countries[index].name);
    if (newName && window.confirm('Are you sure you want to update this country?')) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm('Are you sure you want to delete this country and all its states and cities?')) {
      const updatedCountries = countries.filter((_, i) => i !== index);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <button onClick={addCountry}>Add Country</button>
      <div>
        {countries.map((country, index) => (
          <div key={index} className="country-item">
            <h2>
              {country.name}
              <button onClick={() => editCountry(index)}>Edit</button>
              <button onClick={() => deleteCountry(index)}>Delete</button>
            </h2>
            <StateList 
              states={country.states} 
              setStates={(newStates) => {
                const updatedCountries = [...countries];
                updatedCountries[index].states = newStates;
                setCountries(updatedCountries);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;