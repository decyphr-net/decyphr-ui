import React from 'react';

type Props = {
  children?: JSX.Element;
}

const Navbar: React.FC = ({ children }: Props) => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h3 className="logo has-text-green is-size-4">Decyphr</h3>
        </a>
      </div>

      { children }

      <span
        className="navbar-burger burger"
        data-target="navbarMenuHeroA"
      >
        <span />
        <span />
        <span />
      </span>
    </div>
  </nav>
)

export default Navbar;
