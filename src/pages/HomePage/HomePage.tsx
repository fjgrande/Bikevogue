import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadBikesActionCreator } from "../../store/features/bikes/bikesSlice";
import BikesList from "../../components/BikesList/BikesList";
import useBikesApi from "../../hooks/useBikesApi";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";
import { toast } from "react-toastify";

const HomePage = (): React.ReactElement => {
  const { getBikes } = useBikesApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const bikes = await getBikes();

        dispatch(loadBikesActionCreator(bikes.bikes));
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, Can't get bikes", {
          style: { backgroundColor: "#000", color: "#fff" },
        });
      }
    })();
  }, [dispatch, getBikes]);

  return (
    <HomePageStyled>
      <h1 className="page-title">your favorite bikes</h1>
      <BikesList />
    </HomePageStyled>
  );
};

export default HomePage;
