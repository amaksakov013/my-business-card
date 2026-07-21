import { useCallback, useState } from 'react'
import { worksImages } from '../data/content'
import { Lightbox } from './Lightbox'
import { Reveal } from './Reveal'

export function WorksGallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const change = useCallback((step: number) => setSelected((value) => value === null ? null : (value + step + worksImages.length) % worksImages.length), [])

  return <section id="works" className="section shell works"><Reveal><p className="eyebrow"><i />Работы</p><h2>Иногда бетон творит магию без предупреждения</h2><p className="section-copy">Я выбираю оттенки и собираю композицию, но бетон всё равно добавляет что-то своё. Поэтому одинаковых кашпо не бывает.</p></Reveal>{worksImages.length > 0 && <div className="gallery" aria-label="Галерея работ">{worksImages.map((image, index) => <button className="gallery__item" key={image.src} type="button" onClick={() => setSelected(index)} aria-label={`Открыть ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" width="720" height="900" style={{ objectFit: image.fit, objectPosition: image.objectPosition }} /></button>)}</div>}<p className="quote">Иногда я долго рассматриваю текстуры и удивляюсь, как это красиво.</p>{selected !== null && <Lightbox images={worksImages} index={selected} onClose={() => setSelected(null)} onChange={change} />}</section>
}
