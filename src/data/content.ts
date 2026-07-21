export type ImageItem = {
  src: string
  alt: string
  objectPosition?: string
  fit?: 'cover' | 'contain'
}

export const telegramUrl = 'https://t.me/NinaBetonina'

export const navItems = [
  { label: 'Работы', href: '#works' },
  { label: 'Размеры', href: '#sizes' },
  { label: 'О мастере', href: '#artist' },
]

export const heroImages: ImageItem[] = [1, 2, 3, 4].map((number) => ({
  src: `/images/hero/hero-0${number}.jpg`,
  alt: `Цветное бетонное кашпо БетоНина — фото ${number}`,
  fit: 'contain',
  objectPosition: 'center bottom',
}))

// Keep this list limited to files present in public/images/works.
// The repository currently contains no published work photos.
export const worksImages: ImageItem[] = []

export const sizes = [
  { name: 'Размер S', specs: ['Высота 8,5 см', 'Ширина 9 см', 'Объём 200 мл'], price: '750 ₽' },
  { name: 'Размер M', specs: ['Высота 11 см', 'Ширина 15 см', 'Объём 750 мл'], price: '1 600 ₽' },
]
