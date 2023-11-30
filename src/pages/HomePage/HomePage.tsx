import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadBikesActionCreator } from "../../store/features/bikes/bikesSlice";
import bikesMocks from "../../mocks/bikesMock";
import BikesList from "../../components/BikesList/BikesList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBikesActionCreator(bikesMocks));
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h2 className="page-title">your favorite bikes</h2>
      <BikesList bikes={bikesMocks} />
    </HomePageStyled>
  );
};

export default HomePage;
