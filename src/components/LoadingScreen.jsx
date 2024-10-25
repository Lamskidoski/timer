import React, { useEffect } from 'react';
import anime from 'animejs';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onLogoClick }) => {
  // Animering som körs när komponenten laddas
  useEffect(() => {
    anime({
      targets: '.loading-container img', // Mål: logobilden
      scale: [0, 1], // Skala från 0 (osynlig) till 1 (full storlek)
      duration: 1000, // Animeringens längd i millisekunder
      easing: 'easeInOutQuad' // Mjuk in/ut-effekt för animering
    });
  }, []);

  return (
    <div className="loading-container" style={{ backgroundColor: '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Logo-bild som användaren kan klicka på för att navigera vidare */}
      <img src="/src/assets/menu.svg" alt="Logo" onClick={onLogoClick} style={{ cursor: 'pointer' }} />
      
      {/* Huvudrubrik för laddningsskärmen */}
      <h1>Interval</h1>
      
      {/* Beskrivande text för laddningsskärmen */}
      <p style={{ color: '#fff' }}>For all your timing needs</p>
    </div>
  );
};

export default LoadingScreen;
