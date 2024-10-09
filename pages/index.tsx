import styles from './index.module.scss';

import XSection from '@/src/components/XSection';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XBanner from '@/src/layouts/XBanner';

export default function HomePage() {
  return (
    <AppLayout>
      <XHeader />
      <XBanner />
      <XSection
        content={<SectionContent />}
        image="/assets/images.png"
        label="Lorem Ipsum"
        bg="light"
      />
    </AppLayout>
  );
}

function SectionContent() {
  return (
    <div className={styles.sectionDetail}>
      <div className={styles.box}>
        <strong>Audit the current software program</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.box}>
        <strong>Implement new Software system</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.box}>
        <strong>Test new software</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
