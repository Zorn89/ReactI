import React from 'react';
import Titel from './Titel';
import TierCard from './TierCard';
import './App.css'; // Standard App-Styles (optional)

function App() {
  const tiere = [
    { name: 'Bello', art: 'Hund', krankheit: 'Allergie' },
    { name: 'Minka', art: 'Katze', krankheit: "Hundeallergie" },
    { name: 'Hans', art: 'Wellensittich', krankheit: 'Untervögelt' },
    { name: 'Nemo', art: 'Goldfisch', krankheit: "Wassersucht" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Titel />
        <div className="tier-container">
          {tiere.map((tier, index) => (
            <TierCard
              key={index}
              name={tier.name}
              art={tier.art}
              krankheit={tier.krankheit}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;