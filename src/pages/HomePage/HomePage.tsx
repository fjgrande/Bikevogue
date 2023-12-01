import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadBikesActionCreator } from "../../store/features/bikes/bikesSlice";
import BikesList from "../../components/BikesList/BikesList";
import useBikesApi from "../../hooks/useBikesApi";

const HomePage = (): React.ReactElement => {
  const { getBikes } = useBikesApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const bikes = await getBikes();
      dispatch(loadBikesActionCreator(bikes.bikes));
    })();
  }, [dispatch, getBikes]);

  return (
    <HomePageStyled>
      <h2 className="page-title">your favorite bikes</h2>
      <BikesList />
    </HomePageStyled>
  );
};

export default HomePage;
