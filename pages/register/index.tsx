import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import XInput from '@/src/components/XInput';

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
            photoBox
          </Link>
        </div>
        <div className={styles.info}>
          <p>We need your email address to complete the setup of your event.</p>
          <div className={styles.warning}>
            (Remember that you can only upload 10 images in the free section!)
          </div>
        </div>

        <XInput placeholder="E-posta" searchEnabled={false} mode="light" />
        <Link href={'/'}>
          <XButton color="primary">Continue</XButton>
        </Link>
        <p className={styles.privacy}>
          By joining, you agree to our terms and conditions and{' '}
          <Link href={'/'}>privacy policy</Link>. If you would like to learn
          more about <Link href={'/'}>photoBox</Link>, visit our legal notice.
          By signing up, you also agree to receive marketing emails from us. You
          can revoke this consent at any time.
        </p>
      </div>
    </div>
  );
}
