// Loading Spinner Options - Choose one to use in LoadingProvider

// Option 1: Minimalist Rotating Circle with Gap (Recommended)
export function SpinnerCircle() {
  return (
    <div className="relative">
      <div className="w-16 h-16 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

// Option 2: Three Pulsing Dots
export function SpinnerDots() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-zinc-100 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-3 h-3 bg-zinc-100 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-3 h-3 bg-zinc-100 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  )
}

// Option 3: Minimalist Rotating Square
export function SpinnerSquare() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-zinc-100 border-t-transparent animate-spin" />
    </div>
  )
}

// Option 4: Expanding Circles (Ripple Effect)
export function SpinnerRipple() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-zinc-100 rounded-full animate-ping opacity-75" />
      <div className="absolute inset-0 border-2 border-zinc-100 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
    </div>
  )
}

// Option 5: Minimalist Bars (Equalizer Style)
export function SpinnerBars() {
  return (
    <div className="flex items-end gap-1 h-12">
      <div className="w-2 bg-zinc-100 animate-pulse" style={{ height: '20%', animationDelay: '0s' }} />
      <div className="w-2 bg-zinc-100 animate-pulse" style={{ height: '40%', animationDelay: '0.1s' }} />
      <div className="w-2 bg-zinc-100 animate-pulse" style={{ height: '60%', animationDelay: '0.2s' }} />
      <div className="w-2 bg-zinc-100 animate-pulse" style={{ height: '80%', animationDelay: '0.3s' }} />
      <div className="w-2 bg-zinc-100 animate-pulse" style={{ height: '100%', animationDelay: '0.4s' }} />
    </div>
  )
}

// Option 6: Minimalist Rotating Line
export function SpinnerLine() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-t-2 border-zinc-100 rounded-full animate-spin" />
    </div>
  )
}

// Option 7: Minimalist Hexagon
export function SpinnerHexagon() {
  return (
    <div className="relative w-16 h-16">
      <svg
        className="w-16 h-16 text-zinc-100 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L18 6.5V17.5L12 22L6 17.5V6.5L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

// Option 8: Minimalist Orbiting Dots
export function SpinnerOrbit() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-zinc-100 rounded-full transform -translate-x-1/2 animate-spin" style={{ transformOrigin: '50% 200%' }} />
      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-zinc-100 rounded-full transform -translate-x-1/2 animate-spin" style={{ transformOrigin: '50% -100%', animationDelay: '0.5s' }} />
    </div>
  )
}

