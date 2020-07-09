import React from 'react';
import './Switch.css';

const Switch = (props) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={props.name}
        type="checkbox"
        onChange={props.toggleDisabled}
        name={props.name}
      />
      <label
        className="react-switch-label"
        htmlFor={props.name}
      > 
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;