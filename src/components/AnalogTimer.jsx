// import React, { useEffect, useState } from 'react';
// import EasyTimer from 'easytimer.js';
// import '../styles/AnalogTimer.css';  // Importera CSS för AnalogTimer

// const AnalogTimer = ({ minutes, onTimerEnd, onCancel }) => {
//   const [time, setTime] = useState({ minutes: minutes, seconds: 0 });
//   const timer = new EasyTimer();

//   useEffect(() => {
//     timer.start({ countdown: true, startValues: { minutes } });
//     timer.addEventListener('secondsUpdated', () => {
//       setTime({
//         minutes: timer.getTimeValues().minutes,
//         seconds: timer.getTimeValues().seconds,
//       });
//     });
//     timer.addEventListener('targetAchieved', onTimerEnd);

//     return () => {
//       timer.stop();
//     };
//   }, [minutes]);

//   // Justera rotationen så att visarna startar vid toppen (kl 12)
//   const getRotationStyles = () => {
//     const secondDegree = -(time.seconds / 60) * 360 - 284; // Starta från kl 12 (-90 grader)
//     const minuteDegree = -(time.minutes / minutes) * 360 - 313; // Starta från kl 12 (-90 grader)
//     return {
//       secondHandStyle: {
//         transform: `rotate(${secondDegree}deg)`,
//       },
//       minuteHandStyle: {
//         transform: `rotate(${minuteDegree}deg)`,
//       },
//     };
//   };
  

//   const { secondHandStyle, minuteHandStyle } = getRotationStyles();

//   return (
//     <div className="analog-timer">
//         <h1>Intervall</h1>
//       <div className="clock">
//         <div className="clock-face">
//           {/* Skapa tickmarks */}
//           <div className="tickmarks">
//             {[...Array(60)].map((_, i) => (
//               <div key={i} className="tick" style={{ transform: `rotate(${i * 6}deg)` }}>
//                 <div className="tick-mark"></div>
//               </div>
//             ))}
//           </div>

//           {/* Klockvisarna */}
//           <div className="hand minute" style={minuteHandStyle}></div>
//           <div className="hand second" style={secondHandStyle}></div>
//         </div>
//       </div>
//       <button onClick={onCancel}>ABORT TIMER</button>
//     </div>
//   );
// };

// export default AnalogTimer;


//test 2
import React, { useEffect, useState } from 'react';
import EasyTimer from 'easytimer.js';
import '../styles/AnalogTimer.css';  // Importera CSS för AnalogTimer

const AnalogTimer = ({ minutes, onTimerEnd, onCancel }) => {
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

  // Justera rotationen så att visarna startar vid toppen (kl 12)
  const getRotationStyles = () => {
    const secondDegree = (time.seconds / 60) * 360 - 90; // Starta från kl 12 (-90 grader)
    const minuteDegree = (time.minutes / 60) * 360 - 90; // Starta från kl 12 (-90 grader)
    return {
      secondHandStyle: {
        transform: `rotate(${secondDegree}deg)`,
      },
      minuteHandStyle: {
        transform: `rotate(${minuteDegree}deg)`,
      },
    };
  };

  const { secondHandStyle, minuteHandStyle } = getRotationStyles();

  return (
    <div className="analog-timer">
        <h1>Intervall</h1>
      <div className="clock">
        <div className="clock-face">
          {/* Skapa tickmarks */}
          <div className="tickmarks">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="tick" style={{ transform: `rotate(${i * 6}deg)` }}>
                <div className="tick-mark"></div>
              </div>
            ))}
          </div>

          {/* Klockvisarna */}
          <div className="hand minute" style={minuteHandStyle}></div>
          <div className="hand second" style={secondHandStyle}></div>
        </div>
      </div>
      <button onClick={onCancel}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogTimer;
