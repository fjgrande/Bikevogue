import { useNavigate, useParams } from "react-router-dom";
import useBikesApi from "../../hooks/useBikesApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import UpdateBikePageStyled from "./UpdateBikePageStyled";
import { BikesData, BikesStructure } from "../../store/features/bikes/types";
import BikeForm from "../../components/BikeForm/BikeForm";
import { useEffect } from "react";
import { loadSelectedBikeActionCreator } from "../../store/features/bikes/bikesSlice";

const UpdateBikePage = (): React.ReactElement => {
  const bikeUpdate = useAppSelector((state) => state.bikesState.selectedBike);
  const { editBike, getMyBike } = useBikesApi();
  const navigate = useNavigate();
  const { _id } = useParams();
  const dispatch = useAppDispatch();

  const onSubmit = async (bikeUpdate: BikesData | BikesStructure) => {
    await editBike(bikeUpdate as BikesStructure);

    navigate("/home");
  };

  useEffect(() => {
    (async () => {
      const bike = await getMyBike(_id as string);

      dispatch(loadSelectedBikeActionCreator(bike as BikesStructure));

      return bike;
    })();
  }, [dispatch, getMyBike, _id]);

  return (
    <UpdateBikePageStyled>
      <h1 className="page-title">modify your bike</h1>
      <BikeForm
        onSubmit={onSubmit}
        bike={bikeUpdate}
        textButton="modify"
        isEditMode={true}
      />
    </UpdateBikePageStyled>
  );
};

export default UpdateBikePage;
