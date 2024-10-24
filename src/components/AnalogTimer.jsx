import React, { useEffect, useState } from 'react';
import '../styles/AnalogTimer.css';

const AnalogTimer = ({ minutes, onCancel }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = (time.getMinutes() / 60) * 360 - 108;

  return (
    <div className="timer">
      <img src="/src/assets/clockface.png" alt="clock-face" className="clock-face" />
      <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />

      <button className="abort-button" onClick={onCancel}>ABORT TIMER</button>  {/* Använder onCancel */}
    </div>
  );
};

export default AnalogTimer;
