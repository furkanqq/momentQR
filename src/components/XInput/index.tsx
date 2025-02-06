import styles from './index.module.scss';
import cn from 'classnames';

import { IconEyeOff } from '@/src/assets/IconEyeOff';
import { IconEye } from '@/src/assets/IconEye';

import React, {
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ChangeEvent,
  useEffect,
  RefObject,
  useState
} from 'react';

interface IProps {
  onKeyDown?: KeyboardEventHandler | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: (value: string) => void;
  ref?: RefObject<HTMLInputElement>;
  placeholder?: undefined | string;
  className?: undefined | string;
  icon?: React.ReactNode;
  errorMessage?: string;
  defaultValue?: string;
  readOnly?: boolean;
  visible?: boolean;
  accept?: string;
  label?: string;
  value?: string;
  name?: string;
}

export const XInput: React.FC<IProps> = ({
  visible = true,
  errorMessage,
  defaultValue,
  placeholder,
  className,
  onKeyDown,
  onChange,
  readOnly,
  accept,
  value,
  label,
  name,
  type,
  icon,
  ref
}) => {
  const [isShowEye, setIsShowEye] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsError(!!errorMessage);
  }, [errorMessage]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange?.(value);
  };

  if (!visible) return null;

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label className={styles.label} x-attr="x-label">
          {icon} {label}
        </label>
      )}
      <div
        className={cn(styles.innerWrapper, {
          [styles.readOnly]: readOnly,
          [styles.error]: isError
        })}
        x-attr="x-inner-wrapper">
        <input
          type={isShowEye ? 'text' : type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={handleOnChange}
          onKeyDown={onKeyDown}
          autoCapitalize="off"
          accept={accept}
          value={value}
          name={name}
          ref={ref}
        />
        {type === 'password' && (
          <div
            onClick={() => setIsShowEye(!isShowEye)}
            className={styles.innerRight}>
            {isShowEye ? (
              <IconEye className={styles.icon} />
            ) : (
              <IconEyeOff className={styles.icon} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
