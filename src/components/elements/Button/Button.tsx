import React from 'react';
import styles from './Button.module.scss';

type Props = {
  text: string;
  color: string;
  variant?: string;
  modifier?: string;
  as?: string;
  className?: string;
  children?: JSX.Element;
}


const Button = ({text, color, variant, modifier, className, as, children, ...rest}: Props) => {

  if (as === 'a') {
    return (
      <a
        className={`button ${styles[color]} ${styles[variant]} ${styles[modifier]} ${className}`}
        data-testid="link"
        {...rest}
      >
        {text}
      </a>
    )
  } else {
    return (
      <button
        className={`button ${styles[color]} ${styles[variant]} ${styles[modifier]} ${className}`}
        data-testid="button"
        {...rest}
      >
        {text}
      </button>
    )
  }

};

export default Button;
