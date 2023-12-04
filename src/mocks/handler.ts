import { http, HttpResponse } from "msw";
import bikesMocks from "./bikesMock";

const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/bikes`, () => {
    return HttpResponse.json(bikesMocks);
  }),
];

export default handlers;
