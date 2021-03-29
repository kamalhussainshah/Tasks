import React from 'react';
import './button.css';

const CustomButton = ({children}) => (
  <button className='custom-button' >
      {children}
  </button>
);

export default CustomButton;