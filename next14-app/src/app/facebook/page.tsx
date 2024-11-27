'use client';
import { Button } from 'react-bootstrap';
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
        <Button onClick={handleBtnBack}>Back home</Button>
      </div>
    </div>
  );
};
export default Facebook;
