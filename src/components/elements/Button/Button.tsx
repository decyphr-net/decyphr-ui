import React from 'react';
import styles from './Button.module.scss';

type Props = {
  text: string;
  color: string;
  variant?: string;
  modifier?: string;
  children?: JSX.Element;
}

const Button = ({text, color, variant, modifier, children, ...rest}: Props) => (
  <button className={`button ${styles[color]} ${styles[variant]} ${styles[modifier]}`} {...rest}>{text}</button>
);

export default Button;
