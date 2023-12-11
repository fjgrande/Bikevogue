import { useNavigate } from "react-router-dom";
import BikeForm from "../../components/BikeForm/BikeForm";
import useBikesApi from "../../hooks/useBikesApi";
import { addBikesActionCreator } from "../../store/features/bikes/bikesSlice";
import { BikesData } from "../../store/features/bikes/types";
import { useAppDispatch } from "../../store/hooks";
import AddBikePageStyled from "./AddBikePageStyled";

const AddBikePage = (): React.ReactElement => {
  const { addBike } = useBikesApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (bikeData: BikesData) => {
    const newBike = await addBike(bikeData);

    if (newBike) {
      dispatch(addBikesActionCreator(newBike));

      navigate("/home");
    }
  };

  return (
    <AddBikePageStyled>
      <h1 className="page-title">add your favorite bikes</h1>
      <BikeForm onSubmit={onSubmit} />
    </AddBikePageStyled>
  );
};

export default AddBikePage;
