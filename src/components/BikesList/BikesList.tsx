import { BikesStructure } from "../../store/features/bikes/types";
import { useAppSelector } from "../../store/hooks";
import BikeCard from "../BikeCard/BikeCard";
import BikesListStyled from "./BikesListStyled";

const BikesList = (): React.ReactElement => {
  const bikes = useAppSelector((state) => state.bikesState.bikes);
  return (
    <BikesListStyled>
      {bikes.map((bike: BikesStructure) => (
        <li key={bike._id}>
          <BikeCard bike={bike} />
        </li>
      ))}
    </BikesListStyled>
  );
};

export default BikesList;
