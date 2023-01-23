import styles from "@/styles/Banner.module.css";

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title__left}>Coffee</span>
        <span className={styles.title__right}>Shopee</span>
      </h1>
      <p className={styles.subTitle}>Discover local coffee shops</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.btn} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
