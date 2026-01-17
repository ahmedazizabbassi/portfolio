import React from 'react';
import styles from '../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Built with Love &#10084; | Aziz &copy; {new Date().getFullYear()}
    </footer>
  );
}
