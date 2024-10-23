import React from 'react';

const Menu = ({ onSelect }) => {
  return (
    <div className="menu" style={{ backgroundColor: '#000', color: '#fff', height: '100vh', textAlign: 'center', paddingTop: '20px' }}>
      <button onClick={() => onSelect('analog')}>ANALOG TIMER</button>
      <button onClick={() => onSelect('digital')}>DIGITAL TIMER</button>
      <button onClick={() => onSelect('text')}>TEXT TIMER</button>
    </div>
  );
};

export default Menu;
