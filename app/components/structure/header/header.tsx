'use client'

import { useState } from 'react'

import Link from 'next/link'

import Logo from '@/app/components/ui/logo'

import type { IHeaderProps } from './header.type'

const Header = ({ data }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Logo
            variant='dark'
            text={data.siteName}
          />

          {/* desktop navigation */}
          <nav className='hidden space-x-8 lg:flex'>
            {data.menuItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className='text-gray-600 transition-colors hover:text-gray-900'
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* mobile menu button */}
          <button
            className='text-gray-600 lg:hidden'
            onClick={() => {
              return setIsMenuOpen(!isMenuOpen)
            }}
          >
            <div className='relative flex h-6 w-6 flex-col items-center justify-center'>
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className='border-b border-gray-200 bg-white/90 py-4 shadow-lg backdrop-blur-md lg:hidden'>
          <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
            <nav className='flex flex-col space-y-4'>
              {data.menuItems.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    className='text-gray-600 transition-colors hover:text-gray-900'
                    onClick={() => {
                      return setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
