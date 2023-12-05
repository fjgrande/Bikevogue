import useBikesApi from "../../hooks/useBikesApi";
import { deleteBikeActionCreator } from "../../store/features/bikes/bikesSlice";
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
  const { deleteBike } = useBikesApi();

  const deleteBikeById = (bikeId: string) => {
    deleteBike(bikeId);
    dispatch(deleteBikeActionCreator(bikeId));
  };

  return (
    <BikeCardStyled className="bike-card">
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
      <Button
        text="delete"
        actionOnClick={() => {
          deleteBikeById(_id);
        }}
      />
      <Button text="modify" />
    </BikeCardStyled>
  );
};

export default BikeCard;
