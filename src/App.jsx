import React from "react";
import countries from "./data/countries.json";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🌍 Country Explorer</h1>
      <div className="card-grid">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
