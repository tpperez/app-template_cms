import Image from 'next/image'

import type { ICardSection } from '@/app/views/home'

const SectionWithCards = ({ title, description, items }: ICardSection) => {
  // temporary fourth static item until cms update
  const staticItem = {
    id: 'temp-4',
    title: 'Suporte & Consultoria',
    description:
      'Suporte técnico especializado e consultoria para projetos complexos',
    image: {
      url: '/placeholder-icon.svg', // placeholder until cms update
    },
  }

  // combine cms items with static item to have 4 total
  const allItems = [...items, staticItem]

  return (
    <section className='bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            {title}
          </h2>
          <p className='mx-auto max-w-3xl text-lg text-gray-600'>
            {description}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {allItems.map((item, index) => {
            // different emoji for each card if no image
            const defaultEmojis = ['🚀', '💎', '🔧', '🤝']
            const emoji = defaultEmojis[index] || '⭐'

            return (
              <div
                key={item.id}
                className='group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-500 hover:border-gray-300 hover:shadow-2xl'
              >
                {/* background icon in top right corner */}
                <div className='absolute -right-4 -top-4 flex h-24 w-24 rotate-[20deg] items-center justify-center rounded-full bg-gradient-to-br from-gray-400 to-gray-600 opacity-20 grayscale'>
                  {item.image?.url &&
                  item.image.url !== '/placeholder-icon.svg' ? (
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      width={32}
                      height={32}
                      className='text-4xl brightness-0 grayscale invert filter transition-all duration-500 group-hover:scale-150 group-hover:opacity-100'
                      quality={85}
                    />
                  ) : (
                    <span className='text-4xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100'>
                      {emoji}
                    </span>
                  )}
                </div>

                {/* content */}
                <div className='relative'>
                  <div className='mb-6'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {item.title}
                    </h3>
                  </div>
                  <div className='text-gray-700'>
                    <p className='leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* bottom highlight similar to stack section */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white px-8 py-4 shadow-lg'>
            <div className='mr-3 flex h-8 w-8 rotate-[20deg] items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800 grayscale'>
              <span className='text-lg'>⚡</span>
            </div>
            <span className='font-medium text-gray-800'>
              Soluções personalizadas para cada necessidade do seu negócio
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWithCards
