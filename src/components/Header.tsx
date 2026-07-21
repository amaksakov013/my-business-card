import { Menu, X } from 'lucide-react'
import { MouseEvent, useEffect, useState } from 'react'
import { navItems, telegramUrl } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const goToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    close()
    const id = href.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    })
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="shell header__inner">
        <a className="brand" href="#top" onClick={(event) => goToSection(event, '#top')}>
          Бето<span>Нина</span>
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => goToSection(event, item.href)}>
              {item.label}
            </a>
          ))}
          <a className="button button--small" href={telegramUrl} target="_blank" rel="noreferrer" onClick={close}>
            Заказать
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
