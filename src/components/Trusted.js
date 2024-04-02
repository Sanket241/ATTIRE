import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">

          <div className="slide">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png"
              alt="trusted-brands"
              height="50px"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_960_720.png"
              alt="trusted-brands"

            />
          </div>
          <div className="slide">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/031/737/227/small/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png"
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
              src="https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png"
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