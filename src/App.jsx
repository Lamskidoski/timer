import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SetTimer from './components/SetTimer';
import AnalogTimer from './components/AnalogTimer';  // Analog timer komponent
import DigitalTimer from './components/DigitalTimer';  // Digital timer komponent
import AlarmView from './components/AlarmView';
import Menu from './components/Menu';  // Komponent för menyn

const App = () => {
  const [view, setView] = useState('loading');  // Hanterar olika vyer
  const [timerType, setTimerType] = useState('analog');  // Typ av timer (analog eller digital)
  const [minutes, setMinutes] = useState(10);  // Standardtid för timer

  const startTimer = (minutes) => {
    setMinutes(minutes);
    setView('timer');  // Gå till timer-vyn när start-knappen klickas
  };

  const cancelTimer = () => {
    setView('set-timer');  // Gå tillbaka till timerinställningarna om användaren avbryter timern
  };

  const timerEnd = () => {
    setView('alarm');  // När timern tar slut, visa alarmet
  };

  const handleMenuSelect = (type) => {
    setTimerType(type);  // Välj mellan analog, digital, eller textbaserad timer
    setView('set-timer');  // Efter menyn, gå till set-timer vyn
  };

  const handleReset = () => {
    setView('set-timer');  // Gå tillbaka till set-timer från alarmet
  };

  return (
    <div>
      {/* Laddningsskärm */}
      {view === 'loading' && <LoadingScreen onLogoClick={() => setView('menu')} />}

      {/* Meny */}
      {view === 'menu' && <Menu onSelect={handleMenuSelect} />}

      {/* Timerinställningsvyn */}
      {view === 'set-timer' && <SetTimer onStartTimer={startTimer} onMenuClick={() => setView('menu')} />}

      {/* Timer (analog eller digital) */}
      {view === 'timer' && (
        timerType === 'analog' ? (
          <AnalogTimer minutes={minutes} onTimerEnd={timerEnd} onCancel={cancelTimer} onMenuClick={() => setView('menu')} />  
        ) : (
          <DigitalTimer minutes={minutes} onTimerEnd={timerEnd} onCancel={cancelTimer} onMenuClick={() => setView('menu')}/>
        )
      )}
      
      {/* Alarmvy */}
      {view === 'alarm' && <AlarmView onReset={handleReset} />}  {/* Lägg till onReset-funktion */}
    </div>
  );
};

export default App;
