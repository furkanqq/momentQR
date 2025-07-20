import styles from './index.module.scss';

import { IconDownload } from '@/src/assets/IconDownload';
import { IconSettings } from '@/src/assets/IconSettings';
import { IconCamera } from '@/src/assets/IconCamera';
import { IconClose } from '@/src/assets/IconClose';
import { IconLeft } from '@/src/assets/IconLeft';
import { IconQR } from '@/src/assets/IconQR';

import { XContainer } from '@/src/components/XContainer';
import { XTabView } from '@/src/components/XTabView';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import { XInput } from '@/src/components/XInput';
import XSwitch from '@/src/components/XSwitch';

import { useEffect, useState, useRef } from 'react';
import AppLayout from '@/src/layouts/AppLayout';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import Link from 'next/link';

interface FirstInfo {
  partnerName: string;
  permission: boolean;
  mainPhoto: string;
  name: string;
}

export default function ProfilePage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [pendingPhotos, setPendingPhotos] = useState<string[]>([]);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);
  const [firstModal, setFirstModal] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [settingsModal, setSettingsModal] = useState<boolean>(false);
  const [qrCodeModal, setQRCodeModal] = useState<boolean>(false);
  const [firstInfo, setFirstInfo] = useState<FirstInfo>({
    permission: false,
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
      if (firstInfo.permission) {
        setPendingPhotos((prevPhotos) => [...prevPhotos, ...imageUrls]);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...imageUrls]);
      }
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

  const permissionTabs = [
    {
      content: (
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
      ),
      title: 'Albüm'
    },
    {
      content: (
        <div className={styles.body}>
          {pendingPhotos.length > 0 ? (
            <>
              <div className={styles.buttons}>
                <XButton
                  onClick={() => {
                    setPhotos([...photos, ...pendingPhotos]);
                    setPendingPhotos([]);
                  }}
                  color="outline-secondary">
                  Tümünü Onayla
                </XButton>
              </div>

              <div className={styles.imageHolder}>
                {pendingPhotos.map((photo, index) => (
                  <div
                    onClick={() => setViewPhoto(photo)}
                    className={styles.photo}
                    key={index}>
                    <XImage alt={`Photo ${index + 1}`} src={photo} fill />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noData}>Fotoğraf Bulunmamaktadır.</div>
          )}
        </div>
      ),
      title: 'Onay Bekleyenler'
    }
  ];

  const tabs = [
    {
      content: (
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
      ),
      title: 'Albüm'
    }
  ];

  return (
    <AppLayout>
      <div className={styles.bg}>
        {firstModal && (
          <FirstModal
            handleFirstInfoForm={handleFirstInfoForm}
            handleFirstInfo={handleFirstInfo}
            setFirstInfo={setFirstInfo}
            firstInfo={firstInfo}
          />
        )}
        {deleteModal && (
          <DeleteModal
            setDeleteModal={setDeleteModal}
            deletePhoto={deletePhoto}
          />
        )}
        {qrCodeModal && (
          <QRCodeModal
            partnerName={firstInfo.partnerName as string}
            yourName={firstInfo.name as string}
            setQRCodeModal={setQRCodeModal}></QRCodeModal>
        )}
        {settingsModal && (
          <SettingsModal
            handleFirstInfoForm={handleFirstInfoForm}
            setSettingsModal={setSettingsModal}
            handleFirstInfo={handleFirstInfo}
            setFirstInfo={setFirstInfo}
            firstInfo={firstInfo}
            settingsModal
          />
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
              Sil
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
              <div
                onClick={() => setSettingsModal(true)}
                className={styles.icon}>
                <IconSettings height={24} width={24} />
              </div>

              <div onClick={() => setQRCodeModal(true)} className={styles.icon}>
                <IconQR height={24} width={24} />
              </div>
            </div>
          </div>
          <div className={styles.filter}>
            <XTabView tabs={firstInfo.permission ? permissionTabs : tabs} />
          </div>
        </XContainer>
        {/* <div className={styles.footer}></div> */}
      </div>
    </AppLayout>
  );
}

const FirstModal: React.FC<{
  handleFirstInfoForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFirstInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFirstInfo: React.Dispatch<React.SetStateAction<FirstInfo>>;
  firstInfo: FirstInfo;
}> = ({ handleFirstInfoForm, handleFirstInfo, setFirstInfo, firstInfo }) => {
  return (
    <div className={styles.firstModal}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <XImage src="/assets/mqr.png" height={200} width={200} alt="Logo" />
          {/* <h1>Hoş Geldiniz!</h1> */}
        </div>
        <form onSubmit={(e) => handleFirstInfoForm(e)}>
          <div className={styles.names}>
            <XInput
              onChange={(value) => setFirstInfo({ ...firstInfo, name: value })}
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
                <XImage src={firstInfo.mainPhoto} alt={'mainPhoto'} fill />
              </div>
            )}
          </div>
          <div>
            <XSwitch
              label={
                'Davetlilerinizin yüklediği fotoğrafların sizin onayınızdan geçmesini ister misiniz? (Onaylı Görsel)'
              }
              onChange={(value) =>
                setFirstInfo({ ...firstInfo, permission: value })
              }
              defaultChecked={firstInfo.permission}
            />
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
  );
};

const DeleteModal: React.FC<{
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  deletePhoto: () => void;
}> = ({ setDeleteModal, deletePhoto }) => {
  return (
    <div className={styles.deleteModal}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <XImage src="/assets/mqr.png" height={200} width={200} alt="Logo" />
        </div>
        <div className={styles.sure}>
          <h1>Silmek İstediğinize Emin Misiniz?</h1>
          <p>
            Bu işlem geri alınamaz ve fotoğrafınız kalıcı olarak silinecektir.
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
  );
};

const SettingsModal: React.FC<{
  handleFirstInfoForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFirstInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFirstInfo: React.Dispatch<React.SetStateAction<FirstInfo>>;
  settingsModal: boolean;
  firstInfo: FirstInfo;
}> = ({
  handleFirstInfoForm,
  setSettingsModal,
  handleFirstInfo,
  settingsModal,
  setFirstInfo,
  firstInfo
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setSettingsModal(false);
    }
  };

  useEffect(() => {
    if (settingsModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingsModal]);

  return (
    <>
      <div
        className={`${styles.menuOverlay} ${settingsModal ? styles.open : ''}`}>
        <div className={styles.menuContent} ref={menuRef}>
          <button
            onClick={() => setSettingsModal(false)}
            className={styles.closeButton}>
            <IconClose height={28} width={28} />
          </button>
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
                  <XImage src={firstInfo.mainPhoto} alt={'mainPhoto'} fill />
                </div>
              )}
            </div>
            <div>
              <XSwitch
                label={
                  'Misafirlerinizin yüklediği fotoğrafları siz onayladıktan sonra herkesin görmesini ister misiniz? (Onaylı Görsel)'
                }
                onChange={(value) =>
                  setFirstInfo({ ...firstInfo, permission: value })
                }
                defaultChecked={firstInfo.permission}
              />
            </div>

            <div>
              <XButton
                onClick={() => setSettingsModal(false)}
                className={styles.button}
                color="outline-secondary"
                type="submit"
                fullWidth>
                Değişiklikleri Kaydet
              </XButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const QRCodeModal: React.FC<{
  setQRCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  partnerName: string;
  yourName: string;
}> = ({ setQRCodeModal, partnerName, yourName }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        height: 324,
        width: 460
      });

      // Görseli indir
      saveAs(dataUrl, 'qr-kart.png');
    } catch (error) {
      console.error('Görsel indirme hatası:', error);
    }
  };

  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownloadQR = async () => {
    if (!qrRef.current) return;

    try {
      const dataUrl = await toPng(qrRef.current, {
        cacheBust: true,
        height: 132,
        width: 132
      });

      // Görseli indir
      saveAs(dataUrl, 'qr-kart.png');
    } catch (error) {
      console.error('Görsel indirme hatası:', error);
    }
  };
  const tabs = [
    {
      content: (
        <div className={styles.qrCard}>
          <div className={styles.download}>
            <XButton
              className={styles.downloadButton}
              onClick={handleDownload}
              color="blur">
              <IconDownload height={16} width={16} />
            </XButton>
          </div>
          <div className={styles.content} ref={cardRef}>
            <div className={styles.pattern}>
              <XImage src={'/assets/pattern.png'} alt={'pattern'} fill />
            </div>
            <div className={styles.brand}>
              <XImage src="/assets/mqr.png" height={80} width={80} alt="Logo" />
            </div>
            <div className={styles.title}>
              <div className={styles.eventTitle}>
                {partnerName} & {yourName}
              </div>
              <div className={styles.eventInfo}>Hoş Geldiniz</div>
              <div className={styles.eventInfo}>
                Fotoğraf yükleyebilirsiniz veya diğer davetlilerin
                yüklediklerini görüntüleyebilirsiniz.
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.qrWrapper}>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://fotosec.com/dugun/abc123"
                  alt="QR Code"
                />
              </div>

              <div className={styles.note}>
                Bu QR kodu okutarak etkinliğe özel davetli fotoğraf alanına
                katılabilirsiniz. 📸
              </div>
            </div>
          </div>
          <div className={styles.info}>
            Kartın en net hali için 460x324 px ile kullanmanız önerilir.
          </div>
        </div>
      ),
      title: 'Moment-QR'
    },
    {
      content: (
        <div className={styles.onlyQR}>
          <div className={styles.download}>
            <XButton
              className={styles.downloadButton}
              onClick={handleDownloadQR}
              color="blur">
              <IconDownload height={16} width={16} />
            </XButton>
          </div>
          <div className={styles.qrWrapper} ref={qrRef}>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://fotosec.com/dugun/abc123"
              alt="QR Code"
            />
          </div>
        </div>
      ),
      title: 'Sadece QR'
    }
  ];
  return (
    <div className={styles.qrCodeModal}>
      <div className={styles.content}>
        <button
          onClick={() => setQRCodeModal(false)}
          className={styles.closeButton}>
          <IconClose height={28} width={28} />
        </button>
        <div className={styles.logo}>
          <XImage src="/assets/mqr.png" height={200} width={200} alt="Logo" />
        </div>
        <div className={styles.sure}>
          <XTabView tabs={tabs} />
        </div>
      </div>
    </div>
  );
};
