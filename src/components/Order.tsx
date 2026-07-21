import { Send } from 'lucide-react'
import { telegramUrl } from '../data/content'
import { Reveal } from './Reveal'

const steps = [
  'Выберите размер',
  'Расскажите, какие оттенки вам нравятся',
  'Получите уникальное кашпо',
]

export function Order() {
  return (
    <section id="order" className="section shell order">
      <Reveal>
        <p className="eyebrow">
          <i />Заказ
        </p>
        <h2>Нашли своё сочетание?</h2>
        <p className="section-copy">
          Напишите мне в Telegram. Обсудим размер, любимые оттенки и характер будущего
          кашпо.
        </p>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <b>0{index + 1}</b>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <a
          className="button button--large"
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Написать Нине в Telegram <Send size={19} />
        </a>
        <a className="telegram" href={telegramUrl} target="_blank" rel="noreferrer">
          @NinaBetonina
        </a>
        <p className="quote">Каждое кашпо ждёт своего зелёного жителя.</p>
      </Reveal>
    </section>
  )
}
