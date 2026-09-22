export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="wordmark" href="/">
            AMARA <span>ATELIER</span>
          </a>
          <p className="footer-blurb">
            Hand-cut abayas in silk-blend crepe, made in small runs from a
            studio that cares more about drape than trend.
          </p>
          <div className="footer-socials">
            <a aria-label="Instagram" href="https://instagram.com">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a aria-label="Pinterest" href="https://pinterest.com">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M9.5 17.5c.6-1.3 1.4-4.4 1.4-4.4m0 0c-.3-.6-.4-1.9.3-2.9.9-1.3 2.8-.9 3 .8.2 1.1-.6 2.6-1 3.5-.4.8.1 1.9 1.2 1.9 2 0 3.2-2.4 3.2-4.5 0-2.3-1.6-4-4.3-4-3.1 0-4.8 2.2-4.8 4.4 0 .8.3 1.4.6 1.8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a aria-label="TikTok" href="https://tiktok.com">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 4v9.6a3.1 3.1 0 1 1-2.6-3.06"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M14 4c.3 2 1.8 3.4 3.7 3.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Shop">
          <p className="footer-heading">Shop</p>
          <a href="/new-arrivals">New Arrivals</a>
          <a href="/abayas">Abayas</a>
          <a href="/types">Types</a>
          <a href="/the-silk-series">The Silk Series</a>
        </nav>

        <nav className="footer-col" aria-label="Support">
          <p className="footer-heading">Support</p>
          <a href="/sizing">Sizing Guide</a>
          <a href="/shipping">Shipping &amp; Returns</a>
          <a href="/care">Fabric Care</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <nav className="footer-col" aria-label="Studio">
          <p className="footer-heading">Studio</p>
          <a href="/about">Our Story</a>
          <a href="/journal">Journal</a>
          <a href="/atelier">Visit the Atelier</a>
        </nav>

        <div className="footer-newsletter">
          <p className="footer-heading">Stay in the loop</p>
          <p className="footer-blurb">
            New drops, restocks, and notes from the studio — no more than
            twice a month.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amara Atelier. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}