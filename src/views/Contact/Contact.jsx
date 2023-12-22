import React from 'react'
import ContactHero from '../../components/ContactComponents/ContactHer'
import ContactText from '../../components/ContactComponents/ContactText'
import Message from '../../components/ContactComponents/Message'
import ShopFeature from '../../components/ShopComponents/ShopFeature'

const Contact = () => {
  return (
    <>
    <ContactHero/>
    <ContactText/>
    <Message/>
    <ShopFeature marginbottom={30}/>
    </>
  )
}

export default Contact