import styles from './index.module.scss';

import { IconDownload } from '@/src/assets/IconDownload';
import { IconSettings } from '@/src/assets/IconSettings';
import { IconCamera } from '@/src/assets/IconCamera';
import { IconClose } from '@/src/assets/IconClose';
import { IconLeft } from '@/src/assets/IconLeft';
import { IconQR } from '@/src/assets/IconQR';

import { XContainer } from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import { XInput } from '@/src/components/XInput';

import AppLayout from '@/src/layouts/AppLayout';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface FirstInfo {
  partnerName: string;
  mainPhoto: string;
  name: string;
}

export default function SharingPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);
  const [firstModal, setFirstModal] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [firstInfo, setFirstInfo] = useState<FirstInfo>({
    partnerName: '',
    mainPhoto: '',
    name: ''
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos((prevPhotos) => [...prevPhotos, ...imageUrls]);
    }
  };
  const handleFirstInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFirstInfo((prev) => ({
        ...prev,
        mainPhoto: imageUrl
      }));
    }
  };
  const handleFirstInfoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstInfo.name || !firstInfo.partnerName || !firstInfo.mainPhoto) {
      return;
    }
    setFirstModal(false);
  };

  const downloadPhoto = () => {
    if (viewPhoto) {
      const link = document.createElement('a');
      link.href = viewPhoto;
      link.download = `photo-${Date.now()}.jpg`;
      link.click();
    }
  };

  const deletePhoto = () => {
    if (viewPhoto) {
      const newPhotos = photos.filter((photo) => photo !== viewPhoto);
      setPhotos(newPhotos);
      setViewPhoto(null);
      setDeleteModal(false);
    }
  };

  useEffect(() => {
    if (!viewPhoto) return;

    const handlePopState = () => {
      setViewPhoto(null);
      // pushState ile tekrar aynı konumda kalmayı sağlarız
      window.history.pushState(null, '', window.location.href);
    };

    // Modal açıldığında sahte bir state ekle
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Modal kapanırken bir adım geri al (gerekirse)
      window.history.back();
    };
  }, [viewPhoto]);

  useEffect(() => {
    if (!viewPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setViewPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewPhoto]);

  return (
    <AppLayout>
      <div className={styles.bg}>
        {firstModal && (
          <div className={styles.firstModal}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <XImage
                  src="/assets/mqr.png"
                  height={200}
                  width={200}
                  alt="Logo"
                />
                {/* <h1>Hoş Geldiniz!</h1> */}
              </div>
              <form onSubmit={(e) => handleFirstInfoForm(e)}>
                <div className={styles.names}>
                  <XInput
                    onChange={(value) =>
                      setFirstInfo({ ...firstInfo, name: value })
                    }
                    className={styles.input}
                    value={firstInfo.name}
                    placeholder="Adınız"
                    label="Adınız"
                    type="text"
                  />
                  <XInput
                    onChange={(value) =>
                      setFirstInfo({ ...firstInfo, partnerName: value })
                    }
                    placeholder="Partnerinizin Adı"
                    value={firstInfo.partnerName}
                    label="Partnerinizin Adı"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.imageHolder}>
                  <label className={styles.addPhoto}>
                    <IconCamera height={32} width={32} />
                    <span>Fotoğrafınız</span>
                    <input
                      style={{ display: 'none' }}
                      onChange={handleFirstInfo}
                      accept="image/*,video/*"
                      type="file"
                    />
                  </label>

                  {firstInfo.mainPhoto && (
                    <div className={styles.photo}>
                      <XImage
                        src={firstInfo.mainPhoto}
                        alt={'mainPhoto'}
                        fill
                      />
                    </div>
                  )}
                </div>

                <div>
                  <XButton
                    className={styles.button}
                    color="outline-secondary"
                    type="submit"
                    fullWidth>
                    Devam Et
                  </XButton>

                  <div className={styles.miniText}>
                    Fotoğrafınızı İstediğiniz Zaman Değiştirmek Mümkündür.
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {deleteModal && (
          <div className={styles.deleteModal}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <XImage
                  src="/assets/mqr.png"
                  height={200}
                  width={200}
                  alt="Logo"
                />
              </div>
              <div className={styles.sure}>
                <h1>Silmek İstediğinize Emin Misiniz?</h1>
                <p>
                  Bu işlem geri alınamaz ve fotoğrafınız kalıcı olarak
                  silinecektir.
                </p>
                <div className={styles.buttons}>
                  <XButton
                    onClick={() => setDeleteModal(false)}
                    className={styles.button}
                    color="outline-secondary"
                    fullWidth>
                    İptal
                  </XButton>
                  <XButton
                    className={styles.button}
                    onClick={deletePhoto}
                    color="blur"
                    fullWidth>
                    Sil
                  </XButton>
                </div>
              </div>
            </div>
          </div>
        )}
        {viewPhoto && viewPhoto.length > 0 && (
          <div className={styles.modal}>
            <div onClick={() => setViewPhoto(null)} className={styles.back}>
              <IconLeft />
            </div>
            <div className={styles.download} onClick={downloadPhoto}>
              <IconDownload />
            </div>
            <div onClick={() => setDeleteModal(true)} className={styles.close}>
              <IconClose />
            </div>
            <div className={styles.modalContent}>
              <XImage alt="View Photo" src={viewPhoto} fill />
            </div>
          </div>
        )}
        <XContainer className={styles.container}>
          <div className={styles.header}>
            <div className={styles.main}>
              <div className={styles.logo}>
                <Link href="/">
                  <XImage
                    src="/assets/mq.png"
                    height={60}
                    alt="Logo"
                    width={80}
                  />
                </Link>
              </div>
              <div className={styles.avatar}>
                <XImage
                  src={firstInfo.mainPhoto || '/assets/mqr.png'}
                  alt="Avatar"
                  height={120}
                  width={120}
                />
              </div>
              <div className={styles.username}>
                {firstInfo.name} & {firstInfo.partnerName}
              </div>
            </div>
            <div className={styles.settings}>
              <div className={styles.icon}>
                <IconSettings height={24} width={24} />
              </div>

              <div className={styles.icon}>
                <IconQR height={24} width={24} />
              </div>
            </div>
          </div>
          <div className={styles.filter}></div>

          <div className={styles.body}>
            <div className={styles.imageHolder}>
              <label className={styles.addPhoto}>
                <IconCamera height={32} width={32} />
                <span>+ Ekle</span>
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
        </XContainer>
        {/* <div className={styles.footer}></div> */}
      </div>
    </AppLayout>
  );
}
