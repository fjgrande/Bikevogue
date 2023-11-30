import styled from "styled-components";

const BikeCardStyled = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 15px;
  width: 315px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 25px #00000080;
  padding: 10 px;

  .bike-card {
    padding: 10px;
    display: flex;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    &__detail {
      font-size: 18px;
      text-transform: capitalize;
      text-decoration: underline;
    }

    &__details {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      padding: 10px;
    }

    &__image {
      object-fit: contain;
      padding-bottom: 10px;
    }
  }
`;

export default BikeCardStyled;
