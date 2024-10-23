// test 1
// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; // För animationer

// const LoadingScreen = ({ onLogoClick }) => {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <div className="loading-container">
//         <img src="/path-to-logo.png" alt="Logo" onClick={onLogoClick} />
//         <h2>Slogan här</h2>
//       </div>
//     </motion.div>
//   );
// };

// export default LoadingScreen;

//test 2
// import React, { useEffect } from 'react';
// import anime from 'animejs';

// const LoadingScreen = ({ onLogoClick }) => {
//   useEffect(() => {
//     anime({
//       targets: '.loading-container img',
//       scale: [0, 1],  // Logotypen skalar upp från 0 till 1
//       duration: 1000,
//       easing: 'easeInOutQuad'
//     });
//   }, []);

//   return (
//     <div className="loading-container" style={{ textAlign: 'center', marginTop: '50px' }}>
//       <img
//         src="/src/assets/logo.png"
//         alt="Logo"
//         onClick={onLogoClick}
//         style={{ cursor: 'pointer' }}
//       />
//       <h2>Slogan här</h2>
//     </div>
//   );
// };

// export default LoadingScreen;

// test 3 
import React, { useEffect } from 'react';
import anime from 'animejs';

const LoadingScreen = ({ onLogoClick }) => {
  useEffect(() => {
    anime({
      targets: '.loading-container img',
      scale: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }, []);

  return (
    <div className="loading-container" style={{ backgroundColor: '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/src/assets/logo.png" alt="Logo" onClick={onLogoClick} style={{ cursor: 'pointer' }} />
      <p style={{ color: '#fff' }}>For all your timing needs</p>
    </div>
  );
};

export default LoadingScreen;
