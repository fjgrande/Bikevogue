import styled from "styled-components";

const BikeDetailPageStyled = styled.section`
  .page-title {
    text-transform: uppercase;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .bikeDetail {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 15px;
      padding: 20px;
      background-color: ${({ theme }) => theme.colors.secondaryBackground};
      color: ${({ theme }) => theme.colors.dark};
    }

    &__detail {
      font-size: 16px;
      text-transform: capitalize;
      text-decoration: underline;
    }

    &__details {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      padding: 5px;
    }

    &__image {
      object-fit: contain;
      padding-bottom: 10px;
    }
  }
`;

export default BikeDetailPageStyled;
