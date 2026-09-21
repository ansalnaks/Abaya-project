export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/">
        AMARA <span>ATELIER</span>
      </a>

      <nav className="main-nav" aria-label="Main">
        <a href="/new-arrivals">New Arrivals</a>
        <a href="/abayas">Abayas</a>
        <a href="/types">Types</a>
        <a href="/journal">Journal</a>
      </nav>

      <div className="header-icons">
        <button aria-label="Search" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
            <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <button aria-label="Cart" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 8h12l-1 12.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 8V6.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </header>
  )
}
