import { useRouter } from "next/router";
import Link from "next/link";
import coffeStoreData from "../../../data/coffee-stores.json";

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
  return {
    paths: [{ params: { pid: "0" } }, { params: { pid: "1" } }],
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

  return (
    <div>
      <div>Coffe Store Page {pid}</div>
      <Link href="/">Back to Home</Link>
      <p>{props.coffeStore.address}</p>
      <p>{props.coffeStore.name}</p>
      <p>{props.coffeStore.neighbourhood}</p>
    </div>
  );
};

export default CoffeStore;
