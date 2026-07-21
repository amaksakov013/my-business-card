export const telegramUrl = 'https://t.me/NinaBetonina'
export const navItems = [{ label: 'Работы', href: '#works' }, { label: 'Размеры', href: '#sizes' }, { label: 'О мастере', href: '#artist' }]
export const heroImages = [1, 2, 3, 4].map((number) => ({ src: `/images/hero/hero-0${number}.jpg`, alt: `Цветное бетонное кашпо БетоНина — фото ${number}` }))
export const worksImages = Array.from({ length: 9 }, (_, index) => ({ src: `/images/works/work-${String(index + 1).padStart(2, '0')}.jpg`, alt: `Работа мастерской БетоНина — кашпо ${index + 1}` }))
export const sizes = [{ name: 'Размер S', specs: ['Высота 8,5 см', 'Ширина 9 см', 'Объём 200 мл'], price: '750 ₽' }, { name: 'Размер M', specs: ['Высота 11 см', 'Ширина 15 см', 'Объём 750 мл'], price: '1 600 ₽' }]
