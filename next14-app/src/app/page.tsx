import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home page </h1>
        <ul>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/tiktok"> tiktok</Link>
          </li>
          <li>
            <Link href="/youtube"> youtube</Link>
          </li>
          <li>
            <Link href="/facebook"> Facebook</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
