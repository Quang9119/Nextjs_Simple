'use client';
<<<<<<< HEAD
import { Button } from 'react-bootstrap';
=======

>>>>>>> 707ab7863bf426f46906266df4d176d73cd48e11
import { useRouter } from 'next/navigation';

const Facebook = () => {
  const router = useRouter();
  const handleBtnBack = () => {
    router.push('/');
  };
  return (
    <div>
      <h1>Facebook Page</h1>
      <div>
<<<<<<< HEAD
        <Button onClick={handleBtnBack}>Back home</Button>
=======
        <button onClick={handleBtnBack}>Back home</button>
>>>>>>> 707ab7863bf426f46906266df4d176d73cd48e11
      </div>
    </div>
  );
};
export default Facebook;
