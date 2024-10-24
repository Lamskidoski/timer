import React, { useEffect, useState } from 'react';
import EasyTimer from 'easytimer.js';

const DigitalTimer = ({ minutes, onTimerEnd, onCancel }) => {
  const [time, setTime] = useState({ minutes: minutes, seconds: 0 });
  const timer = new EasyTimer();

  useEffect(() => {
    timer.start({ countdown: true, startValues: { minutes } });
    timer.addEventListener('secondsUpdated', () => {
      setTime({
        minutes: timer.getTimeValues().minutes,
        seconds: timer.getTimeValues().seconds,
      });
    });
    timer.addEventListener('targetAchieved', onTimerEnd);

    return () => {
      timer.stop();
    };
  }, [minutes]);

  return (
    <div className="digital-timer" style={{ textAlign: 'center', fontSize: '48px' }}>
      <p>{`${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`}</p>
      <button onClick={onCancel} style={{ marginTop: '20px' }}>
        ABORT TIMER
      </button>
    </div>
  );
};

export default DigitalTimer;
