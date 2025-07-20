import styles from './index.module.scss';

import { XContainer } from '@/src/components/XContainer';

import AppLayout from '@/src/layouts/AppLayout';
import XFooter from '@/src/layouts/XFooter';
import XHeader from '@/src/layouts/XHeader';

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <XHeader />
      <XContainer className={styles.container}>
        <div className={styles.paper}>
          <h1>Gizlilik Politikası</h1>
          <p>
            Bu gizlilik politikası, <strong>Moment-QR</strong>, üzerinden
            toplanan bilgilerin nasıl kullanıldığını, saklandığını ve
            korunduğunu açıklar. Bu politikayı okuyarak, siteyi kullanarak bu
            koşulları kabul etmiş sayılırsınız.
          </p>

          <h2>1. Toplanan Veriler</h2>
          <ul>
            <li>İletişim için Email ve Telefon Numarası</li>
            <li>Kullanıcılar tarafından yüklenen görseller ve içerikler</li>
            <li>
              IP adresi, cihaz bilgisi ve QR kod üzerinden erişim bilgileri
            </li>
            <li>Seçilen paylaşım tipi (onaylı görsel / direkt yükleme)</li>
          </ul>

          <h2>2. Görsel Paylaşımı ve Erişim</h2>
          <ul>
            <li>
              Site üzerinden yüklenen görseller, bağlantıya veya QR koduna
              erişimi olan herkes tarafından görüntülenebilir ve indirilebilir.
            </li>
            <li>
              Görsellerin silinmesi, yalnızca ilgili organizasyon sahibinin veya
              yetkili kişinin talebiyle mümkündür.
            </li>
            <li>
              <strong>Onaylı Görsel</strong> seçeneği tercih edildiğinde,
              yüklenen görseller organizasyon sahibinin onayından sonra
              yayınlanır.
            </li>
            <li>
              <strong>Onaylı Görsel</strong> seçeneği seçilmediği takdirde ise
              görseller anında paylaşım alanında görünür.
            </li>
            <li>
              Müşteri, QR kodu davetlilerle paylaştığında, davetli kullanıcılar
              tarafından uygunsuz içerik yüklenmesi durumunda bu içerikler bizim
              sorumluluğumuzda değildir.
            </li>
            <li>
              Eğer böyle bir riski önlemek istiyorsanız, görsellerin sizin
              onayınızdan geçmesini sağlayan <strong>Onaylı Görsel</strong>
              seçeneğini tercih etmenizi öneririz.
            </li>
          </ul>

          <h2>3. Veri Saklama Süresi</h2>
          <p>
            Yüklenen içerikler etkinlik sona erdikten sonra{' '}
            <strong>10 gün</strong> boyunca saklanır, ardından otomatik olarak
            silinir.
          </p>
          <p>Talep üzerine içerikler daha erken de silinebilir.</p>

          <h2>4. Üçüncü Taraflarla Paylaşım</h2>
          <p>
            Hiçbir kişisel veri veya görsel, kullanıcı onayı olmadan üçüncü
            kişilerle paylaşılmaz.
          </p>
          <p>
            Ancak yasa gereği gerekli durumlarda ilgili yetkililere bilgi
            sağlanabilir.
          </p>

          <h2>5. Çerezler ve Takip Teknolojileri</h2>
          <p>
            Site, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir.
            Tarayıcı ayarlarından çerezleri devre dışı bırakabilirsiniz.
          </p>

          <h2>6. Güvenlik Önlemleri</h2>
          <ul>
            <li>Veriler SSL ile şifrelenerek iletilir.</li>
            <li>Görseller ve bilgiler güvenli sunucularda saklanır.</li>
            <li>
              Yetkisiz erişimi engellemek için teknik ve idari önlemler
              alınmıştır.
            </li>
          </ul>

          <h2>7. Kullanıcı Hakları</h2>
          <p>Kullanıcı olarak;</p>
          <ul>
            <li>
              Eğer kullanıcı, etkinliğin sahibi olan müşteri ise kendi ve
              davetlilerinin yüklediği görselleri doğrudan silebilir.
            </li>
            <li>
              Davetli olarak yükleme yapan bir kullanıcı, yüklediği içeriği
              silmek istediğinde organizasyon sahibi (müşteri) ile veya bizimle
              iletişime geçerek kaldırılmasını talep etme hakkına sahiptir.
            </li>
            <li>
              Bizimle <strong>momentiletisim@gmail.com</strong> adresi üzerinden
              iletişime geçerek bu haklarınızı kullanabilirsiniz.
            </li>
          </ul>

          <h2>8. Politika Güncellemeleri</h2>
          <p>
            Bu politika zaman zaman güncellenebilir. Değişiklikler sitede
            yayınlanarak yürürlüğe girer. Önemli değişiklikler e-posta ya da
            site üzerinden bildirilebilir.
          </p>

          <p className={styles.email}>📧 momentiletisim@gmail.com</p>
        </div>
      </XContainer>
      <XFooter bg="dark" />
    </AppLayout>
  );
}
