import React from 'react';

import { useStateContext } from '../context/stateContext';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;