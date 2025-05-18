import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <XImage
        src="/assets/404.png"
        alt="404 Not Found"
        height={200}
        width={600}
      />
      <h1>Oops! Kaybolmuş gibi görünüyorsun.</h1>
      <Link href="/">
        <XButton color="light">Ana Sayfa</XButton>
      </Link>
    </div>
  );
}
