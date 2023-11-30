import { useCallback } from "react";
import axios from "axios";
import { BikesStructure } from "../store/features/bikes/types";

const useBikesApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getBikes = useCallback(async () => {
    const { data: bikes } = await axios.get<{
      bikes: BikesStructure[];
    }>("/bikes");

    return bikes;
  }, []);

  return { getBikes };
};

export default useBikesApi;
