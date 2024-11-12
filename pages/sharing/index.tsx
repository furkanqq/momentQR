import styles from './index.module.scss';

import { IconSetting } from '@/src/assets/IconSetting';
import { IconCamera } from '@/src/assets/IconCamera';
import { IconInvite } from '@/src/assets/IconInvite';

import { XContainer } from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';

import AppLayout from '@/src/layouts/AppLayout';
import Link from 'next/link';

export default function SharingPage() {
  return (
    <AppLayout>
      <div className={styles.bg}>
        <XContainer>
          <div className={styles.manuelContainer}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <Link href="/">
                  {/* <XImage src="/assets/logo.png" alt="Logo" width={220} height={80} /> */}
                  photoBox
                </Link>
              </div>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <XImage
                    src="/assets/user.png"
                    alt="Avatar"
                    height={120}
                    width={120}
                  />
                  <div className={styles.update}>
                    <IconCamera height={32} width={32} />
                  </div>
                </div>
                <div className={styles.username}>Furkan Ilhan</div>
              </div>
              <div className={styles.settings}>
                <div className={styles.icon}>
                  <IconSetting />
                </div>
                <div className={styles.invite}>
                  <div className={styles.icon}>
                    <IconInvite />
                  </div>
                  <div className={styles.text}>Invite guests</div>
                </div>
              </div>
            </div>
            <div className={styles.body}></div>
            <div className={styles.footer}></div>
          </div>
        </XContainer>
      </div>
    </AppLayout>
  );
}
