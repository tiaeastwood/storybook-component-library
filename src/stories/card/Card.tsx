import styles from "./card.module.css";

export interface CardProps extends React.PropsWithChildren {
  title?: string;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={styles.card}>
      {title && (
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
        </div>
      )}
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
