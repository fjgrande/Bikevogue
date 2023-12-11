import { useParams } from "react-router-dom";
import BikeDetailPageStyled from "./BikeDetailPageStyled";
import useBikesApi from "../../hooks/useBikesApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { loadSelectedBikeActionCreator } from "../../store/features/bikes/bikesSlice";

const BikeDetailPage = (): React.ReactElement => {
  const { _id } = useParams();
  const myBike = useAppSelector((state) => state.bikesState.selectedBike);
  const dispatch = useAppDispatch();
  const { getMyBike } = useBikesApi();

  useEffect(() => {
    (async () => {
      const bike = await getMyBike(_id as string);

      if (bike) {
        dispatch(loadSelectedBikeActionCreator(bike));
      }
    })();
  }, [dispatch, getMyBike, _id]);

  return (
    <BikeDetailPageStyled>
      <h1 className="page-title">bike details</h1>
      <div className="bikeDetail__info">
        <img
          className="bikeDetail__image"
          src={myBike.image}
          alt={myBike.model}
          width="260"
          height="260"
        />
        <h2 className="bikeDetail__details">{myBike.model}</h2>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">brand:</dt>
          <dd>{myBike.brand}</dd>
        </dl>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">modality:</dt>
          <dd>{myBike.modality}</dd>
        </dl>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">material:</dt>
          <dd>{myBike.material}</dd>
        </dl>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">component:</dt>
          <dd>{myBike.component}</dd>
        </dl>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">size:</dt>
          <dd>{myBike.size}</dd>
        </dl>
        <dl className="bikeDetail__details">
          <dt className="bikeDetail__detail">price:</dt>
          <dd>{myBike.price}€</dd>
        </dl>
      </div>
    </BikeDetailPageStyled>
  );
};

export default BikeDetailPage;
