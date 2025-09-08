import logo from '../Assets/MG Logo - White - Final.png'
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles['header-logo']} />
      <nav className={styles['nav-menu']}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/specialities">Specialities</Link>
          </li>
          <li>
            <Link to="/elevation">Elevation</Link>
          </li>
          <li>
            <Link to="/speaking">Speaking</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
        </ul>

      <button className={styles['getStarted-btn']}> Get Started</button>


      </nav>
    </header>
  );
}

export default Header;