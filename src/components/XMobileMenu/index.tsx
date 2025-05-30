import styles from './index.module.scss';

import { IconHamburger } from '@/src/assets/IconHamburger';
import { IconClose } from '@/src/assets/IconClose';

import React, { useEffect, useState, useRef } from 'react';
import { navigationLinks } from '@/src/config/nav';
import { XButton } from '../XButton';
import Link from 'next/link';

export const XMobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className={styles.hamburger}>
        <IconHamburger height={32} width={32} />
      </button>

      <div className={`${styles.menuOverlay} ${open ? styles.open : ''}`}>
        <div className={styles.menuContent} ref={menuRef}>
          <button className={styles.closeButton} onClick={() => setOpen(false)}>
            <IconClose height={28} width={28} />
          </button>
          <nav className={styles.nav}>
            <ul>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href={'/pricing'}>Fiyatlandırma</Link>
              </li>
            </ul>
            <div className={styles.actions}>
              <Link href={'/login'}>
                <XButton color="outline-secondary">Giriş Yap</XButton>
              </Link>
              <Link href={'/register'}>
                <XButton color="outline-secondary">Kayıt Ol</XButton>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
