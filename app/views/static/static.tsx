import Benefits from './components/benefits'
import GetStarted from './components/get-started'
import Hero from './components/hero'
import Stack from './components/stack'
import Stats from './components/stats'

const ViewStatic = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      <Hero />
      <Stats />
      <Stack />
      <Benefits />
      <GetStarted />
    </div>
  )
}

export default ViewStatic
