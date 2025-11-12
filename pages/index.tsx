import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WAM Mockups — Preview</title>
      </Head>

      <main className='indexMain'>
        <h1>WAM Mockups</h1>
        <p>Choose a variant to preview:</p>
        <ul>
          <li>
            <Link href='/mockup1'>Mockup 1 — Product grid</Link>
          </li>
          <li>
            <Link href='/mockup2'>Mockup 2 — Technical detail</Link>
          </li>
          <li>
            <Link href='/landing'>Landing banners — Variants A & B</Link>
          </li>
          <li>
            <Link href='/landing-a'>Landing A — Marketing</Link>
          </li>
          <li>
            <Link href='/landing-b'>Landing B — Technical</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
