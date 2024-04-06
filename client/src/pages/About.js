import React from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalProductContext } from '../context/productContext';
import Trusted from '../components/Trusted'
import Footer from '../components/Footer'

const About = () => {
  const {myName} = useGlobalProductContext();
  const data = {
    name: "Attire About",
  };
  return (
    <>
    {myName}
      <HeroSection myData={data} />
      <Trusted />
      <Footer />

    </>
  )
}

export default About