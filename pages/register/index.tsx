import styles from './index.module.scss';

import { XButton } from '@/src/components/XButton';
import XOtpInput from '@/src/components/XInputOtp';
import { XImage } from '@/src/components/XImage';
import { XInput } from '@/src/components/XInput';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [otpModal, setOtpModal] = useState(false);

  console.log(otp.join(''));

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOtpModal(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <XImage src="/assets/mqr.png" height={200} width={220} alt="Logo" />
          </Link>
        </div>
        <div className={styles.info}>
          <p>Hesap Oluştur</p>
        </div>

        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className={styles.formInputs}>
            <XInput placeholder="Jhon" label="Ad" />
            <XInput placeholder="Doe" label="Soyad" />
            <XInput placeholder="*******" label="Şifre" />
            <XInput placeholder="*******" label="Şifre Tekrar" />
            <XInput placeholder="example@gmail.com" label="E-posta" />
            <XInput placeholder="+90" label="Telefon" />
          </div>
          <XButton color="outline-secondary">Devam Et</XButton>
        </form>

        <p className={styles.privacy}>
          By joining, you agree to our terms and conditions and{' '}
          <Link href={'/'}>privacy policy</Link>. If you would like to learn
          more about <Link href={'/'}>Moment-QR</Link>, visit our legal notice.
          By signing up, you also agree to receive marketing emails from us. You
          can revoke this consent at any time.
        </p>
      </div>
      {otpModal ? (
        <div className={styles.otpContainer}>
          <div className={styles.content}>
            <p className={styles.otpText}>
              We have sent a verification code to your email address.
            </p>
            <XOtpInput setOtp={setOtp} otp={otp} />
            <div className={styles.otpButtons}>
              <XButton color="outline-secondary">Re-Code</XButton>
              <Link href={'/price-type'}>
                <XButton color="outline-secondary">Continue</XButton>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
