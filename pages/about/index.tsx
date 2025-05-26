import styles from './index.module.scss';

import SectionContentOne from '@/src/components/XSectionContentOne';
import { XImage } from '@/src/components/XImage';
import XSection from '@/src/components/XSection';
import XBanner from '@/src/components/XBanner';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XFooter from '@/src/layouts/XFooter';

export default function AboutPage() {
  const contents = [
    {
      content:
        'Etkinlik planlandığında, size özel bir QR kodu sağlıyoruz. Bu QR kodunu etkinliğinizin her yerine yayabilirsiniz. Misafirleriniz bu QR kodu tarayarak çektikleri fotoğrafları ve videoları platformumuza yükleyebilirler. Ayrıca, her bir içerik için anı notu bırakabilirler. Böylece, etkinlik sahibi ve diğer misafirler bu notları görebilir.',
      title: 'Nasıl Çalışıyoruz?'
    },
    {
      content:
        'Moment-QR, etkinlik sahiplerine özel galeri oluşturma ve yönetme imkanı sunar. Platformumuz üzerinden galeriyi görüntüleyebilir, içerikleri indirebilir ve istediğiniz gibi paylaşabilirsiniz.',
      title: 'Etkinlik Sahibi İçin Kolaylık'
    },
    {
      content:
        'Moment-QR olarak vizyonumuz, her etkinlikte yaşanan özel anıları yakalamak, paylaşmak ve ölümsüzleştirmek için teknolojiyi en etkili şekilde kullanmaktır.',
      title: 'Vizyon'
    },
    {
      content:
        'Misyonumuz, etkinlik sahiplerine özel olarak tasarlanmış bir platform sağlayarak, her etkinlik için özel anıların toplanmasını ve yönetilmesini kolaylaştırmaktır.',
      title: 'Misyon'
    }
  ];

  return (
    <AppLayout>
      <XHeader />
      <XBanner
        desc={
          'Moment-QR, etkinlikleriniz için özel olarak tasarlanmış bir fotoğraf ve video paylaşım platformudur. Her etkinlik için özel QR kodları oluşturarak, misafirlerinizin çektiği her anı hızlıca ve kolayca toplamanızı sağlıyoruz. Etkinlik boyunca ve sonrasında, bu QR kodları kullanarak misafirlerinizin fotoğraflarını ve videolarını tek bir yerde birleştirebilirsiniz.'
        }
        image="/assets/aboutP.svg"
        title={'Bizi tanıyın'}
        buttonTitle={''}
        button={false}
        bg="light"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <XSection
        content={<SectionContentOne contents={contents} />}
        image="/assets/aboutusP.svg"
        label="Biz Kimiz?"
        reverse={true}
        bg="dark"
      />

      <XFooter bg="dark" />
    </AppLayout>
  );
}
