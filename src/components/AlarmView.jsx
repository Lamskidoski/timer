//Test 1
// import React from 'react';

// const AlarmView = ({ onReset }) => {
//   return (
//     <div className="alarm-view">
//       <h1>Timer slut!</h1>
//       <button onClick={onReset}>Återgå till Timer</button>
//     </div>
//   );
// };

// export default AlarmView;

//test 2
import React from 'react';

const AlarmView = ({ onReset }) => {
  return (
    <div className="alarm-view" style={{ textAlign: 'center', backgroundColor: '#333', height: '100vh', color: '#fff' }}>
      <h1>Times up!</h1>
      <button onClick={onReset}>SET NEW TIMER</button>
    </div>
  );
};

export default AlarmView;
