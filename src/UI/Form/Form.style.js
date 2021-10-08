import styled from "styled-components";

const Div = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    > div {
      > input {
        padding: 1em;
        width: 100%;
        border-radius: 50px;
        outline: none;
        border: 1px solid hsl(223, 100%, 88%);
        padding-left: 3em;
        ::placeholder {
          color: hsl(0, 0%, 59%);
        }
        @media only screen and (orientation: landscape) {
          width: 22em;
          padding-left: 2em;
          margin-bottom: 0.5em;
        }
        @media only screen and (min-width: 1280px) {
          width: 35em;
        }
        &.error {
          border: 1px solid hsl(354, 100%, 66%);
        }
      }
      em {
        font-size: 0.7rem;
        color: hsl(354, 100%, 66%);
        font-weight: 600;
        @media only screen and (orientation: landscape) {
          text-align: left;
          align-self: flex-start;
          margin-left: 2em;
        }
      }
      @media only screen and (orientation: landscape) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    button {
      padding: 1em;
      border-radius: 50px;
      outline: none;
      border: none;
      background-color: hsl(223, 87%, 63%);
      color: white;
      font-weight: 600;
      box-shadow: 1px 1px 10px 1px hsl(223, 87%, 63%);
      &:hover {
        box-shadow: 1px 1px 15px 1px hsl(223, 87%, 63%);
        background: hsl(223, 100%, 88%);
      }
      @media only screen and (orientation: landscape) {
        width: 15em;
        align-self: flex-start;
      }
      @media only screen and (min-width: 1280px) {
        width: 12em;
      }
    }
    @media only screen and (orientation: landscape) {
      flex-direction: row;
      justify-content: center;
      gap: 0.75em;
      width: 80%;
      margin: auto;
    }
  }
`;

export default Div;
