import styles from './index.module.scss';
import cn from 'classnames';

import { IconInstagram } from '@/src/assets/IconInstagram';
import { IconFacebook } from '@/src/assets/IconFacebook';
import { IconYoutube } from '@/src/assets/IconYoutube';

import { XContainer } from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';

import Link from 'next/link';

export default function XFooter({ bg }: { bg: 'light' | 'dark' }) {
  return (
    <footer className={cn(bg !== 'dark' ? styles.footer : styles.darkFooter)}>
      {bg === 'light' && <div className={styles.noise}></div>}
      <XContainer className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <XImage src="/assets/mqr.png" height={220} width={260} alt="Logo" />
            {/* Moment-QR */}
          </Link>
        </div>
        <div className={styles.part}>
          <div>
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li>
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/contact">İletişim</Link>
              </li>
              <li>
                <Link href="/how-to-use">Nasıl Kullanılır?</Link>
              </li>
              <li>
                <Link href="/pricing">Fiyatlandırma</Link>
              </li>
              <li>
                <Link href="/test-environment">Test Ortamı</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Bilgilendirme</h4>
            <ul>
              <li>
                <Link href="/privacy-policy">Gizlilik Politikası</Link>
              </li>
              <li>
                <Link href="/term-of-use">Şartlar ve Koşullar</Link>
              </li>
              <li>
                <Link href="/selling-contract">Mesafeli Satış Sözleşmesi</Link>
              </li>
              <li>
                <Link href="/contact">Destek</Link>
              </li>
              <li>
                <Link href="/#faq">S.S.S</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>İletişim</h4>
            <ul>
              <li>
                <Link href="#">momentiletisim@gmail.com</Link>
              </li>
              <div className={styles.circleList}>
                <div>
                  <IconInstagram height={18} width={18} />
                </div>
                <div>
                  <IconYoutube height={18} width={18} />
                </div>
                <div>
                  <IconFacebook height={18} width={18} />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </XContainer>
      <div className={styles.footerFooter}>
        <XContainer className={styles.footerContainer}>
          <span>© 2023 murkiSoft. All rights reserved.</span>
        </XContainer>
      </div>
    </footer>
  );
}
