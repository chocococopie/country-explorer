import React from "react";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.image} alt={country.name} width={600} className="country-image" />
      <h2>{country.name}</h2>
      <p><strong>Fun Fact:</strong> {country.funFact}</p>
      <p><strong>Major Cities:</strong> {country.cities.join(", ")}</p>
      <p><strong>Region:</strong> {country.region}</p>
    </div>
  );
}

export default CountryCard;
