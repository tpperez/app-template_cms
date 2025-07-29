import SectionWithCards from './components/section-with-cards'
import SectionWithContent from './components/section-with-content'
import SectionWithIcons from './components/section-with-icons'
import type { IHomeViewProps } from './home.type'

const ViewHome = ({ data }: IHomeViewProps) => {
  const { sectionone, sectiontwo, sectionthree } = data

  return (
    <>
      <SectionWithContent {...sectiontwo} />

      <SectionWithCards
        title={sectionone.title}
        description={sectionone.description}
        items={sectionone.items}
      />

      <SectionWithIcons
        title={sectionthree.title}
        description={sectionthree.description}
        items={sectionthree.items}
      />
    </>
  )
}

export default ViewHome
