import React, { useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    if (header) {
      console.log("Header element found. Applying animation class...");
      setTimeout(() => {
        header.classList.add(styles.animate);
        console.log("Animation class applied.");
      }, 100); // Slight delay to ensure content is rendered
    } else {
      console.log("Header element not found.");
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Ran Polac</h1>
        <h2>B.Sc Information Systems Engineering Student</h2>
        <p>
        Hey there! I'm Ran, a motivated student who is highly passionate about technology and programming .
        Team player with a can-do attitude, proficient in Python, Excel, SQL, and PowerBI.
        <p>
        With experience in leading teams and delivering under pressure,
        I am Eager to explore new fields and enhance existing skills. Ready to prove myself in the next step of my life.</p>
        </p>
        <p>Seeking any positions in related fields, available 5 days a week.</p>
      </div>
    </header>
  );
};

export default Header;
