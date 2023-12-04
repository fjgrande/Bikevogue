import { useCallback } from "react";
import axios from "axios";
import { BikesStructure } from "../store/features/bikes/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

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

  return { getBikes };
};

export default useBikesApi;
