import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    gap: 30px;
    font-family: ${({ theme }) => theme.typography.mainFont};
    color: ${({ theme }) => theme.colors.dark};
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border-radius: 10px;
    padding: 10px;
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavigationStyled;
