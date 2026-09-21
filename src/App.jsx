import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  )
}
