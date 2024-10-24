import React, { useState } from 'react';
import '../styles/SetTimer.css';

const SetTimer = ({ onStartTimer, onMenuClick }) => {
  const [minutes, setMinutes] = useState(10);

  const startTimer = () => {
    onStartTimer(minutes);
  };

  return (
    <div className="set-timer-container">
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />
      <div className="time-selector">
        <button onClick={() => setMinutes(minutes - 1)}>{'<'}</button>
        <span>{minutes} minutes</span>
        <button onClick={() => setMinutes(minutes + 1)}>{'>'}</button>
      </div>

      <button onClick={startTimer}>START TIMER</button>
    </div>
  );
};

export default SetTimer;

