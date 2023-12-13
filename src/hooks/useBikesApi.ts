import { useCallback } from "react";
import axios from "axios";
import { BikesData, BikesStructure } from "../store/features/bikes/types";
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
    try {
      dispatch(showLoadingActionCreator());

      const { data: bikes } = await axios.get<{
        bikes: BikesStructure[];
      }>("/bikes");

      dispatch(hideLoadingActionCreator());

      return bikes;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      throw new Error((error as Error).message);
    }
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

  const addBike = useCallback(
    async (newBike: BikesData): Promise<BikesStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { bike },
        } = await axios.post<{ bike: BikesStructure }>(`/bikes/add`, newBike);

        dispatch(hideLoadingActionCreator());

        toast.success("Great! your Bike has been created!", {
          style: { backgroundColor: "#363636", color: "#fff" },
        });

        return bike;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, we couldn't create your Bike!", {
          style: { backgroundColor: "#363636", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  const getMyBike = useCallback(
    async (_id: string): Promise<BikesStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { myBike },
        } = await axios.get<{ myBike: BikesStructure }>(`/bikes/${_id}`);

        dispatch(hideLoadingActionCreator());

        return myBike;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Can't show this bike now!", {
          style: { backgroundColor: "#000", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  const editBike = useCallback(
    async (bikeData: BikesStructure): Promise<BikesStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { editedBike },
        } = await axios.put<{ editedBike: BikesStructure }>("/bikes", bikeData);

        dispatch(hideLoadingActionCreator());

        toast.success("Great! your Bike has been modified!", {
          style: { backgroundColor: "#363636", color: "#fff" },
        });

        return editedBike;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, we couldn't modified your Bike!", {
          style: { backgroundColor: "#363636", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  return { getBikes, deleteBike, addBike, getMyBike, editBike };
};

export default useBikesApi;
