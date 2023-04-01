import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import heroImage from "../../public/static/hero-image.png";
import Card from "@/components/card";
import coffeeStoresData from "../../data/coffee-stores.json";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  const handleBannerOnClick = () => {
    console.log("Banner button clicked");
  };

  return (
    <>
      <Head>
        <title>Coffee Shopee</title>
        <meta name="description" content="local coffee shops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View shops" handleOnClick={handleBannerOnClick} />
        <div className={styles.heroImage}>
          <Image
            src={heroImage}
            alt="woman drinking coffee"
            priority
            width={700}
            height={400}
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}
