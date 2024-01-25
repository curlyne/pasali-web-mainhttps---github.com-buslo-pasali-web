import React from 'react';
import styles from './features.module.css';

const Features = () => {
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
      <p>A space for your event in the Internet</p>
      <p>Organize guests and see their RSVP</p>
      <p>Announce milestone and blah blah</p>
      <p>Something else I think?</p>
      </section>
    </div>
  );
};

export default Features;