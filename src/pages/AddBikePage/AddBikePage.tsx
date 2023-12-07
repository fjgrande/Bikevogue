import BikeForm from "../../components/BikeForm/BikeForm";

import AddBikePageStyled from "./AddBikePageStyled";

const AddBikePage = (): React.ReactElement => {
  return (
    <AddBikePageStyled>
      <h1 className="page-title">add your favorite bikes</h1>
      <BikeForm />
    </AddBikePageStyled>
  );
};

export default AddBikePage;
