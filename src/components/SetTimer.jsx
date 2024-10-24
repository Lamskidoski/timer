// test 1
// import React, { useState } from 'react';

// const SetTimer = ({ onStartTimer }) => {
//   const [minutes, setMinutes] = useState(0);
//   const [intervals, setIntervals] = useState(false);
//   const [pause, setPause] = useState(false);

//   const startTimer = () => {
//     onStartTimer(minutes, intervals, pause);
//   };

//   return (
//     <div className="set-timer-container">
//       <label>Timer (minuter):</label>
//       <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      
//       <label>Intervall:</label>
//       <input type="checkbox" checked={intervals} onChange={() => setIntervals(!intervals)} />

//       {intervals && (
//         <>
//           <label>Pause mellan intervall (5 min):</label>
//           <input type="checkbox" checked={pause} onChange={() => setPause(!pause)} />
//         </>
//       )}

//       <button onClick={startTimer}>Starta Timer</button>
//     </div>
//   );
// };

// export default SetTimer;

//test 2
import React, { useState } from 'react';
import '../styles/SetTimer.css';

const SetTimer = ({ onStartTimer, onMenuClick }) => {
  const [minutes, setMinutes] = useState(10);

  const startTimer = () => {
    onStartTimer(minutes);
  };

  return (
    <div className="set-timer-container">
      {/* Menyikon i det övre vänstra hörnet */}
      <img src="/src/assets/menu.svg" alt="Menu" className="menu-icon" onClick={onMenuClick} />

      <div className="time-selector">
        <button onClick={() => setMinutes(minutes - 1)}>{'<'}</button>
        <span>{minutes} minutes</span>
        <button onClick={() => setMinutes(minutes + 1)}>{'>'}</button>
      </div>

      <button onClick={startTimer}>START TIMER</button>
    </div>
  );
};

export default SetTimer;

