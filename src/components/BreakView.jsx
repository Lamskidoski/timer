import React from 'react';

const BreakView = ({ onSkip }) => {
  return (
    <div className="break-view" style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', height: '100vh' }}>
      <h1>Pause & Breathe</h1>
      <span>3:37</span>
      <button onClick={onSkip}>NO PAUSE, GO NOW!</button>
    </div>
  );
};

export default BreakView;
