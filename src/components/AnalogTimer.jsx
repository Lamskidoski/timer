// utan framer- motion
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
    const secondDegree = -(time.seconds % 60) * 6 + 76; // Starta från kl 12 (-90 grader)
    const minuteDegree = -(time.minutes / 60) * 360 + 137; // Starta från kl 12 (-90 grader)
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

//test 2
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import EasyTimer from 'easytimer.js';
// import '../styles/AnalogTimer.css';  // Importera CSS för AnalogTimer

// const AnalogTimer = ({ minutes, onTimerEnd, onCancel }) => {
//   const [time, setTime] = useState({ minutes: minutes, seconds: 0 });
//   const [totalSeconds, setTotalSeconds] = useState(0);  // Lägger till total sekunder för att hantera sekundvisaren bättre
//   const timer = new EasyTimer();

//   useEffect(() => {
//     timer.start({ countdown: true, startValues: { minutes } });

//     timer.addEventListener('secondsUpdated', () => {
//       setTime({
//         minutes: timer.getTimeValues().minutes,
//         seconds: timer.getTimeValues().seconds,
//       });
//       setTotalSeconds((prevTotal) => prevTotal + 1); // Öka totala sekunder
//     });

//     timer.addEventListener('targetAchieved', onTimerEnd);

//     return () => {
//       timer.stop();
//     };
//   }, [minutes, onTimerEnd]);

//   // Beräknar rotation för sekund- och minutvisarna
//   const getRotationStyles = () => {
//     const secondDegree = (totalSeconds % 60) * 6 - 90; // Sekundvisaren snurrar 6 grader per sekund, startar från kl 12 (-90)
//     const minuteDegree = (time.minutes / 60) * 360 - 90; // Minutvisaren startar också från kl 12 (-90)
//     return {
//       secondHandStyle: {
//         rotate: secondDegree,
//       },
//       minuteHandStyle: {
//         rotate: minuteDegree,
//       },
//     };
//   };

//   const { secondHandStyle, minuteHandStyle } = getRotationStyles();

//   return (
//     <div className="analog-timer">
//       <h1>Intervall</h1>
//       <div className="clock">
//         <div className="clock-face">
//           {/* Tickmarks runt klockan */}
//           <div className="tickmarks">
//             {[...Array(60)].map((_, i) => (
//               <div key={i} className="tick" style={{ transform: `rotate(${i * 6}deg)` }}>
//                 <div className="tick-mark"></div>
//               </div>
//             ))}
//           </div>

//           {/* Animerade klockvisare */}
//           <motion.div
//             className="hand minute"
//             animate={minuteHandStyle}
//             transition={{ ease: "linear", duration: 60, repeat: Infinity }}
//           />
//           <motion.div
//             className="hand second"
//             animate={secondHandStyle}
//             transition={{ ease: "linear", duration: 1, repeat: Infinity }}
//           />
//         </div>
//       </div>
//       <button onClick={onCancel}>ABORT TIMER</button>
//     </div>
//   );
// };

// export default AnalogTimer;

