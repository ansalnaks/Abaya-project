import '../styles/ShopType.css'
import { categories } from '../data/Categories.js'

export default function ShopByType() {
  return (
    <section className="shop-by-type">
      <div className="section-header">
        <p className="eyebrow">Shop by Type</p>
        <h2>Find your silhouette</h2>
      </div>

      <div className="type-grid">
        {categories.map((category) => (
          <a className="type-tile" href={category.href} key={category.id}>
            <div className="type-thumb">
              <img src={category.image} alt={category.name} />
            </div>
            <span className="type-name">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}