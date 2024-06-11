'use client';

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
        <button onClick={handleBtnBack}>Back home</button>
      </div>
    </div>
  );
};
export default Facebook;
