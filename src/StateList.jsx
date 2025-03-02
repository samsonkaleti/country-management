import React from 'react';
import CityList from './CityList';

function StateList({ states, setStates }) {
  const addState = () => {
    const name = prompt('Enter state name:');
    if (name) {
      setStates([...states, { name, cities: [] }]);
    }
  };

  const editState = (index) => {
    const newName = prompt('Enter new state name:', states[index].name);
    if (newName && window.confirm('Are you sure you want to update this state?')) {
      const updatedStates = [...states];
      updatedStates[index].name = newName;
      setStates(updatedStates);
    }
  };

  const deleteState = (index) => {
    if (window.confirm('Are you sure you want to delete this state and all its cities?')) {
      const updatedStates = states.filter((_, i) => i !== index);
      setStates(updatedStates);
    }
  };

  return (
    <div className="state-list">
      <button onClick={addState}>Add State</button>
      {states.map((state, index) => (
        <div key={index} className="state-item">
          <h3>
            {state.name}
            <button onClick={() => editState(index)}>Edit</button>
            <button onClick={() => deleteState(index)}>Delete</button>
          </h3>
          <CityList 
            cities={state.cities}
            setCities={(newCities) => {
              const updatedStates = [...states];
              updatedStates[index].cities = newCities;
              setStates(updatedStates);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default StateList;