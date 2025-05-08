import styles from './index.module.scss';

import { XImage } from '@/src/components/XImage';
import XSection from '@/src/components/XSection';
import XBanner from '@/src/components/XBanner';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XFooter from '@/src/layouts/XFooter';

export default function HowToUsePage() {
  return (
    <AppLayout>
      <XHeader />
      <XBanner
        desc={
          'We are a team of developers who are passionate about technology.'
        }
        image="/assets/images.png"
        title={'Get to know us'}
        buttonTitle={''}
        button={false}
        bg="dark"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <XSection
        content={<SectionContent />}
        image="/assets/login.png"
        label="Lorem Ipsum"
        reverse={false}
        bg="light"
      />

      <XFooter bg="light" />
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
