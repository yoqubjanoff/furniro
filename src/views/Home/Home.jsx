import React from 'react'
import HeroSection from '../../components/HomePagesComponents/HeroSection/HeroSection'
import RangeSection from '../../components/HomePagesComponents/RangeSection/RangeSection'
import OurProduct from '../../components/HomePagesComponents/OurProduct/OurProduct'
import MiddleSection from '../../components/HomePagesComponents/MiddleSection/MiddleSection'
import FurnitureSection from '../../components/HomePagesComponents/FurnitureSection/FurnitureSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <RangeSection/>
        <OurProduct/>
        <MiddleSection/>
        <FurnitureSection/>
    </>
  )
}

export default Home