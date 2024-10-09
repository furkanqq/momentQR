import styles from './index.module.scss';
import cn from 'classnames';

import { useState } from 'react';

interface InputProps {
  searchEnabled?: boolean; // Arama butonunun görünüp görünmeyeceği
  mode?: 'light' | 'dark';
  placeholder?: string;
}

const XInput: React.FC<InputProps> = ({
  searchEnabled = false,
  mode = 'light',
  placeholder
}) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={cn(styles.inputContainer, styles[mode])}>
      <input
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        type="text"
      />
      {searchEnabled && (
        <button
          onClick={() => console.log('Search initiated')}
          className={styles.searchButton}>
          🔍
        </button>
      )}
    </div>
  );
};

export default XInput;
