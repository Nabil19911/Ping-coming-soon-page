import styled from "styled-components";

const FooterUI = styled.footer`
  width: 100%;
  .logo__container {
    display: flex;
    justify-content: center;
    gap: 0.7em;
    margin-bottom: 1em;
    .logo__wrapper {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border: 1px solid hsl(223, 100%, 88%);
        border-radius: 50%;
        &:hover {
          background: hsl(223, 87%, 63%);
          border: none;
        }
        &:hover svg path {
          fill: white;
        }
      }
    }
  }
  .copyRights small {
    font-size: 0.7rem;
    color: hsl(0, 0%, 59%);
  }
`;

export default FooterUI;
