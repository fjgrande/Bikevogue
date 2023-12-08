import { http, HttpResponse } from "msw";
import bikesMocks from "./bikesMock";
import { addedBikeMock } from "./addedBikeMock";

const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/bikes`, () => {
    return HttpResponse.json(bikesMocks);
  }),
  http.delete(`${urlApi}/bikes/delete/6564a20f803b820996b50a00`, () => {
    return HttpResponse.json({});
  }),
  http.post(`${urlApi}/bikes/add`, () => {
    return HttpResponse.json({ bike: addedBikeMock });
  }),
];

export default handlers;
