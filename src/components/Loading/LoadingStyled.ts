import styled from "styled-components";

const LoadingStyled = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: #000c;

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      width: 100%;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      margin: auto;
      color: #fff;
    }
  }
`;

export default LoadingStyled;
