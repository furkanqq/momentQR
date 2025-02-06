import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

export default function XBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.noise}></div>
        <div className={styles.title}>
          Capture the <span>Moments</span>, Share the <span>Memories</span>!
        </div>
        <p>
          Let us help you create lasting <span>memories</span> on your special
          day with everlasting elegance <span>events</span>.
        </p>
        <XButton color="blur">More Info</XButton>
      </div>
      <div className={styles.image}>
        <XImage
          src="/assets/images.png"
          alt="banner-image"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}
