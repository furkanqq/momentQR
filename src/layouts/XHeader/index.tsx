import styles from './index.module.scss';

import Link from 'next/link';
import React from 'react'; // SCSS Module
import { XContainer } from '../../components/XContainer';
import { XButton } from '../../components/XButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <XContainer className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
            photoBox
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/how-to-use">How To Use?</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/areas-of-use">Areas Of Use</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <XButton color="primary">Login</XButton>
          <XButton color="outline-primary">QR</XButton>
        </div>
      </XContainer>
    </header>
  );
}
