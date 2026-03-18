'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    el.style.display = 'block'

    let cx = 0, cy = 0, tx = 0, ty = 0

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]'))
        el.classList.add('cursor-hover')
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]'))
        el.classList.remove('cursor-hover')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    let raf: number
    function loop() {
      cx += (tx - cx) * 0.15
      cy += (ty - cy) * 0.15
      el!.style.left = cx + 'px'
      el!.style.top = cy + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      id="custom-cursor"
      style={{
        display: 'none',
        position: 'fixed',
        zIndex: 9999,
        pointerEvents: 'none',
        width: '8px',
        height: '8px',
        background: 'var(--color-accent-mauve)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1.5px solid transparent',
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border-color 0.2s ease',
      }}
    />
  )
}
