import {useRouter} from 'next/router';

const CoffeStore = () => {
  const router = useRouter();
  const {pid} = router.query;

  return (
    <div>
      Coffe Store Page {pid}
    </div>
  )
}

export default CoffeStore;