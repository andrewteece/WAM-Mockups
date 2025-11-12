import type { NextPage } from 'next';
import Head from 'next/head';
import BannerA from '../components/BannerA';
import BannerB from '../components/BannerB';

const Landing: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM Landing — Banner Variants</title>
      </Head>

      <main>
        <div className='container landingIntro'>
          <h1>WAM Landing — Banner Variants</h1>
          <p className='muted'>
            Two style directions for the WAM home page banner. Variant A is
            marketing-forward; Variant B is technical and data-focused.
          </p>
        </div>

        <BannerA />
        <BannerB />
      </main>
    </div>
  );
};

export default Landing;
