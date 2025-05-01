import React, { useState } from 'react';
import styles from './Header.module.css';  // <-- using CSS module

function Header() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    console.log(`Language changed to: ${e.target.value}`);
  };

  return (
    <header className={styles.header}>
      {/* Upper Info Bar */}
      <div className={styles.upperInfoBar}>
        <div className={styles.offerMessage}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="www.google.com">Shop Now</a>
        </div>
        <div className={styles.languageSwitcher}>
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <h1>Exclusive</h1>
        </div>

        <nav className={styles.navbar}>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/Signup">Signup</a>
        </nav>

        <div className={styles.searchBox}>
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
    </header>
  );
}

export default Header;
