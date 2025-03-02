import { useState } from 'react';
import CountryList from './CountryList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <h1>Country Management System</h1>
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;