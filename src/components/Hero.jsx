export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Fall / Winter — Drop 09</p>
        <h1>
          The quiet luxury of
          <br />
          a single, perfect drape.
        </h1>
        <p className="hero-body">
          Hand-cut abayas in silk-blend crepe, tailored for the way fabric
          moves when you do. Made in small runs, priced with intention.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/abayas">
            Shop the collection
          </a>
          <a className="btn btn-text" href="/types">
            Explore the types
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Illustrated stand-in for photography — swap this <svg> for
            <img src="/images/hero.jpg" alt="..." /> once a shoot is ready. */}
        {/* <svg
          className="drape-art"
          viewBox="0 0 600 720"
          preserveAspectRatio="xMidYMax slice"
          role="img"
          aria-label="Illustration of a draped silk abaya in warm cream tones"
        >
          <defs>
            <linearGradient id="panelLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4ecd8" />
              <stop offset="55%" stopColor="#e7d7b6" />
              <stop offset="100%" stopColor="#d8c197" />
            </linearGradient>
            <linearGradient id="foldA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbf6ea" />
              <stop offset="100%" stopColor="#e3d0a6" />
            </linearGradient>
            <linearGradient id="foldB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#efe2c2" />
              <stop offset="100%" stopColor="#c9ac78" />
            </linearGradient>
            <radialGradient id="glow" cx="80%" cy="10%" r="60%">
              <stop offset="0%" stopColor="#fffdf5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fffdf5" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="600" height="720" fill="url(#panelLight)" />
          <rect width="600" height="720" fill="url(#glow)" />

          {/* Hooded silhouette, simplified */}
          <path
            d="M240 90c20-26 48-40 78-40s58 14 78 40c14 18 20 34 18 56-16-4-32-6-48-4 6 34 4 66-8 92 30 10 52 32 62 66 22 74 8 224-58 300H262c-58-70-72-206-52-286 10-40 32-70 62-84-14-24-18-52-14-84-18-2-34 0-48 4-2-22 4-38 18-56Z"
            fill="url(#foldA)"
          />

          {/* Sweeping outer sleeve / drape */}
          <path
            d="M350 210c56 10 108 46 138 96 34 56 44 128 30 224-34-6-64-22-84-48-14 40-40 76-76 104-8-96 4-198 30-282-16-30-26-62-38-94Z"
            fill="url(#foldB)"
            opacity="0.92"
          />

          {/* Trailing hem fold */}
          <path
            d="M188 430c-10 84 4 176 44 246 46 0 92 0 138 0 34-58 46-134 40-206-58 26-124 24-182-2-16 24-32 32-40-38Z"
            fill="url(#foldA)"
            opacity="0.85"
          />

          {/* fine crease lines for fabric texture */}
          <g stroke="#b99b68" strokeOpacity="0.35" strokeWidth="1.4" fill="none">
            <path d="M300 140c-6 40-4 78 8 112" />
            <path d="M330 150c4 46 14 88 34 122" />
            <path d="M270 260c-4 60 2 122 20 176" />
            <path d="M232 470c8 66 26 128 56 176" />
            <path d="M368 470c10 56 4 116-16 168" />
          </g>
        {/* </svg> */} 

        <img src="https://i.pinimg.com/originals/c5/02/e6/c502e65ee4ec5dddbf55d48e0c575342.png" alt="Featured Product" />

        <div className="hero-tag">
          <p className="tag-label">Now Draping</p>
          <p className="tag-title">The Silk Series</p>
        </div>
      </div>
    </section>
  )
}
