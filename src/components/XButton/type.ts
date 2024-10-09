import { MouseEventHandler } from 'react';

export interface IXButtonProps {
  color: 'outline-tertiary' | 'outline-primary' | 'primary' | 'light';
  type?: undefined | 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler | undefined;
  className?: undefined | string;
  disabled?: undefined | boolean;
  visible?: undefined | boolean;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
  loader?: boolean;
}
