import React from 'react';

type Props = {
  type?: string;
  placeholder?: string;
  as?: string;
  children?: JSX.Element;
}

const Input = ({type, placeholder, as, children, ...rest}: Props) => {
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
      <input className="input" {...rest} />
    )
  }
};

export default Input;
