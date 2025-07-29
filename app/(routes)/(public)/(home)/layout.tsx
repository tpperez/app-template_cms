import FooterContainer from '@/app/components/structure/footer'
import HeaderContainer from '@/app/components/structure/header'
import type ILayout from '@/app/types/layout'

const LayoutHome = ({ children }: ILayout) => {
  return (
    <>
      <HeaderContainer />
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
        <main>{children}</main>
      </div>
      <FooterContainer />
    </>
  )
}

export default LayoutHome
