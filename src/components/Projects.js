import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.project}>
        <h3>Managing a Drinking System</h3>
        <p>Developed a full-stack application for managing a drinking system. Multi-stage software project, utilizing Java, Scene Builder, and Jubula. 
           Hands-on experience in full-stack system development and collaborative in team setting.</p>
      </div>

      <div className={styles.project}>
        <h3>Online Book Club</h3>
        <p>Developed a client-server website using Node.js, React and MongoDB. Premise: “You can keep a list of books you're itching to read, track the books you've loved,
           start a book club with your friends or leave comments on the books.”</p>
        <p>GitHub Repository: <a href="https://github.com/Ranash12P/bookclub" target="_blank" rel="noopener noreferrer">https://github.com/Ranash12P/bookclub</a></p>
      </div>

      <div className={styles.project}>
        <h3>Message Encryption System</h3>
        <p>Designed a secure system for encrypting messages using a combination of SALSA20, RSA, and encryption algorithms to ensure data confidentiality and integrity.</p>
      </div>

      <div className={styles.project}>
        <h3>Restaurant and Shell Menu Programming & ADT Programming</h3>
        <p>Programmed a user-friendly shell menu interface for a restaurant, facilitating order management and streamlining operations
           Designed and implemented a restaurant management system leveraging ADT and file storage.</p>
      </div>

      <div className={styles.project}>
        <h3>Udemy Courses</h3>
        <p>Self-learning courses to enrich my knowledge in a variety of subjects such as Excel, Power BI, and Python.</p>
      </div>
      {/* Add more projects as needed */}
    </div>
  </section>
);

export default Projects;
