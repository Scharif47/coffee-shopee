import styles from "@/styles/Banner.module.css";

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title__left}>Coffee</span>
        <span className={styles.title__right}>Shopee</span>
      </h1>
      <p className={styles.subtitle}>Discover local coffee shops</p>
      <button className={styles.btn} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
