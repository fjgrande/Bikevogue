import styled from "styled-components";

const BikeFormStyled = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  .form {
    &__container {
      background-color: ${({ theme }) => theme.colors.secondaryBackground};
      color: ${({ theme }) => theme.colors.dark};
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      padding: 20px;
      gap: 10px;
    }

    &__input {
      border-radius: 5px;
      border: none;
      height: 20px;
      padding: 20px 16px;
    }

    &__label {
      text-transform: capitalize;
      display: inline-block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
`;
export default BikeFormStyled;
