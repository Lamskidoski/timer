import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SetTimer from './components/SetTimer';
import Timer from './components/Timer';  // En komponent för både analog och digital timer
import AlarmView from './components/AlarmView';
import BreakView from './components/BreakView'; // Ny komponent för pausen
import Menu from './components/Menu';  // Ny komponent för menyn

const App = () => {
  const [view, setView] = useState('loading'); // Hanterar olika vyer
  const [timerType, setTimerType] = useState('analog'); // Typ av timer (analog eller digital)
  const [minutes, setMinutes] = useState(10); // Standardtid för timer
  const [intervals, setIntervals] = useState(false); // Hanterar om intervall ska användas
  const [pause, setPause] = useState(false); // Hanterar paus mellan intervaller

  const startTimer = (minutes, intervals, pause) => {
    setMinutes(minutes);
    setIntervals(intervals);
    setPause(pause);
    setView('timer'); // Gå till timer-vyn när start-knappen klickas
  };

  const cancelTimer = () => {
    setView('set-timer'); // Gå tillbaka till timerinställningarna om användaren avbryter timern
  };

  const timerEnd = () => {
    if (intervals) {
      setView('break'); // Om det är ett intervall och det är slut, gå till pausen
    } else {
      setView('alarm'); // Om det inte är ett intervall, visa alarmet
    }
  };

  const handleBreakEnd = () => {
    setView('timer'); // Efter pausen, gå tillbaka till timern
  };

  const handleMenuSelect = (type) => {
    setTimerType(type); // Välj mellan analog, digital, eller textbaserad timer
    setView('set-timer'); // Efter menyn, gå till set-timer vyn
  };

  return (
    <div>
      {view === 'loading' && <LoadingScreen onLogoClick={() => setView('menu')} />}

      {view === 'menu' && <Menu onSelect={handleMenuSelect} />}

      {view === 'set-timer' && <SetTimer onStartTimer={startTimer} />}

      {view === 'timer' && (
        <Timer type={timerType} minutes={minutes} onTimerEnd={timerEnd} onCancel={cancelTimer} />
      )}

      {view === 'break' && <BreakView onSkip={handleBreakEnd} />}

      {view === 'alarm' && <AlarmView onReset={() => setView('set-timer')} />}
    </div>
  );
};

export default App;
