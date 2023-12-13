import { useNavigate } from "react-router-dom";
import useBikesApi from "../../hooks/useBikesApi";
import { useAppSelector } from "../../store/hooks";
import UpdateBikePageStyled from "./UpdateBikePageStyled";
import { BikesData, BikesStructure } from "../../store/features/bikes/types";
import BikeForm from "../../components/BikeForm/BikeForm";

const UpdateBikePage = (): React.ReactElement => {
  const bikeUpdate = useAppSelector((state) => state.bikesState.selectedBike);
  const { editBike } = useBikesApi();
  const navigate = useNavigate();

  const onSubmit = async (bikeUpdate: BikesData | BikesStructure) => {
    await editBike(bikeUpdate as BikesStructure);

    navigate("/home");
  };

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
