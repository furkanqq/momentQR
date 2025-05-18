import styles from './index.module.scss';

interface XOtpInputProps {
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  otp: string[];
}

const XOtpInput: React.FC<XOtpInputProps> = ({ setOtp, otp }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Yalnızca sayıya izin ver
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Sonraki input'a odaklanma
    if (value && index < 3) {
      const nextInput = document.getElementById(
        `otp-input-${index + 1}`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Backspace ile önceki input'a geçiş
      const prevInput = document.getElementById(
        `otp-input-${index - 1}`
      ) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  return (
    <div className={styles.otpContainer}>
      {otp.map((_, index) => (
        <input
          onKeyDown={(e) => handleKeyDown(e, index)}
          onChange={(e) => handleChange(e, index)}
          className={styles.otpInput}
          id={`otp-input-${index}`}
          value={otp[index]}
          maxLength={1}
          key={index}
          type="text"
        />
      ))}
    </div>
  );
};

export default XOtpInput;
