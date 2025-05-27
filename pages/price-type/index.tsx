import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XInput } from '@/src/components/XInput';

import AppLayout from '@/src/layouts/AppLayout';
import Link from 'next/link';
import React from 'react';

export default function PriceTypePage() {
  return (
    <AppLayout>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.priceContent}>
            <h1>Standart Paket</h1>
            <ul>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
            </ul>
            <Link href={'/profile'}>
              <XButton color="light">
                <span className={styles.type}>₺</span> 4500
              </XButton>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.codeContent}>
            <h1>Kod ile Ödeme</h1>
            <ul>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
              <li>
                <span>✓</span> Lorem Ipsum has been the industrys standard dummy
                text
              </li>
            </ul>
            <div className={styles.code}>
              <XInput placeholder="Kod" />
              <Link href={'/profile'}>
                <XButton color="outline-primary">Devam Et</XButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
