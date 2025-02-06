import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import { XInput } from '@/src/components/XInput';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>
      <div className={styles.loginHead}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
            photoBox
          </Link>
        </div>
        <div className={styles.image}>
          <XImage
            src="/assets/images.png"
            height={200}
            alt="Login"
            width={220}
          />
        </div>
      </div>
      <div className={styles.loginFoot}>
        <div className={styles.content}>
          <div className={styles.text}>
            Make Your <span>Memories</span>, {'Everyones'} <span>Memories</span>
            !
          </div>
          <div className={styles.inputs}>
            <XInput placeholder="E-posta" />
            <XInput placeholder="Password" type="password" />
            <Link href={'/'}>Forgot your password?</Link>
          </div>
          <div className={styles.nav}>
            <XButton color="blur">Sign In</XButton>
            <Link href={'/register'}>
              {'Dont'} have an account yet? Sign up now.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
