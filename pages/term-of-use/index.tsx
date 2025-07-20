import styles from './index.module.scss';

import { XContainer } from '@/src/components/XContainer';

import AppLayout from '@/src/layouts/AppLayout';
import XFooter from '@/src/layouts/XFooter';
import XHeader from '@/src/layouts/XHeader';

export default function TermOfUsePage() {
  return (
    <AppLayout>
      <XHeader />
      <XContainer className={styles.container}>
        <div className={styles.paper}>
          <h1>Kullanım Şartları</h1>
          <p>
            Lütfen bu web sitesini kullanmadan önce aşağıdaki kullanım
            şartlarını dikkatlice okuyunuz. Bu siteyi kullanarak bu şartları
            kabul etmiş sayılırsınız.
          </p>

          <h2>1. Hizmet Tanımı</h2>
          <p>
            <strong>Moment-QR</strong>, özel günler (düğün, nişan, sünnet vb.)
            için katılımcıların ortak bir fotoğraf paylaşım alanına erişmesini
            ve görsel yüklemesi/yüklenenleri görüntülemesi amacıyla
            tasarlanmıştır.
          </p>

          <h2>2. Kullanım Koşulları</h2>
          <ul>
            <li>
              QR kod aracılığıyla erişilen paylaşım alanları yalnızca ilgili
              etkinliğe katılanlar içindir.
            </li>
            <li>
              Kullanıcılar yalnızca kendi çektikleri ve haklarına sahip
              oldukları görselleri yüklemelidir.
            </li>
            <li>
              Yüklenen içeriklerin doğruluğu, telif hakları ve içerik ihlalleri
              tamamen kullanıcı sorumluluğundadır.
            </li>
          </ul>

          <h2>3. İçerik Sorumluluğu ve Müdahale Hakkı</h2>
          <ul>
            <li>
              <strong>Moment-QR</strong>, kullanıcılar tarafından yüklenen
              içeriklerin denetimini yapmakla yükümlü değildir.
            </li>
            <li>
              Müşteri, QR kodu davetlilerle paylaştığında, davetli kullanıcılar
              tarafından uygunsuz içerik yüklenmesi durumunda bu içerikler için
              <strong> Moment-QR</strong> sorumlu tutulamaz.
            </li>
            <li>
              Eğer böyle bir riski önlemek istiyorsanız, görsellerin sizin
              onayınızdan geçmesini sağlayan <strong>Onaylı Görsel</strong>
              seçeneğini tercih etmenizi öneririz.
            </li>
            <li>
              Ancak şikayet veya ihlal bildirimi durumunda içerik kaldırma,
              erişimi engelleme ve kullanıcıyı engelleme hakkını saklı tutar.
            </li>
          </ul>

          <h2>4. Telif Hakkı ve Yasal Haklar</h2>
          <ul>
            <li>Başkalarının telif haklarını ihlal eden içerikler yasaktır.</li>
            <li>
              Telif hakkı ihlali içeren bir içerik fark edilirse, telif sahibi
              iletişime geçerek kaldırılmasını talep edebilir.
            </li>
            <li>
              Kullanıcılar yükledikleri içeriklerin <strong>Moment-QR</strong>
              ile sınırlı, geri alınabilir olmayan bir paylaşım hakkı tanıdığını
              kabul eder.
            </li>
          </ul>

          <h2>5. Sorumluluğun Sınırlandırılması</h2>
          <ul>
            <li>
              Site kullanımından doğabilecek doğrudan veya dolaylı zararlardan{' '}
              <strong>Moment-QR</strong> sorumlu tutulamaz.
            </li>
            <li>
              Hizmetin her zaman kesintisiz veya hatasız olacağı garanti
              edilmez.
            </li>
          </ul>

          <h2>6. Hizmetin Sonlandırılması</h2>
          <ul>
            <li>
              Herhangi bir kullanıcı, kurallara aykırı hareket ederse siteye
              erişimi engellenebilir.
            </li>
            <li>
              Organizasyon sahipleri kendi paylaşım alanlarını diledikleri zaman
              kaldırabilir.
            </li>
          </ul>

          <h2>7. Güncellemeler</h2>
          <p>
            Bu şartlar zaman zaman güncellenebilir. Güncel hali sitede
            yayınlandığı andan itibaren geçerlidir.
          </p>

          <p className={styles.email}>📧 momentiletisim@gmail.com</p>
        </div>
      </XContainer>
      <XFooter bg="dark" />
    </AppLayout>
  );
}
