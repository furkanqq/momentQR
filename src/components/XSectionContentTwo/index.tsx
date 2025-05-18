import styles from './index.module.scss';
import cn from 'classnames';

import { XButton } from '../XButton';
import Link from 'next/link';
import React from 'react';

export default function SectionContentTwo({
  href = '/',
  className,
  button,
  h1,
  p
}: {
  className?: string;
  button?: string;
  href?: string;
  h1?: string;
  p?: string;
}) {
  return (
    <div className={cn(styles.sectionTwo, className && className)}>
      <div className={styles.content}>
        {h1 && <h1>{h1}</h1>}
        {p && <p>{p}</p>}
      </div>
      {button && (
        <Link href={href}>
          <XButton color="blur">{button}</XButton>
        </Link>
      )}
    </div>
  );
}
