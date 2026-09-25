import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import Footer from './components/Footer.jsx'
import BrandStory from './components/BrandStory.jsx'
import ShopByType from './components/ShopByType.jsx'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <BrandStory/>
        <ShopByType/>
      </main>
      <Footer/>
    </div>
  )
}
