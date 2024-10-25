import React, { useState } from 'react';
import '../styles/SetTimer.css';

const SetTimer = ({ onStartTimer, onMenuClick }) => {
  // Lokal state för att hålla reda på antal minuter användaren valt för timern
  const [minutes, setMinutes] = useState(10);

  // Funktion som startar timern med det aktuella minutvärdet
  const startTimer = () => {
    onStartTimer(minutes); // Anropar onStartTimer-funktionen och skickar antal minuter
  };

  return (
    <div className="set-timer-container">
      {/* Menyikon för att navigera tillbaka till huvudmenyn */}
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />

      {/* Tidsväljare för att öka eller minska minutvärdet */}
      <div className="time-selector">
        <button onClick={() => setMinutes(minutes - 1)}>{'<'}</button> {/* Minskar minutvärdet */}
        <span>{minutes} minutes</span> {/* Visar det aktuella minutvärdet */}
        <button onClick={() => setMinutes(minutes + 1)}>{'>'}</button> {/* Ökar minutvärdet */}
      </div>

      {/* Start-knapp som startar timern */}
      <button onClick={startTimer}>START TIMER</button>
    </div>
  );
};

export default SetTimer;
