import React from 'react';
import styles from './navbar.module.scss';

type Props = {
  children?: JSX.Element;
}

const Navbar: React.FC = ({ children }: Props) => (
  <nav className={`navbar ${styles["nav"]}`}>
    <div className="container">
      <div className="navbar-brand">
        <a href="/dashboard" className="navbar-item">
          <h3 className="logo has-text-green is-size-4">Decyphr</h3>
        </a>
      </div>

      { children }

      <span
        className={`navbar-burger ${styles["burger"]}`}
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
