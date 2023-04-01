import { useRouter } from "next/router";
import Link from "next/link";
import coffeStoreData from "../../../data/coffee-stores.json";
import Head from "next/head";

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
  const { address, name, neighbourhood } = props.coffeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back to Home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeStore;
