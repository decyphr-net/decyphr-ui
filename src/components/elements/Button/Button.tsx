import React from 'react';
import styles from './Button.module.scss';

type Props = {
  text: string;
  color: string;
  variant?: string;
  modifier?: string;
  as?: string;
  children?: JSX.Element;
}


const Button = ({text, color, variant, modifier, as, children, ...rest}: Props) => {

  if (as === 'a') {
    return (
      <a
        className={`button ${styles[color]} ${styles[variant]} ${styles[modifier]}`}
        {...rest}
      >
        {text}
      </a>
    )
  } else {
    return (
      <button
        className={`button ${styles[color]} ${styles[variant]} ${styles[modifier]}`}
        {...rest}
      >
        {text}
      </button>
    )
  }

};

export default Button;
