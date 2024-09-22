import styles from './index.module.scss';

import Link from 'next/link';
import React from 'react'; // SCSS Module
import cn from 'classnames';

import { XContainer } from '../../components/XContainer';
import { XButton } from '../../components/XButton';

export default function Header({ bg = 'dark' }: { bg: 'light' | 'dark' }) {
  return (
    <header className={cn(bg === 'dark' ? styles.header : styles.headerLight)}>
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
          <Link href={'/login'}>
            <XButton color="primary">Login</XButton>
          </Link>
          <Link href={'/register'}>
            <XButton color="outline-primary">Register</XButton>
          </Link>
        </div>
      </XContainer>
    </header>
  );
}
