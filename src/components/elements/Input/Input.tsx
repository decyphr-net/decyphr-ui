import React from 'react';

type Props = {
  id?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  as?: string;
  children?: JSX.Element;
}

const Input = ({id, type, placeholder, as, children,  className = '', ...rest}: Props) => {
  if (as === "select") {
    return (
      <div className="select">
        <select>
          {children}
        </select>
      </div>
    )
  } else {
    return (
      <input id={id} className={`input ${className}`} type={type} placeholder={placeholder} {...rest} />
    )
  }
};

export default Input;
