import React, { useState, useEffect } from 'react';
import EasyTimer from 'easytimer.js';
import LoadingScreen from './components/LoadingScreen';
import SetTimer from './components/SetTimer';
import AnalogTimer from './components/AnalogTimer';
import DigitalTimer from './components/DigitalTimer';
import TimerModeModal from './components/TimerModeModal';
import AlarmView from './components/AlarmView';
import Menu from './components/Menu';
import './styles/TimerModeModal.css';

const App = () => {
  // Tillstånd för att hantera appens olika vyer och modal
  const [view, setView] = useState('loading'); // Aktuell vy i appen
  const [timerType, setTimerType] = useState('analog'); // Typ av timer (analog eller digital)
  const [timeLeft, setTimeLeft] = useState(0); // Tid kvar på timern i sekunder
  const [timer, setTimer] = useState(null); // Referens till timern
  const [showModal, setShowModal] = useState(false); // Visningsstatus för modalen

  // Funktion för att starta timern
  const startTimer = (minutes) => {
    const newTimer = new EasyTimer(); // Skapar en ny instans av EasyTimer
    newTimer.start({ countdown: true, startValues: { minutes } }); // Startar nedräkningen med angivet antal minuter

    // Uppdaterar tid kvar i `timeLeft` varje sekund
    newTimer.addEventListener('secondsUpdated', () => {
      setTimeLeft(newTimer.getTotalTimeValues().seconds);
    });

    // När timern når noll, byt till alarm-vyn och nollställ timer-referensen
    newTimer.addEventListener('targetAchieved', () => {
      setView('alarm');
      setTimer(null);
    });

    setTimer(newTimer); // Sätter den skapade timern i `timer`-state
    setTimeLeft(minutes * 60); // Uppdaterar `timeLeft` med starttid i sekunder
    setView('timer'); // Byter till timer-vyn
  };

  // Funktion för att avbryta timern
  const cancelTimer = () => {
    if (timer) {
      timer.stop(); // Stoppar timern om den existerar
      setTimer(null); // Tar bort referensen till timern
    }
    setView('set-timer'); // Gå tillbaka till timerinställningsvyn
  };

  // Funktion för att växla mellan analog och digital timer, samt stänga modal
  const switchTimerType = (type) => {
    setTimerType(type); // Uppdaterar timer-typen (analog/digital)
    setShowModal(false); // Stänger modal efter val
  };

  return (
    <div>
      {/* Laddningsskärm, visas initialt */}
      {view === 'loading' && <LoadingScreen onLogoClick={() => setView('menu')} />}

      {/* Menyvy för att välja mellan analog och digital timer */}
      {view === 'menu' && <Menu onSelect={(type) => { setTimerType(type); setView('set-timer'); }} />}

      {/* Vy för att ställa in timer */}
      {view === 'set-timer' && <SetTimer onStartTimer={startTimer} onMenuClick={() => setView('menu')} />}

      {/* Timer-vyn, visar antingen analog eller digital timer beroende på `timerType` */}
      {view === 'timer' && (
        <>
          {timerType === 'analog' ? (
            <AnalogTimer timeLeft={timeLeft} onCancel={cancelTimer} onMenuClick={() => setShowModal(true)} />
          ) : (
            <DigitalTimer timeLeft={timeLeft} onCancel={cancelTimer} onMenuClick={() => setShowModal(true)} />
          )}
        </>
      )}

      {/* Alarmvy som visas när timern är slut */}
      {view === 'alarm' && <AlarmView onReset={() => setView('set-timer')} />}

      {/* Modal för att välja timer-typ, visas om `showModal` är true */}
      {showModal && (
        <TimerModeModal
          onClose={() => setShowModal(false)} // Stänger modal
          onSelect={switchTimerType} // Väljer timer-typ
        />
      )}
    </div>
  );
};

export default App;
