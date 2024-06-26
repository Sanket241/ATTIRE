import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Trusted from "../components/Trusted";
import Services from "../components/Services";
import Footer from "../components/Footer";
import FeatureProducts from "../components/FeatureProducts";

const Home = () => {
  const data = {
    name: "Attire",
  };
  return (
    <Wrapper>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
      <Footer />

    </Wrapper>
  );


};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;