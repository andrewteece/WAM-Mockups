import type { NextPage } from 'next';
import Head from 'next/head';
import BannerB from '../components/BannerB';

const LandingB: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Landing B (Technical)</title>
      </Head>

      <main>
        <BannerB />

        <section className='container section specs'>
          <div className='specGrid'>
            <div className='specCard reveal'>
              <h4>Outputs</h4>
              <p className='muted'>
                0–10V, 4–20mA, Modbus — field-selectable options for retrofit
                projects.
              </p>
            </div>
            <div className='specCard reveal'>
              <h4>Accuracy</h4>
              <p className='muted'>
                ±0.3°C; humidity options down to ±2% RH for stable control.
              </p>
            </div>
            <div className='specCard reveal'>
              <h4>Mounting</h4>
              <p className='muted'>
                Wall, duct, immersion and outdoor options available with
                accessory probes.
              </p>
            </div>
          </div>
        </section>

        <section className='container section resources'>
          <h4 className='reveal'>Downloads & Resources</h4>
          <div className='downloadRow reveal'>
            <button className='secondary'>Datasheet (PDF)</button>
            <button className='secondary'>Wiring Diagrams</button>
            <button className='secondary'>3D CAD</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingB;
