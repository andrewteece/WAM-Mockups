export default function BannerB() {
  return (
    <section className='banner bannerB' aria-labelledby='banner-b-title'>
      <div className='bannerInner container'>
        <div className='bannerBContent'>
          <h2 id='banner-b-title'>
            WAM Software — Monitor, Alert, and Control
          </h2>
          <p className='muted'>
            A technical, data-first banner highlighting integrations, data
            export, and calibration options.
          </p>

          <ul className='featureList' aria-hidden='false'>
            <li>Real-time dashboards</li>
            <li>Exportable CSV & API access</li>
            <li>Field calibration & probe options</li>
          </ul>

          <div className='bannerCtas'>
            <button type='button' className='btn'>
              Request Demo
            </button>
            <button type='button' className='secondary'>
              View Docs
            </button>
          </div>
        </div>

        <div className='bannerBVisual' aria-hidden='true'>
          <div className='floatingChart' />
          <div className='floatingNodes' />
        </div>
      </div>
    </section>
  );
}
