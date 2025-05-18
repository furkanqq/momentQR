import styles from './index.module.scss';

import { XContainer } from '../XContainer';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    answer:
      "Moment-QR'ı kullanmak için önce bir paket satın alarak üyeliğinizi aktif hale getirmeniz gerekmektedir. Üyeliğinizi aktive ettikten sonra, platforma giriş yapıp QR kod şablonunu indirerek baskı alabilirsiniz. Bu kartları etkinlik alanına yerleştirerek misafirlerinizin içerik paylaşmasını sağlayabilirsiniz.",
    question: "Moment-QR'ı nasıl kullanabilirim?"
  },
  {
    answer:
      'Misafirler, etkinlik sırasında masalarda bulunan QR kod kartlarını telefonlarıyla tarayarak dijital albüme erişebilirler. QR kodu taradıklarında açılan sayfada fotoğraf, video ve anı notu yükleyebilirler. Tüm içerikler, etkinlik sahibinin yönetiminde olan özel dijital albümde toplanır.',
    question: 'Misafirler dijital albümü nasıl kullanır?'
  },
  {
    answer:
      'Moment-QR üyeliğiniz, satın aldığınız paketin türüne bağlı olarak 1 yıl boyunca geçerlidir. Üyelik süresi boyunca tüm özelliklerden yararlanabilir ve etkinliğinizi sorunsuz bir şekilde yönetebilirsiniz.',
    question: 'Üyeliğimin geçerlilik süresi ne kadardır?'
  },
  {
    answer:
      "Moment-QR'ı kullanmak için önce bir paket satın alarak üyeliğinizi aktif hale getirmeniz gerekmektedir. Üyeliğinizi aktive ettikten sonra, platforma giriş yapıp QR kod şablonunu indirerek baskı alabilirsiniz. Bu kartları etkinlik alanına yerleştirerek misafirlerinizin içerik paylaşmasını sağlayabilirsiniz.",
    question: "Moment-QR'ı nasıl kullanabilirim?"
  },
  {
    answer:
      'Misafirler, etkinlik sırasında masalarda bulunan QR kod kartlarını telefonlarıyla tarayarak dijital albüme erişebilirler. QR kodu taradıklarında açılan sayfada fotoğraf, video ve anı notu yükleyebilirler. Tüm içerikler, etkinlik sahibinin yönetiminde olan özel dijital albümde toplanır.',
    question: 'Misafirler dijital albümü nasıl kullanır?'
  }
];

export default function XFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <XContainer className={styles.faqContainer}>
      <div className={styles.faqTitle}>
        <h1>Sıkça Sorulan Sorular</h1>
      </div>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div className={styles.faqItem} key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <span className={styles.faqToggle}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </XContainer>
  );
}
