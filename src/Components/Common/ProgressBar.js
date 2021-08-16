import React from 'react';

const ProgressBar = ({ value }) => {
  return (
    <div className='progress-bar'>
      <div
        className='progress-bar__filled'
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
