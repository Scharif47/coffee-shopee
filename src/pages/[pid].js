import { useRouter } from "next/router";
import Head from "next/head";

const DynamicPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>{pid}</title>
      </Head>
      <h1>welcome to dynamic page: {pid}</h1>
    </>
  );
};

export default DynamicPage;
