'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/song/list');
  };

  return (
    <main>
      <title>노래맞추기</title>
      <h1>노래맞추기</h1>
      <button onClick={handleClick}>시작</button>
    </main>
  );
}
