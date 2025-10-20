import Image from "next/image";
import React from 'react';
import styles from '../page.module.css';


export default function HomePage() {
    return (
      <main className={styles.main}>
        <div className={styles.about}>
          <Image
            src="/my_avatar.jpg"
            alt="my avatar"
            width={200}
            height={200}
            priority
          />
          <div>
            <p className={styles.intro}>Hello, my name is Aziz. I don&apos;t like to share a picture of mine :)</p>
            <h1 className={`${styles.headline} ${styles.headline__1}`}>
              <strong>hacker</strong> & <strong>cyber security researcher</strong>
            </h1>
            <h2 className={`${styles.headline} ${styles.headline__2}`}>
              software developer @&nbsp;<a href="https://softylines.com">softylines</a>
            </h2>
            <h3 className={`${styles.headline} ${styles.headline__3}`}>
              open source contributor @&nbsp;<a href="https://drupal.org">Drupal.</a>
            </h3>
          </div>
        </div>
        <ul className={styles.socialLinks}>
          <li>
            <a href={`https://drupal.org/u/${process.env.DRUPAL_USERNAME}`}>
              <Image src="/social/water-outline.svg" alt="Drupal Logo" width={20} height={20} className={styles.logo} />
            </a>
          </li>
          <li>
            <a href={`https://gitlab.com/${process.env.GITLAB_USERNAME}`}>
              <Image src="/social/logo-gitlab.svg" alt="my working gitlab account" width={20} height={20}className={styles.logo}/>
            </a>
          </li>
          <li>
            <a href={`https://gitlab.softylines.com/${process.env.GITLAB_SOFTYLINES_USERNAME}`}>
              <Image src="/social/logo-gitlab.svg" alt="my working gitlab account" width={20} height={20}className={styles.logo}/>
            </a>
          </li>
          <li>
            <a href={`https://github.com/${process.env.GITHUB_USERNAME}`}>
              <Image src="/social/logo-github.svg" alt="my personal github account" width={20} height={20}className={styles.logo}/>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}>
              <Image src="/social/logo-twitter.svg" alt="my twitter account" width={20} height={20}className={styles.logo}/>
            </a>
          </li>
          <li>
            <a href={`https://linkedin.com/in/${process.env.LINKEDIN_USERNAME}`}>
              <Image src="/social/logo-linkedin.svg" alt="my linkedin account" width={20} height={20} className={styles.logo}/>
            </a>
          </li>
          <li>
            <a href={`https://instagram.com/${process.env.META_USERNAME}`}>
              <Image src="/social/logo-instagram.svg" alt="my instagram account" width={20} height={20} className={styles.logo}/>
            </a>
          </li>
          <li>
            <a href={`https://facebook.com/${process.env.META_USERNAME}`}>
              <Image src="/social/logo-facebook.svg" alt="my facebook account" width={20} height={20} className={styles.logo}/>
            </a>
          </li>
        </ul>
        <footer className={styles.footer}>
          Built with Love 	&#10084; | Aziz &copy; {new Date().getFullYear()}
        </footer>
      </main>
  );
}
