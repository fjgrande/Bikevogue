import { Link, useNavigate } from "react-router-dom";
import useBikesApi from "../../hooks/useBikesApi";
import {
  deleteBikeActionCreator,
  loadSelectedBikeActionCreator,
} from "../../store/features/bikes/bikesSlice";
import { BikesStructure } from "../../store/features/bikes/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import BikeCardStyled from "./BikeCardStyled";

interface BikeProps {
  bike: BikesStructure;
}

const BikeCard = ({
  bike: { image, model, brand, modality, price, _id },
}: BikeProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteBike, getMyBike } = useBikesApi();
  const navigate = useNavigate();

  const deleteBikeById = () => {
    deleteBike(_id);
    dispatch(deleteBikeActionCreator(_id));
  };

  const handleOnModify = async () => {
    const selectedBike = await getMyBike(_id);
    if (selectedBike) {
      dispatch(loadSelectedBikeActionCreator(selectedBike));
    }

    navigate("/edit-bike");
  };

  return (
    <BikeCardStyled className="bike-card">
      <Link to={`/home/${_id}`}>
        <div className="bike-card__info">
          <img
            className="bike-card__image"
            src={image}
            alt={model}
            width="280"
            height="280"
          />
          <h2 className="bike-card__details">{model}</h2>
          <dl className="bike-card__details">
            <dt className="bike-card__detail">brand:</dt>
            <dd>{brand}</dd>
          </dl>
          <dl className="bike-card__details">
            <dt className="bike-card__detail">modality:</dt>
            <dd>{modality}</dd>
          </dl>
          <dl className="bike-card__details">
            <dt className="bike-card__detail">price:</dt>
            <dd>{price}€</dd>
          </dl>
        </div>
      </Link>
      <Button text="delete" actionOnClick={deleteBikeById} />
      <Button text="modify" actionOnClick={handleOnModify} />
    </BikeCardStyled>
  );
};

export default BikeCard;
