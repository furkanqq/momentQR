import styles from './index.module.scss';

import { XContainer } from '@/src/components/XContainer';

import AppLayout from '@/src/layouts/AppLayout';
import XFooter from '@/src/layouts/XFooter';
import XHeader from '@/src/layouts/XHeader';

export default function SellingContractPage() {
  return (
    <AppLayout>
      <XHeader />
      <XContainer className={styles.container}>
        <div className={styles.paper}>
          <h1>Mesafeli Satış Sözleşmesi</h1>

          <h2>1. Konu</h2>
          <p>
            İşbu sözleşmenin konusu, <strong>Moment-QR</strong> üzerinden
            dijital ortamda sunulan “Ortak Fotoğraf Paylaşım Alanı” hizmetinin
            satışı ve kullanımına ilişkin tarafların hak ve yükümlülüklerinin
            belirlenmesidir.
          </p>

          <h2>2. Hizmet Tanımı</h2>
          <p>
            Satıcı tarafından sunulan hizmet, alıcının etkinlik (düğün, nişan,
            vb.) amacıyla özel bir fotoğraf paylaşım alanı oluşturmasına, bunu
            QR kod aracılığıyla katılımcılarla paylaşmasına ve platform üzerinde
            fotoğraf yükleme/indirme gibi özelliklere sahip olmasına imkân
            tanır.
          </p>

          <h2>3. Satın Alma ve Erişim Süreci</h2>
          <ul>
            <li>
              Ödeme, Stripe / iyzico / PayTR altyapısı ile ya da elden ödeme
              sonrası kod ile gerçekleştirilir.
            </li>
            <li>
              Ödeme sonrasında kullanıcıya özel bir paylaşım alanı oluşturulur
              ve sistem üzerinden QR kod sağlanır.
            </li>
            <li>
              Kullanıcı, alanı özelleştirme ve QR çıktısı alma hakkına sahiptir.
            </li>
            <li>
              Kod ile ödeme yapılan durumlarda kullanıcıya sistem erişimi için
              özel bir erişim kodu tahsis edilir.
            </li>
          </ul>

          <h2>4. Teslimat ve Kullanım</h2>
          <ul>
            <li>
              Hizmet, ödeme onaylandıktan hemen sonra dijital olarak sunulur.
            </li>
            <li>Fiziksel bir teslimat söz konusu değildir.</li>
            <li>
              Kullanıcı hizmeti sistem üzerinden dilediği gibi özelleştirebilir.
            </li>
          </ul>

          <h2>5. İptal ve İade Koşulları</h2>
          <p>
            Hizmet, dijital içerik olduğundan ve anında kullanım hakkı
            doğduğundan, mesafeli satış yönetmeliğinin 15. maddesi gereği cayma
            hakkı bulunmamaktadır.
          </p>
          <p>
            Kullanıcı, satın alma öncesinde bu durumu kabul ettiğini beyan eder.
          </p>
          <p>Elden ödeme yapılan işlemler de bu kapsamda iade dışıdır.</p>

          <h2>6. Sorumluluğun Sınırlandırılması</h2>
          <ul>
            <li>
              Platformda oluşturulan alanın içeriğinden tamamen kullanıcı
              sorumludur.
            </li>
            <li>
              Yasa dışı, hakaret içeren, telif ihlali barındıran içerikler
              sistemden kaldırılabilir.
            </li>
            <li>
              Satıcı, teknik aksaklıklar dışında hizmetin kullanımından
              kaynaklanan zararlardan sorumlu tutulamaz.
            </li>
          </ul>

          <h2>7. Uyuşmazlık Durumu</h2>
          <p>
            İşbu sözleşmenin uygulanmasında; T.C. Ticaret Bakanlığı’nca ilan
            edilen parasal sınırlar dahilinde Alıcının yerleşim yerindeki
            Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
          </p>

          <h2>8. Onay ve Yürürlük</h2>
          <p>
            Alıcı, ödeme işlemini tamamlayarak bu sözleşmenin tüm maddelerini
            okuduğunu, anladığını ve kabul ettiğini beyan eder.
          </p>
          <p>Sözleşme, dijital ortamda onaylanarak yürürlüğe girer.</p>

          <div className={styles.contact}>
            <p>Satıcı İletişim Bilgileri:</p>
            <p>Firma: MurkiSoft</p>
            <p>E-posta: momentiletisim@gmail.com</p>
          </div>
        </div>
      </XContainer>
      <XFooter bg="dark" />
    </AppLayout>
  );
}
