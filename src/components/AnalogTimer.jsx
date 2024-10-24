
import React, { useEffect, useState } from 'react';
import '../styles/AnalogTimer.css';

const AnalogTimer = ({ minutes, onCancel, onTimerEnd, onMenuClick }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // Startvärde i sekunder

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      onTimerEnd(); // Anropa funktion när timern når noll
    }
  }, [timeLeft, onTimerEnd]);

  // Beräkna vinklar för minut- och sekundvisarna
  const seconds = timeLeft % 60;
  const minutesRemaining = Math.floor(timeLeft / 60);
  const secondsDegrees = -(seconds / 60) * 360;
  const minutesDegrees = (minutesRemaining / 60) * 360 - (minutesRemaining * 6.1);

  return (
    <div className="timer">
      {/* Lägg till SVG för menyikonen */}
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />
      
      <img src="/src/assets/clockface.png" alt="clock-face" className="clock-face" />
      <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />

      <button className="abort-button" onClick={onCancel}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogTimer;
