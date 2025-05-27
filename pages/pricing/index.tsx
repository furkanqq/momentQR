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
          'Misafirleriniz QR kodunu okutarak fotoğraf, video ve anı notlarını size özel oluşturulmuş albüm sayesinde kolayca paylaşabilir. Anılarınızı toplamak ve paylaşmak hiç bu kadar eğlenceli olmamıştı. Hemen başlayın ve her anı ölümsüzleştirin!'
        }
        image="/assets/images.png"
        title={'Fiyatlandırma'}
        buttonTitle={''}
        button={false}
        bg="light"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <XSection
        content={
          <div className={styles.price}>
            <div className={styles.priceContent}>
              <h1>Standart Paket</h1>
              <ul>
                <li>
                  <span>✓</span> Lorem Ipsum has been the industrys standard
                  dummy text
                </li>
                <li>
                  <span>✓</span> Lorem Ipsum has been the industrys standard
                  dummy text
                </li>
                <li>
                  <span>✓</span> Lorem Ipsum has been the industrys standard
                  dummy text
                </li>
                <li>
                  <span>✓</span> Lorem Ipsum has been the industrys standard
                  dummy text
                </li>
                <li>
                  <span>✓</span> Lorem Ipsum has been the industrys standard
                  dummy text
                </li>
              </ul>
              <Link href={'/profile'}>
                <XButton color="light">
                  <span className={styles.type}>₺</span> 4500
                </XButton>
              </Link>
            </div>
          </div>
        }
        image="/assets/pricingPlan.svg"
        reverse={false}
        // label="Lorem Ipsum"
        bg="dark"
      />

      <XFooter bg="dark" />
    </AppLayout>
  );
}
