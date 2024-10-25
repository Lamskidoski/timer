// import React, { useState } from 'react';
// import LoadingScreen from './components/LoadingScreen';
// import SetTimer from './components/SetTimer';
// import AnalogTimer from './components/AnalogTimer';  // Analog timer komponent
// import DigitalTimer from './components/DigitalTimer';  // Digital timer komponent
// import AlarmView from './components/AlarmView';
// import Menu from './components/Menu';  // Komponent för menyn

// const App = () => {
//   const [view, setView] = useState('loading');  // Hanterar olika vyer
//   const [timerType, setTimerType] = useState('analog');  // Typ av timer (analog eller digital)
//   const [minutes, setMinutes] = useState(10);  // Standardtid för timer

//   const startTimer = (minutes) => {
//     setMinutes(minutes);
//     setView('timer');  // Gå till timer-vyn när start-knappen klickas
//   };

//   const cancelTimer = () => {
//     setView('set-timer');  // Gå tillbaka till timerinställningarna om användaren avbryter timern
//   };

//   const timerEnd = () => {
//     setView('alarm');  // När timern tar slut, visa alarmet
//   };

//   const handleMenuSelect = (type) => {
//     setTimerType(type);  // Välj mellan analog, digital, eller textbaserad timer
//     setView('set-timer');  // Efter menyn, gå till set-timer vyn
//   };

//   const handleReset = () => {
//     setView('set-timer');  // Gå tillbaka till set-timer från alarmet
//   };

//   return (
//     <div>
//       {/* Laddningsskärm */}
//       {view === 'loading' && <LoadingScreen onLogoClick={() => setView('menu')} />}

//       {/* Meny */}
//       {view === 'menu' && <Menu onSelect={handleMenuSelect} />}

//       {/* Timerinställningsvyn */}
//       {view === 'set-timer' && <SetTimer onStartTimer={startTimer} onMenuClick={() => setView('menu')} />}

//       {/* Timer (analog eller digital) */}
//       {view === 'timer' && (
//         timerType === 'analog' ? (
//           <AnalogTimer minutes={minutes} onTimerEnd={timerEnd} onCancel={cancelTimer} onMenuClick={() => setView('menu')} />  
//         ) : (
//           <DigitalTimer minutes={minutes} onTimerEnd={timerEnd} onCancel={cancelTimer} onMenuClick={() => setView('menu')}/>
//         )
//       )}
      
//       {/* Alarmvy */}
//       {view === 'alarm' && <AlarmView onReset={handleReset} />}  {/* Lägg till onReset-funktion */}
//     </div>
//   );
// };

// export default App;

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
  const [view, setView] = useState('loading');
  const [timerType, setTimerType] = useState('analog');
  const [timeLeft, setTimeLeft] = useState(0);
  const [timer, setTimer] = useState(null);
  const [showModal, setShowModal] = useState(false); // Nytt tillstånd för modal

  const startTimer = (minutes) => {
    const newTimer = new EasyTimer();
    newTimer.start({ countdown: true, startValues: { minutes } });

    newTimer.addEventListener('secondsUpdated', () => {
      setTimeLeft(newTimer.getTotalTimeValues().seconds);
    });

    newTimer.addEventListener('targetAchieved', () => {
      setView('alarm');
      setTimer(null);
    });

    setTimer(newTimer);
    setTimeLeft(minutes * 60);
    setView('timer');
  };

  const cancelTimer = () => {
    if (timer) {
      timer.stop();
      setTimer(null);
    }
    setView('set-timer');
  };

  const switchTimerType = (type) => {
    setTimerType(type);
    setShowModal(false); // Stäng modalen efter val
  };

  return (
    <div>
      {view === 'loading' && <LoadingScreen onLogoClick={() => setView('menu')} />}

      {view === 'menu' && <Menu onSelect={(type) => { setTimerType(type); setView('set-timer'); }} />}

      {view === 'set-timer' && <SetTimer onStartTimer={startTimer} onMenuClick={() => setView('menu')} />}

      {view === 'timer' && (
        <>
          {timerType === 'analog' ? (
            <AnalogTimer timeLeft={timeLeft} onCancel={cancelTimer} onMenuClick={() => setShowModal(true)} />
          ) : (
            <DigitalTimer timeLeft={timeLeft} onCancel={cancelTimer} onMenuClick={() => setShowModal(true)} />
          )}
        </>
      )}

      {view === 'alarm' && <AlarmView onReset={() => setView('set-timer')} />}

      {/* Visa modalen om showModal är true */}
      {showModal && (
        <TimerModeModal
          onClose={() => setShowModal(false)} // Stäng modal
          onSelect={switchTimerType} // Välj timer-typ
        />
      )}
    </div>
  );
};

export default App;
