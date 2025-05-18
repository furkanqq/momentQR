import styles from './index.module.scss';

import SectionContentTwo from '@/src/components/XSectionContentTwo';
import { XImage } from '@/src/components/XImage';
import XSection from '@/src/components/XSection';
import XBanner from '@/src/components/XBanner';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';
import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XFooter from '@/src/layouts/XFooter';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';

export default function HowToUsePage() {
  return (
    <AppLayout>
      <XHeader />
      <XBanner
        desc={'Hadi sadece 5 adımda bu süreci birlikte keşfedelim!'}
        title={'Nasıl Kullanılır?'}
        image="/assets/images.png"
        buttonTitle={''}
        button={false}
        bg="dark"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <div className={styles.swiper}>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
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
      </div>

      <XFooter bg="light" />
    </AppLayout>
  );
}
