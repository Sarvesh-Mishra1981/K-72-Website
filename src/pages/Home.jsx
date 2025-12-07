import React from 'react'
import Video from '../components/home/Video'
import HomeHero from '../components/home/HomeHero'
import BottomText from '../components/home/BottomText'

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Video className="w-full h-full" />
      </div>
      <div className="min-h-screen w-full relative uppercase flex flex-col justify-between z-10">
        <HomeHero />
        <BottomText />
      </div>
    </div>
  )
}

export default Home
