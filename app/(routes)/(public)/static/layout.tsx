import Footer from '@/app/components/structure/static/footer'
import Header from '@/app/components/structure/static/header'
import type ILayout from '@/app/types/layout'

const LayoutStatic = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default LayoutStatic
