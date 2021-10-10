import styled from "styled-components";

const Main = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 1440px;
  text-align: center;
  margin: 5em auto 2em auto;
  @media only screen and (min-width: 1280px) {
    margin: 2em auto;
  }
  @media only screen and (min-width: 3840px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Main;
