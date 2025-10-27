import { ReactLenis, type LenisRef } from "lenis/react"
import { useRef, useEffect } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time)
      requestAnimationFrame(update)
    }
    const rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef }>
      {children}
    </ReactLenis>
  )
}
