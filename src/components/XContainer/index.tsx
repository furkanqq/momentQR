import styles from './index.module.scss';
import cn from 'classnames';

type ContainerProps = {
  className?: undefined | string;
  children: React.ReactNode;
  right?: React.ReactNode;
  type?: 'mobile' | 'web';
  title?: string;
  mt?: number;
  mb?: number;
  py?: number;
  px?: number;
  ps?: number;
  pe?: number;
};

export const XContainer = (props: ContainerProps) => {
  const {
    type = 'web',
    className,
    children,
    title,
    right,
    mt,
    mb,
    py,
    px,
    ps,
    pe
  } = props;
  const dynamicStyle: React.CSSProperties = {
    paddingRight: pe ?? px,
    paddingLeft: ps ?? px,
    paddingBottom: py,
    marginBottom: mb,
    paddingTop: py,
    marginTop: mt
  };

  if (type === 'web') {
    return <div className={cn(styles.container, className)}>{children}</div>;
  } else {
    return (
      <div
        className={cn(styles.mobileContainer, className)}
        style={dynamicStyle}>
        <div
          style={{
            paddingRight: !(px || ps || pe) ? 16 : 0,
            paddingLeft: !(px || ps || pe) ? 16 : 0
          }}
          className={styles.header}>
          <div className={styles.title}>{title}</div>
          {right}
        </div>
        {children}
      </div>
    );
  }
};
