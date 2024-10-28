import styles from './index.module.scss';

import { XContainer } from '@/src/components/XContainer';

import AppLayout from '@/src/layouts/AppLayout';

export default function SharingPage() {
  return (
    <AppLayout>
      <div className={styles.bg}>
        <XContainer>
          <div className={styles.manuelContainer}>
            <div className={styles.header}>
              <div className={styles.user}></div>
              <div className={styles.top}>
                <div className={styles.packageStatus}>
                  <div className={styles.package}>Free</div>
                </div>
                <div className={styles.settings}></div>
              </div>
              <div className={styles.bottom}></div>
            </div>
            <div className={styles.body}></div>
            <div className={styles.footer}></div>
          </div>
        </XContainer>
      </div>
    </AppLayout>
  );
}
