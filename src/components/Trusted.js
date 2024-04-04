import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">

          <div className="slide">
            <img
              src="https://nvidia.wd5.myworkdayjobs.com/wday/cxs/nvidia/NVIDIAExternalCareerSite/sidebarimage/e64d788b7b8d01e4c34e99996322ec00"
              alt="trusted-brands"
              height="50px"
            />
          </div>
          <div className="slide">
            <img
              src="https://cionews.co.in/wp-content/uploads/2022/05/Microsoft-Logo.png"
              alt="trusted-brands"

            />
          </div>
          <div className="slide">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*GRhcmiHwrJkIv2024vIh2A.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/Bank-of-America-Logo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://ik.imagekit.io/kkbzr2uz4cp/stock/nse/tcs.png"
              alt="trusted-brands"
            />
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;