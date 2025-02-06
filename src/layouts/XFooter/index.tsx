import styles from './index.module.scss';
import cn from 'classnames';

import { XContainer } from '@/src/components/XContainer';

import Link from 'next/link';

export default function XFooter({ bg }: { bg: 'light' | 'dark' }) {
  return (
    <footer className={cn(bg !== 'dark' ? styles.footer : styles.darkFooter)}>
      <XContainer className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
            photoBox
          </Link>
        </div>
        <div className={styles.part}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </XContainer>
      <div className={styles.footerFooter}>
        <XContainer className={styles.footerContainer}>
          <span>© 2023 murkiSoft. All rights reserved.</span>
          <div className={styles.circleList}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </XContainer>
      </div>
    </footer>
  );
}
