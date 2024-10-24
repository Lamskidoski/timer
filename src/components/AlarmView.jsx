// //test 2
// import React from 'react';

// const AlarmView = ({ onReset }) => {
//   return (
//     <div className="alarm-view" style={{ textAlign: 'center', backgroundColor: '#333', height: '100vh', color: '#fff' }}>
//       <h1>Times up!</h1>
//       <button onClick={onReset}>SET NEW TIMER</button>
//     </div>
//   );
// };

// export default AlarmView;

// import React from 'react';
// import '../styles/AlarmView.css'

// const AlarmView = ({ onReset }) => {
//   return (
//     <div className="alarm-view">
//       {/* Lägg till alarm-ikonen */}
//       <img src="/src/assets/alarm.svg" alt="Alarm icon" />
//       <h1>Times up!</h1>
//       <button onClick={onReset}>SET NEW TIMER</button>
//     </div>
//   );
// };

// export default AlarmView;

import React from 'react';
import '../styles/AlarmView.css'

const AlarmView = ({ onReset }) => {
  return (
    <div className="alarm-view">
      <img src="/src/assets/alarm.svg" alt="Alarm icon" />
      <h1>Times up!</h1>
      <button onClick={() => {
        onReset();  // Anropar onReset-funktionen
      }}>SET NEW TIMER</button>
    </div>
  );
};

export default AlarmView;
