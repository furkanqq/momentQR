import styles from './index.module.scss';
import cn from 'classnames';

import { XContainer } from '../XContainer';
import { XImage } from '../XImage';

interface IProps {
  content: React.ReactNode;
  bg: 'light' | 'dark';
  reverse?: boolean;
  image?: string;
  label?: string;
}

export default function XSection({
  content,
  reverse,
  image,
  label,
  bg
}: IProps) {
  return (
    <section className={cn(bg === 'dark' ? styles.dark : styles.light)}>
      <XContainer className={cn(styles.container, !reverse && styles.reverse)}>
        <div className={styles.image}>
          {label && <label className={styles.label}>{label}</label>}
          <XImage src={image ? image : ''} alt="image" height={50} width={50} />
        </div>
        <div className={styles.content}>{content}</div>
      </XContainer>
    </section>
  );
}
