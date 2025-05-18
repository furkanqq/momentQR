import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

import Link from 'next/link';

export default function XBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.hand}></div>
        <div className={styles.noise}></div>
        <div className={styles.title}>
          {/* Capture the <span>Moments</span>, Share the <span>Memories</span>! */}
          <span>Anları</span> Yakalayın, <span>Anıları</span> Paylaşın!
        </div>
        <p>
          <span>Özel gününüzde</span> kalıcı zarafet dolu etkinliklerle kalıcı
          <span> anılar </span>
          yaratmanıza yardımcı olalım.
        </p>
        <Link href={'/about'}>
          <XButton color="blur">Daha Fazla Bilgi</XButton>
        </Link>
      </div>
      <div className={styles.image}>
        <XImage
          src="/assets/images.png"
          alt="banner-image"
          height={400}
          width={400}
          // fill
        />
      </div>
    </div>
  );
}
