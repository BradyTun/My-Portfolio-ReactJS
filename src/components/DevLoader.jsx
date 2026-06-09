import { useEffect, useMemo, useState } from 'react'

const STAGES = [
  'Booting local runtime',
  'Starting dev servers',
  'Compiling interface modules',
  'Warming API endpoints',
  'Syncing portfolio assets',
  'Launching experience',
]

export default function DevLoader({ duration = 5000 }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()

    const ticker = window.setInterval(() => {
      const nextElapsed = performance.now() - startedAt
      setElapsed(Math.min(duration, nextElapsed))
    }, 60)

    return () => {
      window.clearInterval(ticker)
    }
  }, [duration])

  const progress = Math.min(100, Math.round((elapsed / duration) * 100))
  const activeIndex = Math.min(
    STAGES.length - 1,
    Math.floor((elapsed / duration) * STAGES.length),
  )

  const visibleStages = useMemo(
    () => STAGES.slice(0, Math.max(1, activeIndex + 1)),
    [activeIndex],
  )

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#05070B] text-[#F3F6FC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,178,74,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(240,178,74,0.12),transparent_50%)]" />
      <div className="loader-grid absolute inset-0" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-center px-6 py-10 sm:px-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#F0B24A]">
          kyawkokotun.com / portfolio boot sequence
        </p>
        <h1 className="mb-8 max-w-2xl font-serif text-3xl leading-tight text-[#F3F6FC] sm:text-5xl">
          Spinning up your experience...
        </h1>

        <section className="rounded-2xl border border-[#F3F6FC24] bg-[#090C12] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.55)] sm:p-6">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-[#9EA6B7]">
            <span className="h-2 w-2 rounded-full bg-[#F05959]" />
            <span className="h-2 w-2 rounded-full bg-[#F0B24A]" />
            <span className="h-2 w-2 rounded-full bg-[#59D88D]" />
            <span className="ml-3 uppercase tracking-[0.2em] text-[#768097]">
              terminal
            </span>
          </div>

          <div className="space-y-2 font-mono text-sm sm:text-base">
            {visibleStages.map((stage, index) => {
              const isCurrent = index === activeIndex

              return (
                <p key={stage} className={isCurrent ? 'text-[#F3F6FC]' : 'text-[#9EA6B7]'}>
                  <span className="mr-2 text-[#59D88D]">{isCurrent ? '>' : '✓'}</span>
                  {stage}
                  {isCurrent ? <span className="loader-caret ml-1">_</span> : null}
                </p>
              )
            })}
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[#768097]">
              <span>build progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#131822]">
              <div className="loader-bar h-full rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}