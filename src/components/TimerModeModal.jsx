import React from 'react';
import '../styles/TimerModeModal.css';

const TimerModeModal = ({ onClose, onSelect }) => {
  return (
    <div className="modal-overlay">
      {/* Huvudcontainer för modalen */}
      <div className="modal">
        {/* Rubrik som uppmanar användaren att välja timerläge */}
        <h2>Select Timer Mode</h2>
        
        {/* Knapp för att välja analog timer */}
        <button onClick={() => onSelect('analog')}>Analog Timer</button>
        
        {/* Knapp för att välja digital timer */}
        <button onClick={() => onSelect('digital')}>Digital Timer</button>
        
        {/* Knapp för att stänga modalen utan att göra ett val */}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TimerModeModal;
