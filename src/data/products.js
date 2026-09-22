// Swap `swatch` for a real product photo path (e.g. "/images/haya-classic.jpg")
// once photography is ready — ProductCard falls back to this generated
// drape illustration when no `image` field is present.
import img4 from "../images/img4.jpg";
import img3 from "../images/img3.jpg"
import img2 from "../images/img2.jpg"
// import img5 from "../images/img5.jpg"
import img1 from "../images/img1.jpg"
export const featuredProducts = [
  {
    id: 'haya-classic',
    name: 'Haya Classic',
    meta: 'Matte crepe · Everyday',
    price: '$160',
    image: img2,
  },
  {
    id: 'noor-embroidered',
    name: 'Noor Embroidered',
    meta: 'Silk-crepe · Gold detail',
    price: '$240',
    image: img3,
  },
  {
    id: 'sakinah-open-front',
    name: 'Sakinah Open Front',
    meta: 'Washed viscose · Relaxed',
    price: '$195',
    image: img1,
  },
  {
    id: 'rania-kaftan',
    name: 'Rania Kaftan',
    meta: 'Chiffon · Wide sleeve',
    price: '$205',
    image:img4,
  },

]
