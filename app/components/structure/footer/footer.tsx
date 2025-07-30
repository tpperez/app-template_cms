import Link from 'next/link'

import Logo from '@/app/components/ui/logo'

import type { IFooterProps } from './footer.type'

const Footer = ({ data }: IFooterProps) => {
  // divide links into groups for 3-column layout
  const midPoint = Math.ceil(data.footerlinks.length / 2)
  const firstColumnLinks = data.footerlinks.slice(0, midPoint)
  const secondColumnLinks = data.footerlinks.slice(midPoint)

  return (
    <footer className='bg-black bg-gradient-to-r py-12 text-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-3'>
          {/* first column - logo and description */}
          <div>
            <Logo
              variant='light'
              text='App Template'
              className='mb-4'
            />
            <p className='text-gray-300'>
              Next.js based template with modern stack and production-ready
              setup
            </p>
          </div>

          {/* second column - first half of links */}
          <div>
            <h3 className='mb-4 font-semibold'>Navegação</h3>
            <ul className='space-y-2 text-gray-300'>
              {firstColumnLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className='transition-colors hover:text-white'
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* third column - second half of links */}
          <div>
            <h3 className='mb-4 font-semibold'>Links Úteis</h3>
            <ul className='space-y-2 text-gray-300'>
              {secondColumnLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className='transition-colors hover:text-white'
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* cms copyright */}
        <div className='mt-10 border-t border-gray-700 pt-8 text-center text-gray-400'>
          <p>{data.copyrighttext}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
