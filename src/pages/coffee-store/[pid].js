import { useRouter } from "next/router";
import Link from "next/link";

const CoffeStore = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <div>Coffe Store Page {pid}</div>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CoffeStore;
