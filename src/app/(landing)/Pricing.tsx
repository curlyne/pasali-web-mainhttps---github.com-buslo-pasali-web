import React from 'react';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
      <h2>Pricing? Its simple!</h2>
      <h1>PHP 5,490 one-time payment*</h1>
      <h3>Yes, that includes all features above. </h3>
      <p>
        * Maximum of 300 guests and for personal use. For bespoke, institutional, or large-scale events, contact us!
      </p>
      </section>
    </div>
  );
};

export default Pricing;