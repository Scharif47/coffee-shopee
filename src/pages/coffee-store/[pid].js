import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import coffeStoreData from "../../../data/coffee-stores.json";
import styles from "@/styles/coffee-store.module.css";
import Image from "next/image";
import cls from "classnames";

// Export and use getStaticProps to fetch data from an API endpoint
export function getStaticProps(staticProps) {
  const { params } = staticProps;

  return {
    props: {
      coffeStore: coffeStoreData.find(
        (coffeStore) => coffeStore.id === Number(params.pid)
      ),
    },
  };
}

// Export and use getStaticPaths to pre-render pages
export function getStaticPaths() {
  const paths = coffeStoreData.map((coffeStore) => {
    return {
      params: {
        pid: coffeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

// Create a functional component
const CoffeStore = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Destructure props
  const { address, name, neighbourhood, imgUrl } = props.coffeStore;

  const handleUpvote = () => {
    console.log("upvote");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to Home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
            priority
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/location.svg"
              width="24"
              height="24"
              alt="location icon"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width="24"
              height="24"
              alt="nearMe icon"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="star icon"
            />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvote}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeStore;
