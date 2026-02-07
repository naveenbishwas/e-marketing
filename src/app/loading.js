import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.body}>
      <div className={styles.loaderContainer}>
        <div className={styles.textWrapper}>
          <span className={`${styles.letter} ${styles.primary}`}>U</span>
          <span className={`${styles.letter} ${styles.primary}`}>N</span>

          <span
            className={`${styles.letter} ${styles.primary} ${styles.circleWrap}`}
          >
            N<span className={styles.circle}></span>
          </span>

          <span className={`${styles.letter} ${styles.primary}`}>I</span>
          <span className={`${styles.letter} ${styles.primary}`}>T</span>
          <span className={`${styles.letter} ${styles.primary}`}>Y</span>
        </div>

        {/* <div className={styles.loadingBar}>
          <div className={styles.loadingProgress}></div>
        </div> */}
      </div>
    </div>
  );
}
