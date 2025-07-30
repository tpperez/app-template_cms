import Image from 'next/image'

import type { ICardSection } from '@/app/views/home'

const SectionWithIcons = ({ title, description, items }: ICardSection) => {
  return (
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <h2 className='mb-4 text-center text-4xl font-bold text-gray-900'>
        {title}
      </h2>
      <p className='mx-auto mb-16 max-w-4xl text-center text-lg text-gray-600'>
        {description}
      </p>

      <div className='grid gap-8 lg:grid-cols-2'>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className='flex items-start space-x-4 rounded-xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6 transition-all duration-300 hover:shadow-lg'
            >
              <div className='flex-shrink-0'>
                <div className='flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gray-900 to-gray-700'>
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={24}
                    height={24}
                    className='object-contain brightness-0 grayscale invert filter'
                    quality={85}
                  />
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                  {item.title}
                </h3>
                <p className='leading-relaxed text-gray-600'>
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionWithIcons
