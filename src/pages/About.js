import React from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalProductContext } from '../context/productContext';

const About = () => {
  const {myName} = useGlobalProductContext();
  const data = {
    name: "Attire About",
  };
  return (
    <>
    {myName}
      <HeroSection myData={data} />

    </>
  )
}

export default About