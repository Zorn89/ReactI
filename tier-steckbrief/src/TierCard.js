import React from 'react';
import './TierCard.css'; // Optionale CSS-Datei für Styling

function TierCard(props) {
  return (
    <div className="tier-card">
      <h2>{props.name}</h2>
      <p>Art: {props.art}</p>
      {props.krankheit && <p>Krankheit: {props.krankheit}</p>}
    </div>
  );
}

export default TierCard;