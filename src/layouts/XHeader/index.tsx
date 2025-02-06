import styles from './index.module.scss';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // SCSS Module
import cn from 'classnames';

import { XContainer } from '../../components/XContainer';
import { XButton } from '../../components/XButton';

export default function Header() {
  const [scrollHeight, setScrollHeight] = useState(false);

  useEffect(() => {
    const getHeight = () => {
      setScrollHeight(window.scrollY > 50);
    };

    window.addEventListener('scroll', getHeight);

    return () => window.removeEventListener('scroll', getHeight);
  }, []);
  return (
    <header className={cn(scrollHeight ? styles.headerMove : styles.header)}>
      <XContainer className={styles.container}>
        <div className={styles.logoNav}>
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
        </div>

        <div className={styles.actions}>
          <Link href={'/login'}>
            <XButton color="outline-secondary">Login</XButton>
          </Link>
          <Link href={'/register'}>
            <XButton color="outline-secondary">Register</XButton>
          </Link>
        </div>
      </XContainer>
    </header>
  );
}
