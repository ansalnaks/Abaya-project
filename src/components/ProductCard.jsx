// export default function ProductCard({ product }) {
//   const { name, meta, price,  image } = product
//   // const [from, to] = swatch

//   return (
//     <article className="product-card">
//       <div
//         className="product-thumb"
//         style={
//           !image
//             ? { background: `linear-gradient(155deg, ${from}, ${to})` }
//             : undefined
//         }
//       >
//         {image && <img src={image} alt={name} />}
//       </div>
//       <div className="product-info">
//         <div className="product-title-row">
//           <h3>{name}</h3>
//           <span className="price">{price}</span>
//         </div>
//         <p className="product-meta">{meta}</p>
//       </div>
//     </article>
//   )
// }



import { useState } from 'react'

export default function ProductCard({ product }) {
  const { name, meta, price, swatch, image } = product
  const [from, to] = swatch || ['#e3d5ba', '#cbb98f']
  const [broken, setBroken] = useState(false)
  const showImage = image && !broken

  return (
    <article className="product-card">
      <div
        className="product-thumb"
        style={
          !showImage
            ? { background: `linear-gradient(155deg, ${from}, ${to})` }
            : undefined
        }
      >
        {showImage && (
          <img
            className="product-thumb-img"
            src={image}
            alt={name}
            onError={() => setBroken(true)}
          />
        )}
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{name}</h3>
          <span className="price">{price}</span>
        </div>
        <p className="product-meta">{meta}</p>
      </div>
    </article>
  )
}
