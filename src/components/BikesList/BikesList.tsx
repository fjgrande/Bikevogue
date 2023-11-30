import { BikesStructure } from "../../store/features/bikes/types";
import BikeCard from "../BikeCard/BikeCard";
import BikesListStyled from "./BikesListStyled";

interface BikesListProps {
  bikes: BikesStructure[];
}

const BikesList = ({ bikes }: BikesListProps): React.ReactElement => {
  return (
    <BikesListStyled>
      {bikes.map((bike) => (
        <li key={bike._id}>
          <BikeCard bike={bike} />
        </li>
      ))}
    </BikesListStyled>
  );
};

export default BikesList;
