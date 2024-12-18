import React, { ReactNode, MouseEvent } from 'react';
import '../styles/Button.css';

const STYLES= ['btn--primary', 'btn--outline', 'btn--outline-sub'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];



export const Button= ({
  children,
  type = 'button',
  onClick,
  buttonStyle = STYLES[0],
  buttonSize = SIZES[0],
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor || '') ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
