import logo from '../Assets/MG Logo - White - Final.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles['header-logo']} />
      
      {/* Hamburger Button */}
      <button 
        className={styles['hamburger-btn']} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles['hamburger-line']} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles['hamburger-line']} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles['hamburger-line']} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>

      <nav className={`${styles['nav-menu']} ${isMenuOpen ? styles['nav-open'] : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <a href="#speaking" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#elevation" onClick={closeMenu}>Elevation</a>
          </li>
          <li>
            <a href="#speaking" onClick={closeMenu}>Speaking</a>
          </li>
          <li>
            <a href="#connect" onClick={closeMenu}>Connect</a>
          </li>
        </ul>

        <button className={styles['getStarted-btn']} onClick={closeMenu}>
          Get Started
        </button>
      </nav>
    </header>
  );
}
export default Header;