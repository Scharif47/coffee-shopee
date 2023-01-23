import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      </main>
    </>
  );
}
