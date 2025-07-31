import { Roboto } from 'next/font/google'
import { headers } from 'next/headers'

import type { Metadata } from 'next'

import { LANGUAGE } from '@/app/constants/config'
import { HttpProvider } from '@/app/services/http'
import ILayout from '@/app/types/layout'

import '@/app/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Base Template',
    default: 'Next.js Base Template',
  },
  description: 'Here you can find our defitions and examples.',
}

const LayoutRoot = async ({ children }: ILayout) => {
  const headersList = headers()
  const nonce = (await headersList).get('x-nonce') || undefined

  return (
    <html lang={LANGUAGE}>
      <head>
        {nonce && (
          <meta
            name='csp-nonce'
            content={nonce}
          />
        )}
      </head>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
        suppressHydrationWarning={true}
      >
        <HttpProvider>{children}</HttpProvider>
      </body>
    </html>
  )
}

export default LayoutRoot
