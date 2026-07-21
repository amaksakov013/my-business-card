import { Send } from 'lucide-react'
import { telegramUrl } from '../data/content'
import { Reveal } from './Reveal'

const details = [
  ['Растение', 'Растение в стоимость кашпо не входит.'],
  ['Дренаж', 'Дренажного отверстия нет.'],
  ['Срок изготовления', 'Изготовление занимает от 5 до 10 дней.'],
  [
    'Доставка',
    'Отправка возможна через Яндекс Доставку и СДЭК. Стоимость доставки оплачивает покупатель.',
  ],
  [
    'Цвета и результат',
    'Цвета можно выбрать, но двух одинаковых кашпо не бывает. Оттенки и текстуры ложатся по-разному, поэтому итог будет близким по настроению к референсу, но не повторит его на 100%.',
  ],
  ['Предоплата', 'Предоплата составляет 50% от стоимости кашпо.'],
]

export function Order() {
  return (
    <section id="order" className="section shell order order--details">
      <Reveal>
        <p className="eyebrow">
          <i />Как заказать
        </p>
        <h2>От идеи до вашего кашпо</h2>
        <p className="section-copy">
          Выберите размер, расскажите о желаемых оттенках — и я создам кашпо специально
          для вас.
        </p>

        <div className="order-details">
          {details.map(([title, text], index) => (
            <article key={title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <a
          className="button button--large"
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Обсудить заказ в Telegram <Send size={19} />
        </a>
        <a className="telegram" href={telegramUrl} target="_blank" rel="noreferrer">
          @NinaBetonina
        </a>
        <p className="quote">Каждое кашпо ждёт своего зелёного жителя.</p>
      </Reveal>
    </section>
  )
}
