import styles from './index.module.scss';

import { XContainer } from '../XContainer';
import { XImage } from '../XImage';

export default function SectionBoxes() {
  return (
    <XContainer>
      <div className={styles.sectionBoxes}>
        <h1>Öne Çıkan Özellikler</h1>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <span className={styles.img}>
              <XImage
                src="/assets/photos.svg"
                height={100}
                width={200}
                alt="1"
              />
            </span>
            <hr />

            <span>Fotoğraf ve Video Ekleme</span>
          </div>
          <div className={styles.box}>
            <span className={styles.img}>
              {' '}
              <XImage
                src="/assets/message.svg"
                height={100}
                width={200}
                alt="1"
              />
            </span>
            <hr />

            <span>Anı Mesajı Bırakma</span>
          </div>
          <div className={styles.box}>
            <span className={styles.img}>
              {' '}
              <XImage
                src="/assets/downloadphoto.svg"
                height={100}
                width={200}
                alt="1"
              />
            </span>
            <hr />
            <span>Fotoğraf ve Video İndirme</span>
          </div>
          <div className={styles.box}>
            <span className={styles.img}>
              {' '}
              <XImage src="/assets/edit.svg" height={100} width={200} alt="1" />
            </span>
            <hr />
            <span>Etkinlik Kişiselleştirme</span>
          </div>
          <div className={styles.box}>
            <span className={styles.img}>
              {' '}
              <XImage
                src="/assets/qrCode.svg"
                height={100}
                width={200}
                alt="1"
              />
            </span>
            <hr />

            <span>QR Kod + Link</span>
          </div>
          <div className={styles.box}>
            <span className={styles.img}>
              {' '}
              <XImage
                src="/assets/limitless.svg"
                height={100}
                width={200}
                alt="1"
              />
            </span>
            <hr />

            <span>Sınırsız Kullanıcı</span>
          </div>
        </div>
      </div>
    </XContainer>
  );
}
