import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import XSection from '@/src/components/XSection';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XBanner from '@/src/layouts/XBanner';
import XFooter from '@/src/layouts/XFooter';
import Link from 'next/link';

export default function HomePage() {
  return (
    <AppLayout>
      <XHeader bg="dark" />
      <XBanner />
      <XSection
        content={<SectionContent />}
        image="/assets/images.png"
        label="Lorem Ipsum"
        reverse={true}
        bg="light"
      />
      <XSection
        content={<SectionContentTwo />}
        image="/assets/login.png"
        reverse={false}
        // label="Lorem Ipsum"
        bg="dark"
      />
      <XSection
        content={<SectionContentTwo />}
        image="/assets/login.png"
        reverse={true}
        // label="Lorem Ipsum"
        bg="light"
      />
      <XSection
        content={<SectionContent />}
        image="/assets/images.png"
        reverse={false}
        // label="Lorem Ipsum"
        bg="dark"
      />
      <XFooter bg="dark" />
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

function SectionContentTwo() {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.content}>
        <h1>
          Test <span>New</span> Software
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor <span>incididunt</span> ut labore et dolore magna
          aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut <span>labore</span> et dolore magna
          aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>
      <Link href={'/'}>
        <XButton color="primary">Continue</XButton>
      </Link>
    </div>
  );
}
