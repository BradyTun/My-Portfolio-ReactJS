import { useLayoutEffect, useRef } from 'react'

export default function MotionLayer() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useLayoutEffect(() => {
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current

    document.documentElement.classList.add('has-js')

    let revealObserver
    let cursorFrame
    let targetFrame
    let cursorEnabled = false
    let pointerX = -100
    let pointerY = -100
    let ringX = -100
    let ringY = -100

    const revealAll = () => {
      revealObserver?.disconnect()
      revealObserver = undefined
      revealItems.forEach((item) => item.classList.add('is-visible'))
    }

    const observeReveals = () => {
      if (reduceMotionQuery.matches || !('IntersectionObserver' in window)) {
        revealAll()
        return
      }

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      revealItems.forEach((item) => revealObserver.observe(item))
    }

    const showCursor = () => {
      dot.classList.add('is-visible')
      ring.classList.add('is-visible')
    }

    const hideCursor = () => {
      dot.classList.remove('is-visible')
      ring.classList.remove('is-visible')
    }

    const updateInteractiveTarget = (target) => {
      const interactive = target?.closest?.('a, button, [data-cursor]')
      const cursorLabel = interactive?.dataset.cursor ?? ''
      ring.classList.toggle('is-interactive', Boolean(interactive))
      ring.classList.toggle('has-label', Boolean(cursorLabel))
      label.textContent = cursorLabel
    }

    const onPointerMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`
      showCursor()

      updateInteractiveTarget(event.target)
      if (cursorFrame === undefined) {
        cursorFrame = window.requestAnimationFrame(animateRing)
      }
    }

    const onPointerDown = (event) => {
      ring.classList.add('is-pressed')
      updateInteractiveTarget(event.target)
    }
    const onPointerUp = () => {
      ring.classList.remove('is-pressed')
      targetFrame = window.requestAnimationFrame(() => {
        updateInteractiveTarget(document.elementFromPoint(pointerX, pointerY))
      })
    }

    const animateRing = () => {
      if (!cursorEnabled) {
        cursorFrame = undefined
        return
      }
      const distanceX = pointerX - ringX
      const distanceY = pointerY - ringY
      ringX += (pointerX - ringX) * 0.18
      ringY += (pointerY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      if (Math.abs(distanceX) > 0.1 || Math.abs(distanceY) > 0.1) {
        cursorFrame = window.requestAnimationFrame(animateRing)
      } else {
        ringX = pointerX
        ringY = pointerY
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
        cursorFrame = undefined
      }
    }

    const disableCursor = () => {
      if (!cursorEnabled) return
      cursorEnabled = false
      window.cancelAnimationFrame(cursorFrame)
      cursorFrame = undefined
      window.cancelAnimationFrame(targetFrame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', hideCursor)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
      document.documentElement.classList.remove('custom-cursor-active')
      hideCursor()
      ring.classList.remove('is-interactive', 'has-label', 'is-pressed')
      label.textContent = ''
    }

    const enableCursor = () => {
      if (cursorEnabled || !dot || !ring || !label) return
      cursorEnabled = true
      document.documentElement.classList.add('custom-cursor-active')
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerdown', onPointerDown)
      window.addEventListener('pointerup', onPointerUp)
      window.addEventListener('pointercancel', hideCursor)
      document.documentElement.addEventListener('mouseleave', hideCursor)
      window.addEventListener('blur', hideCursor)
    }

    const syncMotionPreference = () => {
      if (reduceMotionQuery.matches) {
        revealAll()
        disableCursor()
      } else if (finePointerQuery.matches) {
        enableCursor()
      }
    }

    const syncPointerPreference = () => {
      if (finePointerQuery.matches && !reduceMotionQuery.matches) enableCursor()
      else disableCursor()
    }

    observeReveals()
    syncPointerPreference()
    reduceMotionQuery.addEventListener('change', syncMotionPreference)
    finePointerQuery.addEventListener('change', syncPointerPreference)

    return () => {
      revealObserver?.disconnect()
      reduceMotionQuery.removeEventListener('change', syncMotionPreference)
      finePointerQuery.removeEventListener('change', syncPointerPreference)
      disableCursor()
      document.documentElement.classList.remove('has-js')
    }
  }, [])

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} />
      </span>
    </>
  )
}
