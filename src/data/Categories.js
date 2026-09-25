const IMG = (id) => `https://images.unsplash.com/${id}?w=700&q=80&auto=format&fit=crop`

export const categories = [
  {
    id: 'open-abaya',
    name: 'Open Abaya',
    href: '/types/open-abaya',
    image: IMG('photo-1527001081144-967da72b4754'),
  },
  {
    id: 'closed-abaya',
    name: 'Closed Abaya',
    href: '/types/closed-abaya',
    image: IMG('photo-1750190321916-fdad2bbf6931'),
  },
  {
    id: 'kaftan',
    name: 'Kaftan',
    href: '/types/kaftan',
    image: IMG('photo-1741635622063-705ce1190484'),
  },
  {
    id: 'occasion',
    name: 'Occasion',
    href: '/types/occasion',
    image: IMG('photo-1561442748-c50715dc32f6'),
  },
]