import type { NextPage } from 'next';
import Head from 'next/head';
import BannerB from '../components/BannerB';

const specs = [
  {
    id: 's1',
    title: 'Wiring & Power',
    desc: 'PoE or 12–24V wiring diagrams and optional battery backup.',
    file: 'WAM-wiring.pdf',
  },
  {
    id: 's2',
    title: 'Communication',
    desc: 'MQTT, REST API, and CSV export formats with sample payloads.',
    file: 'WAM-comm.pdf',
  },
  {
    id: 's3',
    title: 'Calibration',
    desc: 'Field calibration procedures and probe replacement guide.',
    file: 'WAM-calibration.pdf',
  },
  {
    id: 's4',
    title: 'Mechanical',
    desc: 'Enclosure dimensions, mounting templates and IP ratings.',
    file: 'WAM-mech.pdf',
  },
  {
    id: 's5',
    title: 'Security',
    desc: 'Authentication, TLS, and enterprise SSO integration notes.',
    file: 'WAM-security.pdf',
  },
  {
    id: 's6',
    title: 'Ordering',
    desc: 'Part numbers, accessory options, and lead times.',
    file: 'WAM-ordering.pdf',
  },
];

const LandingB: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Technical / Specs</title>
      </Head>

      <main>
        <BannerB />

        <section className='max-w-6xl mx-auto px-4 py-12'>
          <h3 className='text-lg font-semibold text-slate-900'>
            Specs & Downloads
          </h3>
          <p className='mt-2 text-sm text-slate-600'>
            Compact spec cards for engineers — download PDFs for drawings and
            details.
          </p>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {specs.map((s) => (
              <article
                key={s.id}
                className='rounded-lg border border-slate-100 bg-white p-4 shadow-sm'
              >
                <h4 className='text-sm font-medium text-slate-900'>
                  {s.title}
                </h4>
                <p className='mt-2 text-sm text-slate-600'>{s.desc}</p>
                <div className='mt-4 flex items-center justify-between'>
                  <a href='#' className='btn'>
                    Download
                    <span className='ml-2 text-xs bg-white/10 px-2 py-0.5 rounded'>
                      PDF
                    </span>
                  </a>
                  <div className='text-xs text-slate-500'>~120KB</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='bg-slate-50'>
          <div className='max-w-6xl mx-auto px-4 py-12 flex items-center justify-between'>
            <div>
              <h4 className='text-lg font-semibold'>Ready to specify?</h4>
              <p className='text-sm text-slate-600'>
                Contact our sales or request a demo to get CAD, drawings, and
                sample units.
              </p>
            </div>
            <div className='flex gap-3'>
              <a className='btn' href='#'>
                Contact Sales
              </a>
              <a className='secondary' href='#'>
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingB;
