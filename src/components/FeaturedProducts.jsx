import { useRef } from 'react'
import ProductCard from './ProductCard.jsx'
import { featuredProducts } from '../data/products.js'

export default function FeaturedProducts() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8 * dir
    track.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="featured">
      <div className="featured-header">
        <div>
          <p className="eyebrow">Featured</p>
          <h2>This season&apos;s abayas</h2>
        </div>
        <div className="arrow-controls">
          <button aria-label="Previous" onClick={() => scrollBy(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Next" onClick={() => scrollBy(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="product-track" ref={trackRef}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
