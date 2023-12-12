import styles from './index.module.css';

type AppButtonProps = {
  size?: number;
  roundImageCorners?: boolean;
  imageSrc: string;
  link?: string;
  dead?: boolean;
  title: string;
};

export const AppButton = ({
  size = 200,
  roundImageCorners,
  imageSrc,
  link,
  dead = false,
  title
}: AppButtonProps) => {
  const content = (
    <>
      <div className={styles.container}>
        <div className={styles.blurredImage}>
          <img alt="" aria-hidden="true" src={imageSrc} />
        </div>
        <div className={styles.bottomImage}>
          <img alt="" aria-hidden="true" src={imageSrc} />
        </div>
        <div className={styles.firstShadowImage}>
          <img alt="" aria-hidden="true" src={imageSrc} />
        </div>
        <div className={styles.bottomImage}>
          <img alt="" aria-hidden="true" src={imageSrc} width={size} height={size} />
        </div>
        <div className={styles.shadowImage}>
          <img alt="" aria-hidden="true" src={imageSrc} />
        </div>
        <div className={styles.border}></div>
        <div className={styles.borderLeft}></div>
        <div className={styles.borderTop}></div>
        <div
          className={styles.mainImageContainer}
          style={{ borderRadius: roundImageCorners ? `${size * 0.05}px` : 0 }}
        >
          <img alt="" aria-hidden="true" src={imageSrc} />
        </div>
        <p
          className={`drop-shadow-md ${styles.text}`}
          style={{ borderRadius: roundImageCorners ? `${size * 0.05}px` : 0 }}
        >
          {title}
        </p>
      </div>
      <div className={styles.bottomShadowImage}>
        <img alt="" aria-hidden="true" src={imageSrc} />
      </div>
    </>
  );

  return dead ? (
    <div className={`${styles.main} ${styles.dead}`}>
      {content}
    </div>
  ) : (
    <a
      rel="noreferrer"
      target="_blank"
      href={link}
      className={styles.main}
    >
      {content}
    </a>
  );
};
