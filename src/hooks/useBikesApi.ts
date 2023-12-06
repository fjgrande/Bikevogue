import { useCallback } from "react";
import axios from "axios";
import { BikesStructure } from "../store/features/bikes/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { toast } from "react-toastify";

const useBikesApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getBikes = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: bikes } = await axios.get<{
      bikes: BikesStructure[];
    }>("/bikes");

    dispatch(hideLoadingActionCreator());

    return bikes;
  }, [dispatch]);

  const deleteBike = useCallback(
    async (bikeId: string) => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/bikes/delete/${bikeId}`);

        toast.success("Great! your Bike has been deleted!", {
          style: { backgroundColor: "#000", color: "#fff" },
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, we couldn't delete your Bike!", {
          style: { backgroundColor: "#000", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  return { getBikes, deleteBike };
};

export default useBikesApi;
