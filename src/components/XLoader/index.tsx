import styles from './index.module.scss';

import { XImage } from '../XImage';
import React from 'react';

export default function XLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>
      <div className={styles.content}>
        <XImage
          src="/assets/qr.gif"
          alt="Açıklama"
          height={300}
          width={300}
          unoptimized
        />
        <div className={styles.text}>Scanning</div>
      </div>
    </div>
  );
}
