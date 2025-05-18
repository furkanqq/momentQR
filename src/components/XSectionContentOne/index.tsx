import styles from './index.module.scss';

interface SectionContentOneProps {
  content: string;
  title: string;
}

export default function SectionContentOne({
  contents
}: {
  contents: SectionContentOneProps[];
}) {
  return (
    <div className={styles.sectionDetail}>
      {contents.map((content, index) => (
        <div className={styles.box} key={index}>
          <strong>{content.title}</strong>
          <p>{content.content}</p>
        </div>
      ))}
    </div>
  );
}
