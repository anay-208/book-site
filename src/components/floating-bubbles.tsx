"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubbles: Bubble[] = []
  const bubbleCount = 15
  const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 10,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.2 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i]

        ctx.fillStyle = b.color
        ctx.globalAlpha = b.opacity
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2)
        ctx.fill()

        b.x += b.speedX
        b.y += b.speedY

        // Bounce off edges
        if (b.x > canvas.width + b.size) {
          b.x = -b.size
        } else if (b.x < -b.size) {
          b.x = canvas.width + b.size
        }

        if (b.y > canvas.height + b.size) {
          b.y = -b.size
        } else if (b.y < -b.size) {
          b.y = canvas.height + b.size
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />
}
