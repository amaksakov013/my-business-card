import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { heroImages, telegramUrl } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const change = useCallback((step: number) => {
    setCurrent((value) => (value + step + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const timer = window.setInterval(() => change(1), 5500)
    return () => window.clearInterval(timer)
  }, [change, paused, reduced])

  return <section className="hero shell" id="top">
    <div className="hero__copy"><p className="eyebrow"><i />Кашпо ручной работы из бетона</p><h1>Бетон не обязан быть <em>серым</em></h1><p className="lead">Цветные кашпо ручной работы с живой текстурой. Каждое уникально — как отпечаток пальца, только из бетона.</p><div className="hero__actions"><a className="button" href={telegramUrl} target="_blank" rel="noreferrer">Заказать в Telegram</a><a className="text-link" href="#works">Посмотреть работы <ArrowDown size={17} /></a></div><p className="aside">Иногда бетон творит магию без предупреждения.</p></div>
    <div className="hero__visual" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero__image-area">{heroImages.map((image, index) => <img key={image.src} className={index === current ? 'active' : ''} src={image.src} alt={image.alt} width="900" height="1120" fetchPriority={index === 0 ? 'high' : 'auto'} style={{ objectFit: image.fit, objectPosition: image.objectPosition }} />)}</div>
      <div className="slider-controls"><button type="button" onClick={() => change(-1)} aria-label="Предыдущее фото"><ArrowLeft /></button><div className="dots" aria-label={`Фото ${current + 1} из ${heroImages.length}`}>{heroImages.map((image, index) => <button key={image.src} type="button" className={index === current ? 'active' : ''} aria-label={`Показать фото ${index + 1}`} aria-current={index === current} onClick={() => setCurrent(index)} />)}</div><button type="button" onClick={() => change(1)} aria-label="Следующее фото"><ArrowRight /></button></div>
    </div>
  </section>
}
