import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import XSection from '@/src/components/XSection';
import XBanner from '@/src/components/XBanner';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XFooter from '@/src/layouts/XFooter';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <AppLayout>
      <XHeader />
      <XBanner
        desc={
          'We are a team of developers who are passionate about technology.'
        }
        image="/assets/images.png"
        title={'Bizi tanıyın'}
        buttonTitle={''}
        button={false}
        bg="dark"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <XSection
        content={<SectionContentTwo />}
        image="/assets/login.png"
        reverse={false}
        // label="Lorem Ipsum"
        bg="light"
      />

      <XFooter bg="dark" />
    </AppLayout>
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
