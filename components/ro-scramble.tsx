
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface ScrambleTextProps {
  text: string
  className?: string
  speed?: number
  scrambleIntensity?: number
}

const RotatingScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  speed = 1.5,
  scrambleIntensity = 5
}) => {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const iterationRef = useRef(0)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'


  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const scrambleText = () => {
      intervalRef.current = setInterval(() => {
        setDisplayText(prevText =>
          prevText
            .split('')
            .map((letter, index) => {
              if (index < iterationRef.current) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join('')
        )

        if (iterationRef.current >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
        }

        iterationRef.current += 1 / scrambleIntensity
      }, 20 / speed)
    }

    scrambleText()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, speed, scrambleIntensity])

  return (
    <motion.span
      className={`inline-block font-geist   ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  )
}

export default RotatingScrambleText

