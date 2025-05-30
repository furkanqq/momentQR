import styles from './index.module.scss';

import React, { useState } from 'react';

interface Tab {
  content: React.ReactNode;
  title: string;
}

interface TabViewProps {
  tabs: Tab[];
}

export const XTabView: React.FC<TabViewProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabView}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            className={`${styles.tabButton} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
            key={index}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeIndex].content}</div>
    </div>
  );
};
