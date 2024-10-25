import React from 'react';
import '../styles/menu.css';

const Menu = ({ onSelect }) => {
  return (
    <div className="menu" style={{ backgroundColor: '#000', color: '#fff', height: '100vh', textAlign: 'center', paddingTop: '20px' }}>
      {/* Knapp för att välja analog timer */}
      <button onClick={() => onSelect('analog')}>ANALOG TIMER</button>
      
      {/* Knapp för att välja digital timer */}
      <button onClick={() => onSelect('digital')}>DIGITAL TIMER</button>
    </div>
  );
};

export default Menu;
