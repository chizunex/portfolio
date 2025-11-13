'use client'

import {useEffect, useState, useRef} from 'react'

interface MonkeyTypeTypingProps {
  h1Text: string
  pTexts: string[]
  className?: string
}

// Common words for random generation
const COMMON_WORDS = [
  'the',
  'be',
  'to',
  'of',
  'and',
  'a',
  'in',
  'that',
  'have',
  'i',
  'it',
  'for',
  'not',
  'on',
  'with',
  'he',
  'as',
  'you',
  'do',
  'at',
  'this',
  'but',
  'his',
  'by',
  'from',
  'they',
  'we',
  'say',
  'her',
  'she',
  'or',
  'an',
  'will',
  'my',
  'one',
  'all',
  'would',
  'there',
  'their',
  'what',
  'so',
  'up',
  'out',
  'if',
  'about',
  'who',
  'get',
  'which',
  'go',
  'me',
  'when',
  'make',
  'can',
  'like',
  'time',
  'no',
  'just',
  'him',
  'know',
  'take',
  'people',
  'into',
  'year',
  'your',
  'good',
  'some',
  'could',
  'them',
  'see',
  'other',
  'than',
  'then',
  'now',
  'look',
  'only',
  'come',
  'its',
  'over',
  'think',
  'also',
  'back',
  'after',
  'use',
  'two',
  'how',
  'our',
  'work',
  'first',
  'well',
  'way',
  'even',
  'new',
  'want',
  'because',
  'any',
  'these',
  'give',
  'day',
  'most',
  'us',
  'computer',
  'science',
  'student',
  'working',
  'studying',
  'masters',
  'currently',
  'anything',
  'interest',
  'piques',
  'project',
  'code',
  'develop',
  'build',
  'create',
  'design',
  'learn',
  'explore',
  'discover',
  'innovate',
  'solve',
  'problem',
  'challenge',
]

const KEY_PRESS_FILES = [
  'nkcream-press-1.wav',
  'nkcream-press-2.wav',
  'nkcream-press-3.wav',
  'nkcream-press-4.wav',
  'nkcream-press-5.wav',
]

const BACKSPACE_FILE = 'nkcream-backspace.wav'

function generateRandomWords(count: number): string[] {
  const words: string[] = []
  for (let i = 0; i < count; i++) {
    words.push(COMMON_WORDS[Math.floor(Math.random() * COMMON_WORDS.length)])
  }
  return words
}

export default function MonkeyTypeTyping({h1Text, pTexts, className = ''}: MonkeyTypeTypingProps) {
  const [currentElementIndex, setCurrentElementIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isBeat, setIsBeat] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [wpm, setWpm] = useState(0)
  const [totalChars, setTotalChars] = useState(0)
  const [randomWords, setRandomWords] = useState<string[]>([])
  const randomWordSegments = randomWords.map((word, idx) =>
    idx === randomWords.length - 1 ? word : `${word} `,
  )
  const [completedInputs, setCompletedInputs] = useState<Map<number, string>>(new Map())
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiCenter, setConfettiCenter] = useState<{x: number; y: number} | null>(null)
  const [highlightStyle, setHighlightStyle] = useState<{
    left: number
    top: number
    width: number
    height: number
    opacity: number
  } | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const charRefs = useRef<Map<string, HTMLSpanElement>>(new Map())
  const startTimeRef = useRef<number | null>(null)
  const wpmIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const allTextsRef = useRef<string[]>([h1Text, ...pTexts])
  const totalCharsRef = useRef(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const keyPressBuffersRef = useRef<AudioBuffer[]>([])
  const backspaceBufferRef = useRef<AudioBuffer | null>(null)
  const audioLoadPromiseRef = useRef<Promise<void> | null>(null)

  const ensureAudioContext = () => {
    if (typeof window === 'undefined') {
      return null
    }
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & {webkitAudioContext?: typeof AudioContext}).webkitAudioContext
    if (!AudioContextClass) {
      return null
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass()
    }

    return audioContextRef.current
  }

  const loadAudioBuffer = async (path: string) => {
    try {
      const response = await fetch(path)
      if (!response.ok) {
        throw new Error(`Failed to load audio at ${path}`)
      }
      const arrayBuffer = await response.arrayBuffer()
      const ctx = ensureAudioContext()
      if (!ctx) {
        return null
      }
      if (ctx.state === 'suspended') {
        await ctx.resume().catch(() => {})
      }
      const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
      return audioBuffer
    } catch (error) {
      console.warn(`[MonkeyTypeTyping] Unable to load audio "${path}"`, error)
      return null
    }
  }

  const playAudioBuffer = (buffer: AudioBuffer | null | undefined, playbackRate = 1) => {
    const ctx = ensureAudioContext()
    if (!ctx || !buffer) {
      return false
    }

    const startPlayback = () => {
      const source = ctx.createBufferSource()
      const gain = ctx.createGain()
      const now = ctx.currentTime

      source.buffer = buffer
      source.playbackRate.setValueAtTime(playbackRate, now)
      gain.gain.setValueAtTime(0.9, now)
      gain.gain.linearRampToValueAtTime(0.0001, now + buffer.duration)

      source.connect(gain)
      gain.connect(ctx.destination)
      source.start(now)
      source.onended = () => {
        source.disconnect()
        gain.disconnect()
      }
    }

    if (ctx.state === 'suspended') {
      ctx
        .resume()
        .then(startPlayback)
        .catch(() => {})
    } else {
      startPlayback()
    }
    return true
  }

  const loadAllAudioBuffers = () => {
    if (typeof window === 'undefined') {
      return Promise.resolve()
    }

    if (keyPressBuffersRef.current.length > 0 && backspaceBufferRef.current) {
      return Promise.resolve()
    }

    if (!audioLoadPromiseRef.current) {
      audioLoadPromiseRef.current = Promise.all(
        KEY_PRESS_FILES.map((file) => loadAudioBuffer(`/sounds/${file}`)),
      )
        .then((buffers) => {
          keyPressBuffersRef.current = buffers.filter(
            (buffer): buffer is AudioBuffer => buffer !== null,
          )
          return loadAudioBuffer(`/sounds/${BACKSPACE_FILE}`).then((buffer) => {
            if (buffer) {
              backspaceBufferRef.current = buffer
            }
          })
        })
        .finally(() => {
          audioLoadPromiseRef.current = null
        })
    }

    return audioLoadPromiseRef.current
  }

  const playKeySound = (
    variant: 'press' | 'backspace',
    expectedChar?: string,
    actualChar?: string,
  ) => {
    const ctx = ensureAudioContext()
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {})
    }

    let playbackRate = variant === 'backspace' ? 0.85 : 1
    if (
      variant === 'press' &&
      expectedChar !== undefined &&
      actualChar !== undefined &&
      expectedChar !== actualChar
    ) {
      playbackRate = 0.95
    }

    if (variant === 'press' && keyPressBuffersRef.current.length === 0) {
      loadAllAudioBuffers()
        .then(() => {
          const buffers = keyPressBuffersRef.current
          if (buffers.length > 0) {
            const fallbackBuffer = buffers[Math.floor(Math.random() * buffers.length)]
            playAudioBuffer(fallbackBuffer, playbackRate)
          }
        })
        .catch(() => {})
      return
    }

    if (variant === 'backspace' && !backspaceBufferRef.current) {
      loadAllAudioBuffers()
        .then(() => {
          if (backspaceBufferRef.current) {
            playAudioBuffer(backspaceBufferRef.current, playbackRate)
          }
        })
        .catch(() => {})
      return
    }

    const buffers = keyPressBuffersRef.current
    const buffer =
      variant === 'press'
        ? buffers.length > 0
          ? buffers[Math.floor(Math.random() * buffers.length)]
          : null
        : backspaceBufferRef.current

    if (!buffer) {
      return
    }

    playAudioBuffer(buffer, playbackRate)
  }

  useEffect(() => {
    loadAllAudioBuffers().catch(() => {})
  }, [])

  // Reset function to restart the game
  const handleRetry = () => {
    setCurrentElementIndex(0)
    setUserInput('')
    setIsComplete(false)
    setIsBeat(false)
    setHasStarted(false)
    setWpm(0)
    setTotalChars(0)
    setRandomWords([])
    setCompletedInputs(new Map())
    setShowConfetti(false)
    setConfettiCenter(null)
    setHighlightStyle(null)
    startTimeRef.current = null
    totalCharsRef.current = 0
    allTextsRef.current = [h1Text, ...pTexts]
    charRefs.current.clear()

    // Clear WPM interval
    if (wpmIntervalRef.current) {
      clearInterval(wpmIntervalRef.current)
      wpmIntervalRef.current = null
    }

    // Re-focus input
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
  }

  useEffect(() => {
    // Auto-focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Re-focus when moving to next element
    if (inputRef.current && !isComplete) {
      inputRef.current.focus()
    }
  }, [currentElementIndex, isComplete])

  // Update WPM calculation when totalChars changes
  useEffect(() => {
    if (hasStarted && startTimeRef.current && totalChars > 0 && !isBeat) {
      const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000
      if (elapsedMinutes > 0.016) {
        // Only update if at least 1 second has passed
        const calculatedWpm = Math.round(totalChars / 5 / elapsedMinutes)
        if (calculatedWpm > 0) {
          setWpm(calculatedWpm)
        }
      }
    }
  }, [totalChars, hasStarted, isBeat])

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (wpmIntervalRef.current) {
        clearInterval(wpmIntervalRef.current)
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {})
      }
    }
  }, [])

  // Update highlight position when userInput changes
  useEffect(() => {
    if (isComplete) {
      setHighlightStyle(null)
      return
    }

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const originalTextCount = 1 + pTexts.length
      let currentText: string | undefined

      if (currentElementIndex < originalTextCount) {
        currentText = allTextsRef.current[currentElementIndex]
      } else {
        // Random word
        const wordIndex = currentElementIndex - originalTextCount
        currentText = randomWords[wordIndex]
      }

      if (!currentText) return

      const charIndex = userInput.length

      if (charIndex <= currentText.length && containerRef.current) {
        // Get the character element reference
        const charKey = `${currentElementIndex}-${charIndex}`
        const charElement = charRefs.current.get(charKey)

        if (charElement) {
          const containerRect = containerRef.current.getBoundingClientRect()
          const charRect = charElement.getBoundingClientRect()

          setHighlightStyle({
            left: charRect.left - containerRect.left,
            top: charRect.top - containerRect.top,
            width: charRect.width,
            height: charRect.height,
            opacity: 1,
          })
        } else if (charIndex === currentText.length && charIndex > 0) {
          // At the end of text, show highlight on a space after last char
          const lastCharKey = `${currentElementIndex}-${charIndex - 1}`
          const lastCharElement = charRefs.current.get(lastCharKey)

          if (lastCharElement) {
            const containerRect = containerRef.current.getBoundingClientRect()
            const lastCharRect = lastCharElement.getBoundingClientRect()

            setHighlightStyle({
              left: lastCharRect.right - containerRect.left,
              top: lastCharRect.top - containerRect.top,
              width: lastCharRect.width * 0.5,
              height: lastCharRect.height,
              opacity: 1,
            })
          }
        } else if (charIndex === 0) {
          // At the start, get first character
          const firstCharKey = `${currentElementIndex}-0`
          const firstCharElement = charRefs.current.get(firstCharKey)

          if (firstCharElement) {
            const containerRect = containerRef.current.getBoundingClientRect()
            const firstCharRect = firstCharElement.getBoundingClientRect()

            setHighlightStyle({
              left: firstCharRect.left - containerRect.left,
              top: firstCharRect.top - containerRect.top,
              width: firstCharRect.width,
              height: firstCharRect.height,
              opacity: 1,
            })
          }
        }
      }
    })
  }, [userInput, currentElementIndex, isComplete, randomWords, pTexts])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Start tracking when user starts typing
    if (!hasStarted && value.length > 0) {
      setHasStarted(true)
      startTimeRef.current = Date.now()

      // Start WPM calculation interval
      wpmIntervalRef.current = setInterval(() => {
        if (startTimeRef.current && totalCharsRef.current > 0 && !isBeat) {
          const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000
          if (elapsedMinutes > 0.016) {
            // Only update if at least 1 second has passed
            const calculatedWpm = Math.round(totalCharsRef.current / 5 / elapsedMinutes)
            if (calculatedWpm > 0) {
              setWpm(calculatedWpm)
            }
          }
        }
      }, 100) // Update every 100ms for smooth counter
    }

    // Update total characters typed (only count forward progress)
    if (value.length > userInput.length) {
      const addedChars = value.length - userInput.length
      setTotalChars((prev) => {
        const newTotal = prev + addedChars
        totalCharsRef.current = newTotal
        return newTotal
      })
    }

    const originalTextCount = 1 + pTexts.length // h1 + paragraphs
    const isTypingOriginal = currentElementIndex < originalTextCount

    if (isTypingOriginal) {
      // Typing original text (h1 or paragraphs)
      const currentText = allTextsRef.current[currentElementIndex]

      if (value.length < userInput.length) {
        playKeySound('backspace')
      } else if (value.length > userInput.length) {
        const diff = value.length - userInput.length
        if (diff === 1) {
          const newChar = value[value.length - 1]
          const expectedChar = currentText?.[value.length - 1]
          playKeySound('press', expectedChar, newChar)
        } else {
          playKeySound('press')
        }
      }

      setUserInput(value)

      // Check if current element is complete (exact match) or if user has typed the full length
      const isExactMatch = value === currentText
      const hasTypedFullLength = value.length >= currentText.length

      if (isExactMatch || hasTypedFullLength) {
        if (currentElementIndex < originalTextCount - 1) {
          // Store the completed input before moving on
          setCompletedInputs((prev) => {
            const newMap = new Map(prev)
            newMap.set(currentElementIndex, value)
            return newMap
          })
          // Move to next original element
          setCurrentElementIndex(currentElementIndex + 1)
          setUserInput('')
        } else {
          // Original paragraphs complete - generate random words to replace p text
          if (randomWords.length === 0) {
            // Generate fewer words to fit better in container (approximately 10-12 words per line)
            const words = generateRandomWords(22)
            const wordSegments = words.map((word, idx) =>
              idx === words.length - 1 ? word : `${word} `,
            )
            setRandomWords(words)
            // Add random words to allTextsRef as individual word segments (with trailing spaces)
            allTextsRef.current.push(...wordSegments)
          }
          // Store the completed input before moving on
          setCompletedInputs((prev) => {
            const newMap = new Map(prev)
            newMap.set(currentElementIndex, value)
            return newMap
          })
          // Move to first random word (which will replace the paragraphs)
          setCurrentElementIndex(originalTextCount)
          setUserInput('')
        }
      }
    } else {
      // Typing random words
      const wordIndex = currentElementIndex - originalTextCount
      const currentSegment = randomWordSegments[wordIndex]

      if (currentSegment) {
        if (value.length < userInput.length) {
          playKeySound('backspace')
        } else if (value.length > userInput.length) {
          const diff = value.length - userInput.length
          if (diff === 1) {
            const newChar = value[value.length - 1]
            const expectedChar = currentSegment[value.length - 1]
            playKeySound('press', expectedChar, newChar)
          } else {
            playKeySound('press')
          }
        }

        setUserInput(value)

        // Check if current word is complete (exact match) or if user has typed the full length
        const isExactMatch = value === currentSegment
        const hasTypedFullLength = value.length >= currentSegment.length

        if (isExactMatch || hasTypedFullLength) {
          // Store the completed input before moving on
          setCompletedInputs((prev) => {
            const newMap = new Map(prev)
            newMap.set(currentElementIndex, value)
            return newMap
          })
          if (wordIndex < randomWordSegments.length - 1) {
            // Move to next word
            setCurrentElementIndex(currentElementIndex + 1)
            setUserInput('')
          } else {
            // First batch of random words complete - beat the game!
            if (!isBeat && randomWords.length === 22) {
              setIsBeat(true)
              setIsComplete(true)

              // Calculate center of container for confetti
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setConfettiCenter({
                  x: rect.left + rect.width / 2,
                  y: rect.top + rect.height / 2,
                })
              }

              setShowConfetti(true)
              // Stop WPM counter
              if (wpmIntervalRef.current) {
                clearInterval(wpmIntervalRef.current)
              }
              // Trigger confetti explosion
              setTimeout(() => {
                setShowConfetti(false)
              }, 3000) // Confetti lasts 3 seconds
            } else {
              // All words in current batch complete - generate more (shouldn't happen if beat)
              const newWords = generateRandomWords(22)
              const newSegments = newWords.map((word, idx) =>
                idx === newWords.length - 1 ? word : `${word} `,
              )
              setRandomWords((prev) => [...prev, ...newWords])
              allTextsRef.current.push(...newSegments)
              // Move to first new word
              setCurrentElementIndex(currentElementIndex + 1)
              setUserInput('')
            }
          }
        }
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (userInput.length === 0) {
        e.preventDefault()
        if (currentElementIndex > 0) {
          const prevIndex = currentElementIndex - 1
          const prevExpected = allTextsRef.current[prevIndex] ?? ''
          const prevCompleted = completedInputs.get(prevIndex) ?? prevExpected
          const truncated = prevCompleted.slice(0, -1)

          setCurrentElementIndex(prevIndex)
          setUserInput(truncated)
          setCompletedInputs((prev) => {
            const newMap = new Map(prev)
            if (truncated.length > 0) {
              newMap.set(prevIndex, truncated)
            } else {
              newMap.delete(prevIndex)
            }
            return newMap
          })
          setTotalChars((prev) => {
            const next = Math.max(0, prev - 1)
            totalCharsRef.current = next
            return next
          })
          if (isBeat) {
            setIsBeat(false)
            setIsComplete(false)
            setShowConfetti(false)
          }
          playKeySound('backspace')
        }
        return
      }
    }
    // Allow escape to blur (but will re-focus)
    if (e.key === 'Escape') {
      e.preventDefault()
      inputRef.current?.blur()
    }
  }

  const renderTextWithFeedback = (
    text: string,
    index: number,
    isH1: boolean,
    isRandomWord: boolean = false,
  ) => {
    const renderCharacter = (
      char: string,
      className: string,
      key: number,
      refCallback?: (el: HTMLSpanElement | null) => void,
    ) => (
      <span
        key={key}
        ref={refCallback}
        className={`typing-char inline-block min-w-[0.6ch] px-[1px] ${className}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    )

    if (index < currentElementIndex) {
      // Already completed - show with error highlighting preserved
      const completedInput = completedInputs.get(index) || ''
      return (
        <>
          {text.split('').map((char, i) => {
            const isCorrect = i < completedInput.length ? char === completedInput[i] : true
            return renderCharacter(
              char,
              isCorrect ? (isH1 ? 'text-white' : 'text-zinc-400') : 'text-red-500 bg-red-500/20',
              i,
            )
          })}
          {/* Show any extra characters that were typed as errors */}
          {completedInput.length > text.length && (
            <>
              {completedInput
                .slice(text.length)
                .split('')
                .map((char, i) =>
                  renderCharacter(char, 'text-red-500 bg-red-500/20', text.length + i),
                )}
            </>
          )}
        </>
      )
    } else if (index === currentElementIndex) {
      // Currently typing - show feedback
      const hasExtraChars = userInput.length > text.length
      return (
        <>
          {text.split('').map((char, i) => {
            const charKey = `${index}-${i}`
            if (i < userInput.length && i < text.length) {
              // Already typed - show correct/incorrect
              const isCorrect = char === userInput[i]
              return renderCharacter(
                char,
                isCorrect ? (isH1 ? 'text-white' : 'text-zinc-400') : 'text-red-500 bg-red-500/20',
                i,
                (el) => {
                  if (el) charRefs.current.set(charKey, el)
                  else charRefs.current.delete(charKey)
                },
              )
            } else {
              // Current or future character - dimmed
              return renderCharacter(char, isH1 ? 'text-white/50' : 'text-zinc-100/40', i, (el) => {
                if (el) charRefs.current.set(charKey, el)
                else charRefs.current.delete(charKey)
              })
            }
          })}
          {/* Show extra characters as errors */}
          {hasExtraChars && (
            <>
              {userInput
                .slice(text.length)
                .split('')
                .map((char, i) =>
                  renderCharacter(char, 'text-red-500 bg-red-500/20', text.length + i),
                )}
            </>
          )}
        </>
      )
    } else {
      // Not yet reached - show dimmed
      return (
        <>
          {text
            .split('')
            .map((char, i) =>
              renderCharacter(char, isH1 ? 'text-white/50' : 'text-zinc-100/40', i),
            )}
        </>
      )
    }
  }

  // Calculate which random words to display in which paragraph
  const originalTextCount = 1 + pTexts.length // h1 + paragraphs

  // Split random words into two lines (paragraphs)
  const wordsPerLine = Math.ceil(randomWords.length / 2)
  const line1WordArray = randomWords.slice(0, wordsPerLine)
  const line2WordArray = randomWords.slice(wordsPerLine)

  // Confetti colors
  const confettiColors = [
    '#f4f4f5', // zinc-100 (white)
    '#ef4444', // red
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // amber
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#f97316', // orange
    '#84cc16', // lime
  ]

  // Confetti particles - evenly distributed in a circle
  const confettiParticles = Array.from({length: 100}, (_, i) => ({
    id: i,
    angle: (i / 100) * 360, // Evenly distribute angles in a circle
    delay: Math.random() * 0.3,
    duration: 2 + Math.random() * 1.5,
    distance: 300 + Math.random() * 400, // Wider radius
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
  }))

  const renderRandomWord = (word: string, globalIdx: number) => {
    const segment = randomWordSegments[globalIdx] ?? word
    return (
      <span key={globalIdx} className="inline-block">
        {renderTextWithFeedback(segment, originalTextCount + globalIdx, false, true)}
      </span>
    )
  }

  return (
    <div className={`${className} relative z-10`} ref={containerRef}>
      {/* Confetti Explosion */}
      {showConfetti && confettiCenter && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {confettiParticles.map((particle) => {
            const angleRad = (particle.angle * Math.PI) / 180
            const x = Math.cos(angleRad) * particle.distance
            const y = Math.sin(angleRad) * particle.distance
            return (
              <div
                key={particle.id}
                className="absolute confetti-particle"
                style={
                  {
                    left: `${confettiCenter.x}px`,
                    top: `${confettiCenter.y}px`,
                    width: '8px',
                    height: '4px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: particle.color,
                    '--confetti-x': `${x}px`,
                    '--confetti-y': `${y}px`,
                    '--confetti-rotate': `${particle.angle + 720}deg`,
                    '--confetti-duration': `${particle.duration}s`,
                    '--confetti-delay': `${particle.delay}s`,
                  } as React.CSSProperties
                }
              />
            )
          })}
        </div>
      )}

      {/* WPM Counter - positioned absolutely to not shift layout */}
      {hasStarted && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center mb-4"
          style={{marginTop: '-15px'}}
        >
          {/* Retry Icon - positioned absolutely above WPM to not shift layout */}
          {isBeat && (
            <div className="mb-2">
              <button
                onClick={handleRetry}
                className="inline-flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                aria-label="Retry"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="text-2xl md:text-3xl font-light text-zinc-400">
            <span className="text-zinc-300">{wpm}</span>
            <span className="text-zinc-500 ml-2">WPM</span>
          </div>
        </div>
      )}

      {/* Invisible input for typing - positioned off-screen but still focusable */}
      {!isBeat && (
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className="fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-auto z-50"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          onBlur={(e) => {
            // Re-focus after a short delay to allow clicking links
            if (!isComplete && !isBeat) {
              setTimeout(() => {
                if (inputRef.current && document.activeElement?.tagName !== 'A') {
                  inputRef.current.focus()
                }
              }, 100)
            }
          }}
        />
      )}

      {/* Sliding highlight element */}
      {highlightStyle && !isComplete && !isBeat && (
        <div
          className={`absolute pointer-events-none z-10 ${
            currentElementIndex === 0 ? 'animate-pulse-highlight' : 'animate-pulse-highlight-dark'
          }`}
          style={{
            left: `${highlightStyle.left}px`,
            top: `${highlightStyle.top}px`,
            width: `${highlightStyle.width}px`,
            height: `${highlightStyle.height}px`,
            opacity: highlightStyle.opacity,
            transition:
              'left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      )}

      <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight relative">
        {renderTextWithFeedback(h1Text, 0, true)}
      </h1>
      <div className="relative min-h-[140px] flex flex-col items-center justify-center gap-3 mb-8">
        {/* Show original paragraphs OR random words, not both */}
        {randomWords.length === 0 ? (
          // Original paragraphs
          pTexts.map((text, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center"
            >
              {renderTextWithFeedback(text, index + 1, false)}
            </p>
          ))
        ) : (
          // Random words displayed in two paragraphs (replacing original paragraphs)
          <>
            <p
              className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {line1WordArray.map((word, wordIdx) => renderRandomWord(word, wordIdx))}
            </p>
            {line2WordArray.length > 0 && (
              <p
                className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed text-center"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {line2WordArray.map((word, wordIdx) =>
                  renderRandomWord(word, wordsPerLine + wordIdx),
                )}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
