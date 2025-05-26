import styles from './index.module.scss';

import { XContainer } from '@/src/components/XContainer';
import { XTextarea } from '@/src/components/XTextarea';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import { XInput } from '@/src/components/XInput';
import XBanner from '@/src/components/XBanner';

import AppLayout from '@/src/layouts/AppLayout';
import XHeader from '@/src/layouts/XHeader';
import XFooter from '@/src/layouts/XFooter';
import React from 'react';

export default function Contact() {
  return (
    <AppLayout>
      <XHeader />
      <XBanner
        desc={
          'Bizimle iletişime geçmek için aşağıdaki formu eksiksiz doldurup gönderebilirsiniz. Mesajlarınız bizim için öncelikli cevap sırasındadır. İlginiz için teşekkür ederiz.'
        }
        image="/assets/contactP.svg"
        title={'İletişim'}
        buttonTitle={''}
        button={false}
        bg="light"
      />
      <div className={styles.image}>
        <XImage src="/assets/s.png" alt="About us" height={100} width={100} />
      </div>
      <XContainer>
        <div className={styles.contact}>
          <h1>İletişim Formu</h1>
          <p>
            Bizimle iletişime geçmek için aşağıdaki formu eksiksiz doldurup
            gönderebilirsiniz.
          </p>
          <form>
            <div className={styles.formGroup}>
              <XInput
                placeholder="Jhon"
                label="Adınız"
                type="text"
                name="name"
              />
            </div>
            <div className={styles.formGroup}>
              <XInput
                placeholder="Doe"
                label="Soyadınız"
                name="surname"
                type="text"
              />
            </div>
            <div className={styles.formGroup}>
              <XInput
                placeholder="+90 123 456 7890"
                label="Telefon Numaranız"
                name="phone"
                type="text"
              />
            </div>
            <div className={styles.formGroup}>
              <XInput
                placeholder="ornek@gmail.com"
                label="E-posta Adresiniz"
                name="email"
                type="text"
              />
            </div>
            <div className={styles.formGroup}>
              <XTextarea placeholder="Merhabalar, ...." label="Mesajınız" />
            </div>
            <XButton color="outline-secondary" type="submit" fullWidth>
              Mesajı Gönder
            </XButton>
          </form>
        </div>
      </XContainer>
      <XFooter bg="dark" />
    </AppLayout>
  );
}
