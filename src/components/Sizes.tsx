import { ArrowUpRight } from 'lucide-react'
import { sizes, telegramUrl } from '../data/content'
import { Reveal } from './Reveal'

export function Sizes() {
  return (
    <section id="sizes" className="section shell sizes sizes--combined">
      <div className="sizes__image">
        <img
          src="/images/sizes.jpg"
          alt="Два розовых бетонных кашпо размеров S и M"
          loading="lazy"
          width="900"
          height="1600"
        />
      </div>

      <Reveal className="sizes__content">
        <p className="eyebrow">
          <i />Размеры
        </p>
        <h2>Маленькое или большое?</h2>
        <p className="section-copy">
          Два основных размера для небольших и более крупных комнатных растений.
        </p>
        <div className="size-list">
          {sizes.map((size) => (
            <article key={size.name}>
              <h3>{size.name}</h3>
              <ul>
                {size.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <strong>{size.price}</strong>
            </article>
          ))}
        </div>
        <p className="note">
          Форма и размеры сохраняются, но сочетание цветов и рисунок каждого изделия
          всегда немного отличаются.
        </p>
        <a className="text-link" href={telegramUrl} target="_blank" rel="noreferrer">
          Обсудить заказ <ArrowUpRight size={17} />
        </a>
      </Reveal>

      <Reveal className="sizes__uniqueness">
        <p className="eyebrow">
          <i />Без повторов
        </p>
        <h3>Как отпечаток пальца. Только из бетона.</h3>
        <p>
          Вы можете выбрать оттенки, но точное повторение невозможно — бетон каждый раз
          создаёт новую текстуру.
        </p>
      </Reveal>
    </section>
  )
}
