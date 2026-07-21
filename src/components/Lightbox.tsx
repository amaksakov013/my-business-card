import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useScrollLock } from '../hooks/useScrollLock'

type Image = { src: string; alt: string }

export function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: Image[]
  index: number
  onClose: () => void
  onChange: (step: number) => void
}) {
  useScrollLock(true)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange(-1)
      if (event.key === 'ArrowRight') onChange(1)
    }
    window.addEventListener('keydown', keyboard)
    return () => window.removeEventListener('keydown', keyboard)
  }, [onClose, onChange])

  const image = images[index]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фотографии"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0]
        touchStartX.current = touch.clientX
        touchStartY.current = touch.clientY
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || touchStartY.current === null) return
        const touch = event.changedTouches[0]
        const deltaX = touch.clientX - touchStartX.current
        const deltaY = touch.clientY - touchStartY.current
        touchStartX.current = null
        touchStartY.current = null

        if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          onChange(deltaX < 0 ? 1 : -1)
        }
      }}
    >
      <button className="lightbox__close" type="button" aria-label="Закрыть просмотр" onClick={onClose}>
        <X />
      </button>
      <button className="lightbox__nav lightbox__nav--prev" type="button" aria-label="Предыдущее фото" onClick={() => onChange(-1)}>
        <ChevronLeft />
      </button>
      <img src={image.src} alt={image.alt} draggable="false" />
      <button className="lightbox__nav lightbox__nav--next" type="button" aria-label="Следующее фото" onClick={() => onChange(1)}>
        <ChevronRight />
      </button>
      <p>{index + 1} / {images.length}</p>
    </div>
  )
}
