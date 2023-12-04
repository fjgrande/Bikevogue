import { BikesStructure } from "../../store/features/bikes/types";
import BikeCardStyled from "./BikeCardStyled";

interface BikeProps {
  bike: BikesStructure;
}

const BikeCard = ({
  bike: { image, model, brand, modality, price },
}: BikeProps): React.ReactElement => {
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
    </BikeCardStyled>
  );
};

export default BikeCard;
