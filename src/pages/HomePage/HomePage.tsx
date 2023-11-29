import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadBikesActionCreator } from "../../store/features/bikes/bikesSlice";
import bikesMocks from "../../mocks/bikesMock";

const HomePage = (): React.ReactElement => {
  const bikesState = useAppSelector((bike) => bike.bikesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBikesActionCreator(bikesMocks));
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h2 className="page-title">your favorite bikes</h2>

      {bikesState.bikes.map((bike) => (
        <h2>{bike.brand}</h2>
      ))}
    </HomePageStyled>
  );
};

export default HomePage;
