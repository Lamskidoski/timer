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

const SetTimer = ({ onStartTimer }) => {
  const [minutes, setMinutes] = useState(10);
  const [intervals, setIntervals] = useState(false);
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    onStartTimer(minutes, intervals, pause);
  };

  return (
    <div className="set-timer-container" style={{ textAlign: 'center', padding: '20px' }}>
      <div className="time-selector">
        <button onClick={() => setMinutes(minutes - 1)}>{'<'}</button>
        <span>{minutes} minutes</span>
        <button onClick={() => setMinutes(minutes + 1)}>{'>'}</button>
      </div>
      <div>
        <input type="checkbox" checked={intervals} onChange={() => setIntervals(!intervals)} />
        <label>intervals (VG)</label>
      </div>
      <div>
        <input type="checkbox" checked={pause} onChange={() => setPause(!pause)} />
        <label>5 min break / interval (VG)</label>
      </div>
      <button onClick={startTimer} style={{ marginTop: '20px' }}>START TIMER</button>
    </div>
  );
};

export default SetTimer;
