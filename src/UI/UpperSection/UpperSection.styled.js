import styled from "styled-components";

const UpperSection = styled.section`
  height: auto;
  margin-bottom: 3em;
  img {
    width: 3em;
    margin-bottom: 2em;
    @media only screen and (orientation: landscape) {
      margin-bottom: 1em;
    }
    @media only screen and (min-width: 1280px) {
      margin-bottom: 1.5em;
      width: 3.3em;
    }
  }
  > div {
    margin-bottom: 1.5em;
    h3 {
      font-weight: 300;
      color: hsl(0, 0%, 59%);
      margin-bottom: 1em;
      span {
        color: black;
        font-weight: 700;
      }
      @media only screen and (orientation: landscape) {
        font-size: 2rem;
        margin-bottom: 0.5em;
      }
      @media only screen and (min-width: 1280px) {
        font-size: 2.2rem;
        margin-bottom: 0.4em;
      }
    }
    p {
      font-size: 0.8rem;
      color: hsl(0, 0%, 59%);
      font-weight: 600;
      @media only screen and (min-width: 1280px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export default UpperSection;
