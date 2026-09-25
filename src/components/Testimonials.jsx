import { testimonials } from '../data/Testimonials.js'
import '../styles/Testimonials.css'

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5Z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header centered">
        <p className="eyebrow">Loved by our customers</p>
        <h2>What they're saying</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <figure className="testimonial-card" key={t.id}>
            <Stars count={t.rating} />
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-location">{t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}