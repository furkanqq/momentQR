import styles from './index.module.scss';

import { IconDownload } from '@/src/assets/IconDownload';
import { IconSetting } from '@/src/assets/IconSetting';
import { IconCamera } from '@/src/assets/IconCamera';
import { IconInvite } from '@/src/assets/IconInvite';
import { IconLeft } from '@/src/assets/IconLeft';

import { XContainer } from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';

import AppLayout from '@/src/layouts/AppLayout';
import { useState } from 'react';
import Link from 'next/link';

export default function SharingPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos((prevPhotos) => [...prevPhotos, ...imageUrls]);
    }
  };

  const downloadPhoto = () => {
    if (viewPhoto) {
      const link = document.createElement('a');
      link.href = viewPhoto;
      link.download = `photo-${Date.now()}.jpg`;
      link.click();
    }
  };

  return (
    <AppLayout>
      <div className={styles.bg}>
        {viewPhoto && viewPhoto.length > 0 && (
          <div className={styles.modal}>
            <div onClick={() => setViewPhoto(null)} className={styles.back}>
              <IconLeft />
            </div>
            <div className={styles.download} onClick={downloadPhoto}>
              <IconDownload />
            </div>
            <div className={styles.modalContent}>
              <XImage alt="View Photo" src={viewPhoto} fill />
            </div>
          </div>
        )}
        <XContainer>
          <div className={styles.manuelContainer}>
            <div className={styles.header}>
              <div></div>
              <div className={styles.middlePart}>
                <div className={styles.logo}>
                  <Link href="/">photoBox</Link>
                </div>
                <div className={styles.user}>
                  <div className={styles.avatar}>
                    <XImage
                      src="/assets/user.png"
                      alt="Avatar"
                      height={120}
                      width={120}
                    />
                    <div className={styles.update}>
                      <IconCamera height={32} width={32} />
                    </div>
                  </div>
                  <div className={styles.username}>John Doe & Jane Smith</div>
                </div>
              </div>
              <div className={styles.settings}>
                <div className={styles.icon}>
                  <IconSetting />
                </div>
                <div className={styles.invite}>
                  <div className={styles.icon}>
                    <IconInvite />
                  </div>
                  <div className={styles.text}>Invite guests</div>
                </div>
              </div>
            </div>
            <div className={styles.filter}></div>

            <div className={styles.body}>
              <div className={styles.imageHolder}>
                <label className={styles.addPhoto}>
                  <IconCamera height={32} width={32} />
                  <span>Add Photo</span>
                  <input
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept="image/*,video/*"
                    type="file"
                    multiple
                  />
                </label>

                {photos.map((photo, index) => (
                  <div
                    onClick={() => setViewPhoto(photo)}
                    className={styles.photo}
                    key={index}>
                    <XImage alt={`Photo ${index + 1}`} src={photo} fill />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </XContainer>
        {/* <div className={styles.footer}></div> */}
      </div>
    </AppLayout>
  );
}
