import styles from './index.module.scss';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // SCSS Module
import cn from 'classnames';

import { XMobileMenu } from '@/src/components/XMobileMenu';
import { XImage } from '@/src/components/XImage';

import { XContainer } from '../../components/XContainer';
import { XButton } from '../../components/XButton';
import { navigationLinks } from '@/src/config/nav';
import { useRouter } from 'next/router';

export default function XHeader() {
  const [scrollHeight, setScrollHeight] = useState(false);
  const { pathname } = useRouter();

  console.log(pathname, 'router');

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
            {/* <Link href="/"> */}
            <XImage src="/assets/mq.png" width={100} height={60} alt="Logo" />
            {/* Moment-QR */}
            {/* </Link> */}
          </div>

          <nav className={styles.nav}>
            <ul>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={cn(
                      styles.primaryLink,
                      pathname === link.href ? styles.secondaryLink : ''
                    )}
                    href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.actions}>
          <Link href={'/login'}>
            <XButton color="outline-secondary">Giriş Yap</XButton>
          </Link>
          <Link href={'/register'}>
            <XButton color="outline-secondary">Kayıt Ol</XButton>
          </Link>
        </div>

        <div className={styles.hamburger}>
          <XMobileMenu />
        </div>
      </XContainer>
    </header>
  );
}
