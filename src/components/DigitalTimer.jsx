import React from 'react';
import '../styles/DigitalTimer.css';

const DigitalTimer = ({ timeLeft, onCancel, onMenuClick }) => {
  const seconds = timeLeft % 60;
  const minutes = Math.floor(timeLeft / 60);

  return (
    <div className="digital-timer" style={{ textAlign: 'center', fontSize: '48px' }}>
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />
      
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
      <button onClick={onCancel} style={{ marginTop: '20px' }}>
        ABORT TIMER
      </button>
    </div>
  );
};

export default DigitalTimer;
