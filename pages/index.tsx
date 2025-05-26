import styles from './index.module.scss';

import SectionContentTwo from '@/src/components/XSectionContentTwo';
import SectionContentOne from '@/src/components/XSectionContentOne';
import SectionBoxes from '@/src/components/XSectionBoxes';
import { XContainer } from '@/src/components/XContainer';
import XSection from '@/src/components/XSection';
import XFAQ from '@/src/components/XFAQ';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';
import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XBanner from '@/src/layouts/XBanner';
import XFooter from '@/src/layouts/XFooter';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';

export default function HomePage() {
  const contents = [
    {
      content:
        'Düğün, nişan gibi etkinliklerinizde en güzel anılarını misafirlerinizden toplamak için Moment-QR kullanın. Misafirleriniz, QR kodu tarayarak düğün boyunca çektikleri fotoğraf ve videoları kolayca paylaşabilir.',
      title: 'Düğün Etkinlikleri'
    },
    {
      content:
        'Fuarlarda standınıza gelen ziyaretçilerin deneyimlerini kaydedin. Fuarın tüm önemli anlarını ve standınızdaki etkileşimleri tek bir galeride toplayabilirsiniz.',
      title: 'Fuar'
    },
    {
      content:
        'Festival boyunca katılımcılarınızın çektikleri fotoğraf ve videoları kolayca toplayın.',
      title: 'Festival'
    },
    {
      content: 'Moment-QR ile doğum günü partinizin tüm anılarını toplayın.',
      title: 'Doğum Günü'
    }
  ];
  return (
    <AppLayout>
      <XHeader />
      <XBanner />
      <XSection
        content={<SectionContentOne contents={contents} />}
        image="/assets/areasofuse.svg"
        label="Kullanım Alanları"
        reverse={true}
        bg="dark"
      />
      <XSection
        content={
          <SectionContentTwo
            p="Her şey sizin için düşünüldü!
            Moment-QR, uygulama gerektirmeden kolayca kullanılabilen bir platformdur. Web sitemizden satın aldığınız paketinizi kolayca masaüstü veya mobil cihazınızdan yönetebilirsiniz. Misafirleriniz veya etkinlik katılımcılarınız masaların üzerinde bulunan QR kodu okutup kolayca fotoğraf, video ve anı ile ilgili notunu bırakabilir."
            h1="Misafir Kaydı Yok!"
            button="Hemen Satın Al"
            href="/"
          />
        }
        image="/assets/noregister.svg"
        reverse={false}
        // label="Lorem Ipsum"
        bg="light"
      />
      <div className={styles.swiper}>
        <XContainer>
          <h1>Nasıl Çalışır ?</h1>
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={'mySwiper'}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            cssMode={true}>
            <SwiperSlide>
              {' '}
              <XSection
                content={
                  <SectionContentTwo
                    p="Misafirleriniz etkinlik sırasında fotoğraf ve video çekerek özel anları yakalar.
                  Bu anlar, etkinliğinizin en güzel ve samimi anılarını oluşturur."
                    className={styles.sectionTwoH1}
                    h1="1"
                  />
                }
                image="/assets/stepOne.svg"
                reverse={false}
                // label="Lorem Ipsum"
                bg="dark"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <XSection
                content={
                  <SectionContentTwo
                    p="Etkinlik alanında veya masalarda bulunan QR kodunu akıllı telefonlarıyla taratırlar.
                  Bu kod, onları doğrudan etkinliğinizin Moment-QR albüm sayfasına yönlendirir."
                    className={styles.sectionTwoH1}
                    h1="2"
                  />
                }
                image="/assets/stepTwo.svg"
                reverse={true}
                // label="Lorem Ipsum"
                bg="dark"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <XSection
                content={
                  <SectionContentTwo
                    p="QR kodunu tarattıktan sonra açılan yükleme ekranında, misafirleriniz adını,
                  soyadını ve etkinlikle ilgili kısa bir anı notu yazarlar."
                    className={styles.sectionTwoH1}
                    h1="3"
                  />
                }
                image="/assets/stepThree.svg"
                reverse={false}
                // label="Lorem Ipsum"
                bg="dark"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <XSection
                content={
                  <SectionContentTwo
                    p="Misafirleriniz, çekmiş oldukları fotoğraf ve videoları kolayca yükler."
                    className={styles.sectionTwoH1}
                    h1="4"
                  />
                }
                image="/assets/stepFour.svg"
                reverse={true}
                // label="Lorem Ipsum"
                bg="dark"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <XSection
                content={
                  <SectionContentTwo
                    p="Artık bu albümü misafirlerinizle birlikte görüntüleyebilir ve etkinliğinizin
                  tüm güzelliklerinin tadını çıkarabilirsiniz!"
                    className={styles.sectionTwoH1}
                    h1="5"
                  />
                }
                image="/assets/stepFive.svg"
                reverse={false}
                // label="Lorem Ipsum"
                bg="dark"
              />
            </SwiperSlide>
          </Swiper>
        </XContainer>
      </div>
      <XSection
        content={
          <SectionContentTwo
            p="Moment-QR, etkinliğinizin en özel anılarını misafirlerinizin gözünden kolayca toplamanızı sağlayan yenilikçi bir fotoğraf ve video paylaşım platformudur. Etkinliğinize özel olarak oluşturulan QR kod sayesinde, misafirleriniz bu QR kodu okutarak fotoğraf, video ve anı notlarını anında paylaşabilirler. Bu sayede, etkinliğinizin her anını farklı bakış açılarıyla zenginleştirir ve tüm güzel anıları tek bir yerde toplayabilirsiniz."
            h1="Etkinliğinizin Her Anını Yakalayın!"
            button="Hemen Satın Al"
            href="/"
          />
        }
        image="/assets/everymoment.svg"
        reverse={true}
        // label="Lorem Ipsum"
        bg="dark"
      />
      {/* <XSection
        content={<SectionBoxes />}
        // image="/assets/images.png"
        reverse={false}
        // label="Lorem Ipsum"
        bg="light"
      /> */}
      <SectionBoxes />
      <XSection
        image="/assets/faq.svg"
        content={<XFAQ />}
        reverse={true}
        // label="Lorem Ipsum"
        bg="light"
      />

      <XFooter bg="dark" />
    </AppLayout>
  );
}
