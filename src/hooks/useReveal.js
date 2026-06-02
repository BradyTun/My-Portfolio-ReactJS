import { useEffect, useRef, useState } from 'react'

// ── useReveal ───────────────────────────────────────────────────────────────
// Returns a ref + boolean. The boolean flips to true once the element scrolls
// into view, enabling a one-time fade-up entrance. Respects reduced motion via
// the CSS layer (animations collapse to ~0ms there).
export function useReveal({ threshold = 0.18, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
