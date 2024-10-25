import React from 'react';
import '../styles/AnalogTimer.css';

const AnalogTimer = ({ timeLeft, onCancel, onMenuClick }) => {
  // Beräkna antal sekunder och minuter kvar baserat på `timeLeft` (i sekunder)
  const seconds = timeLeft % 60; // Tar bara de sista sekunderna från total tid
  const minutes = Math.floor(timeLeft / 60); // Beräknar antal minuter kvar

  // Beräknar vinklar för visarna (i grader) baserat på kvarvarande tid
  const secondsDegrees = -(seconds / 60) * 360; // Vinkel för sekundvisaren
  const minutesDegrees = (minutes / 60) * 360 - (minutes * 6.1); // Vinkel för minutvisaren

  return (
    <div className="timer">
      {/* Menyikon som öppnar inställningar (exempelvis för att byta mellan digital och analog vy) */}
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />
      
      {/* Bild för klockans urtavla */}
      <img src="/src/assets/clockface.png" alt="clock-face" className="clock-face" />
      
      {/* Visare för minuter, roteras baserat på `minutesDegrees` */}
      <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
      
      {/* Visare för sekunder, roteras baserat på `secondsDegrees` */}
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
      
      {/* Knapp för att avbryta timern, anropar `onCancel` för att hantera avbrytningen */}
      <button className="abort-button" onClick={onCancel}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogTimer;
