'use client'

import {useEffect, useRef, useState} from 'react'

const INNER_SIZE = 8
const OUTER_SIZE = 32
const SMOOTHING = 0.06
const INTERACTIVE_SELECTORS = 'a, button, [data-cursor="interactive"], [data-interactive="true"]'

export default function CustomCursor() {
  const [isActive, setIsActive] = useState(false)

  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({x: 0, y: 0})
  const followerPosition = useRef({x: 0, y: 0})
  const animationFrameRef = useRef<number | null>(null)
  const visibilityRef = useRef(false)
  const didActivateRef = useRef(false)
  const hasMovedRef = useRef(false)
  const interactiveHoverCountRef = useRef(0)
  const interactiveElementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) {
      return
    }

    didActivateRef.current = true
    setIsActive(true)
    document.body.classList.add('custom-cursor-active')

    const updateCursorPosition = (x: number, y: number) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - INNER_SIZE / 2}px, ${
          y - INNER_SIZE / 2
        }px, 0)`
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const {clientX, clientY} = event
      mousePosition.current = {x: clientX, y: clientY}

      if (!hasMovedRef.current) {
        hasMovedRef.current = true
        followerPosition.current = {x: clientX, y: clientY}
        updateCursorPosition(clientX, clientY)
        if (followerRef.current) {
          followerRef.current.style.transform = `translate3d(${clientX - OUTER_SIZE / 2}px, ${
            clientY - OUTER_SIZE / 2
          }px, 0)`
        }
      } else {
        updateCursorPosition(clientX, clientY)
      }

      if (!visibilityRef.current) {
        visibilityRef.current = true
        document.body.classList.add('custom-cursor-visible')
      }
    }

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        visibilityRef.current = false
        document.body.classList.remove('custom-cursor-visible')
      }
    }

    const handleMouseEnter = () => {
      if (!visibilityRef.current) {
        visibilityRef.current = true
        document.body.classList.add('custom-cursor-visible')
      }
    }

    const handleInteractiveEnter = () => {
      interactiveHoverCountRef.current += 1
      document.body.classList.add('custom-cursor-interactive')
    }

    const handleInteractiveLeave = () => {
      interactiveHoverCountRef.current = Math.max(0, interactiveHoverCountRef.current - 1)
      if (interactiveHoverCountRef.current === 0) {
        document.body.classList.remove('custom-cursor-interactive')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.add('custom-cursor-pressed')
    }

    const handleMouseUp = () => {
      document.body.classList.remove('custom-cursor-pressed')
    }

    const interactiveElements = Array.from(
      document.querySelectorAll<HTMLElement>(INTERACTIVE_SELECTORS),
    )
    interactiveElementsRef.current = interactiveElements

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleInteractiveEnter)
      element.addEventListener('mouseleave', handleInteractiveLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('blur', handleMouseUp)

    const animate = () => {
      followerPosition.current.x +=
        (mousePosition.current.x - followerPosition.current.x) * SMOOTHING
      followerPosition.current.y +=
        (mousePosition.current.y - followerPosition.current.y) * SMOOTHING

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${
          followerPosition.current.x - OUTER_SIZE / 2
        }px, ${followerPosition.current.y - OUTER_SIZE / 2}px, 0)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('blur', handleMouseUp)

      interactiveElementsRef.current.forEach((element) => {
        element.removeEventListener('mouseenter', handleInteractiveEnter)
        element.removeEventListener('mouseleave', handleInteractiveLeave)
      })

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      document.body.classList.remove('custom-cursor-visible')
      document.body.classList.remove('custom-cursor-active')
      document.body.classList.remove('custom-cursor-interactive')
      document.body.classList.remove('custom-cursor-pressed')
    }
  }, [])

  if (!isActive) {
    return null
  }

  return (
    <>
      <div
        ref={followerRef}
        className="custom-cursor-follow pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{transform: 'translate3d(-9999px, -9999px, 0)'}}
      >
        <div className="custom-cursor-follow-inner h-8 w-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm" />
      </div>
      <div
        ref={cursorRef}
        className="custom-cursor-point pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{transform: 'translate3d(-9999px, -9999px, 0)'}}
      >
        <div className="custom-cursor-point-inner h-2 w-2 rounded-full bg-white" />
      </div>
    </>
  )
}
