import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
        <h2>pasali</h2>
      <h1>Organize your Wedding</h1>
      </section>
    </div>
  );
};

export default Header;

