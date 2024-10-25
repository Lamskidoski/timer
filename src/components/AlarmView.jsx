import React from 'react';
import '../styles/AlarmView.css';

const AlarmView = ({ onReset }) => {
  return (
    <div className="alarm-view">
      {/* Bildikon för alarm, visas när timern är slut */}
      <img src="/src/assets/alarm.svg" alt="Alarm icon" />
      
      {/* Rubrik som meddelar användaren att tiden är slut */}
      <h1>Times up!</h1>
      
      {/* Knapp för att ställa in en ny timer */}
      <button onClick={() => {
        onReset();  // Anropar onReset-funktionen som nollställer timern och återgår till timerinställningarna
      }}>
        SET NEW TIMER
      </button>
    </div>
  );
};

export default AlarmView;
