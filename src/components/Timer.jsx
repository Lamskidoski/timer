import React, { useEffect, useState } from 'react';
import EasyTimer from 'easytimer.js';

const Timer = ({ type, minutes, onTimerEnd, onCancel }) => {
  // State för att hålla reda på tiden (minuter och sekunder)
  const [time, setTime] = useState({ minutes: minutes, seconds: 0 });
  
  // Skapar en instans av EasyTimer, som används för att räkna ner tiden
  const timer = new EasyTimer();

  // useEffect-hook som startar timern när komponenten monteras
  useEffect(() => {
    timer.start({ countdown: true, startValues: { minutes } }); // Starta timern i nedräkningsläge med startvärden

    // Lyssnar på uppdateringar varje sekund och uppdaterar `time`-state
    timer.addEventListener('secondsUpdated', () => {
      setTime({
        minutes: timer.getTimeValues().minutes,
        seconds: timer.getTimeValues().seconds,
      });
    });

    // När timern når noll anropas `onTimerEnd`-funktionen
    timer.addEventListener('targetAchieved', onTimerEnd);

    // Rensa timern när komponenten avmonteras för att undvika minnesläckor
    return () => {
      timer.stop();
    };
  }, [minutes, onTimerEnd]); // Körs när `minutes` eller `onTimerEnd` uppdateras

  // Funktion för att rendera analog timer-vy
  const renderAnalog = () => (
    <div className="analog-timer">
      <p>{`${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`}</p> {/* Visar tiden i MM:SS-format */}
    </div>
  );

  // Funktion för att rendera digital timer-vy
  const renderDigital = () => (
    <div className="digital-timer" style={{ textAlign: 'center', fontSize: '48px' }}>
      <p>{`${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`}</p> {/* Visar tiden i MM:SS-format */}
    </div>
  );

  return (
    <div className="timer-container">
      {/* Beroende på `type` renderas antingen analog eller digital timer */}
      {type === 'analog' ? renderAnalog() : renderDigital()}
      
      {/* Knapp för att avbryta timern, anropar `onCancel`-funktionen */}
      <button onClick={onCancel} style={{ marginTop: '20px' }}>
        ABORT TIMER
      </button>
    </div>
  );
};

export default Timer;
