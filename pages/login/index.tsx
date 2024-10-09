import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import XInput from '@/src/components/XInput';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginHead}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
            photoBox
          </Link>
        </div>
        <div className={styles.image}>
          <XImage
            src="/assets/login.png"
            height={220}
            alt="Login"
            width={220}
          />
        </div>
      </div>
      <div className={styles.loginFoot}>
        <div className={styles.content}>
          <div className={styles.text}>
            Make Your <span>Memories</span>, {"Everyone's"}{' '}
            <span>Memories</span>!
          </div>
          <div className={styles.inputs}>
            <XInput placeholder="E-posta" searchEnabled={false} mode="dark" />
            <XInput placeholder="Password" searchEnabled={false} mode="dark" />
            <Link href={'/'}>Forgot your password?</Link>
          </div>
          <div className={styles.nav}>
            <XButton color="outline-primary">Sign In</XButton>
            <Link href={'/'}>{"Don't"} have an account yet? Sign up now.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
