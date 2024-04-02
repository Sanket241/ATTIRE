import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "Attire",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      <Footer />

    </>
  );


};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;