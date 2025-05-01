import React, { useState } from "react";
import CustomSelect from "../UI/CustomSelect";
import styles from "./Header.module.css";

function Header() {
  const [language, setLanguage] = useState({ value: "en", label: "English" });

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
  ];

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
    console.log(`Language changed to: ${selectedOption.value}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.upperInfoBar}>
        <div className={styles.offerMessage}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="https://www.google.com">Shop Now</a>
        </div>
        <div className={styles.languageSwitcher}>
          <CustomSelect
            value={language}
            onChange={handleLanguageChange}
            options={languageOptions}
          />
        </div>
      </div>

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
