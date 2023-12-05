import { http, HttpResponse } from "msw";
import bikesMocks from "./bikesMock";

const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/bikes`, () => {
    return HttpResponse.json(bikesMocks);
  }),
  http.delete(`${urlApi}/bikes/delete/6564a20f803b820996b50a00`, () => {
    return HttpResponse.json({});
  }),
];

export default handlers;
