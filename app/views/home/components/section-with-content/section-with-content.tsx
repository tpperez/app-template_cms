'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import type { IContentSection } from '@/app/views/home'

const SectionWithContent = ({ title, description, image }: IContentSection) => {
  const [typewriterText, setTypewriterText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  // typewriter effect for description
  useEffect(() => {
    // start typing effect after a small delay
    const startDelay = setTimeout(() => {
      setHasStarted(true)
      let index = 0
      const timer = setInterval(() => {
        if (index < description.length) {
          setTypewriterText(description.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
          // cursor blink after typing is done
          setInterval(() => {
            setShowCursor((prev) => {
              return !prev
            })
          }, 500)
        }
      }, 30) // speed of typing

      return () => {
        return clearInterval(timer)
      }
    }, 800) // delay before starting

    return () => {
      return clearTimeout(startDelay)
    }
  }, [description])

  return (
    <section className='bg-gradient-to-b from-white to-gray-100 px-4 py-20 sm:px-8 lg:px-10'>
      <div className='mx-auto max-w-5xl'>
        {/* hero-style centered content */}
        <div className='text-center'>
          <h1 className='mb-8 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
            {title}
          </h1>

          {/* image centered with fade-in effect */}
          <div className='mx-auto mb-8 max-w-md'>
            <div className='relative aspect-video w-full'>
              <Image
                src={image.url}
                alt={title}
                fill
                className='object-contain transition-opacity duration-1000'
                quality={85}
                priority
              />
            </div>
          </div>

          {/* description with typewriter effect */}
          <div className='mx-auto max-w-4xl'>
            <p className='min-h-[3rem] text-lg leading-relaxed text-gray-600 sm:text-xl'>
              {hasStarted && (
                <>
                  {typewriterText}
                  <span
                    className={`ml-1 inline-block h-5 w-0.5 bg-gray-600 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWithContent
