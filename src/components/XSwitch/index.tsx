'use client';
import styles from './index.module.scss';

import React, { useState } from 'react';

interface SwitchProps {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  color?: 'blue' | 'gray';
  disabled?: boolean;
  label: string;
}

const XSwitch: React.FC<SwitchProps> = ({
  defaultChecked = false,
  disabled = false,
  color = 'blue',
  onChange,
  label
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const containerClass = `${styles.switchContainer} ${
    disabled ? styles.switchContainerDisabled : styles.switchContainerEnabled
  }`;

  const trackClass = `${styles.switchTrack} ${
    color === 'blue'
      ? isChecked
        ? styles.trackBlueChecked
        : styles.trackBlueUnchecked
      : isChecked
        ? styles.trackGrayChecked
        : styles.trackGrayUnchecked
  }`;

  const knobClass = `${styles.knob} ${isChecked ? styles.knobChecked : ''}`;

  return (
    <label className={containerClass} onClick={handleToggle}>
      <div className={trackClass}>
        <div className={knobClass}></div>
      </div>
      {label}
    </label>
  );
};

export default XSwitch;
