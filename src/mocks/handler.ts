import { http, HttpResponse } from "msw";
import bikesMocks from "./bikesMock";
import { addedBikeMock, updateBikeMock } from "./addedBikeMock";

const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/bikes`, () => {
    return HttpResponse.json({ bikes: bikesMocks });
  }),
  http.delete(`${urlApi}/bikes/delete/6564a20f803b820996b50a00`, () => {
    return HttpResponse.json({});
  }),
  http.post(`${urlApi}/bikes/add`, () => {
    return HttpResponse.json({ bike: addedBikeMock });
  }),
  http.get(`${urlApi}/bikes/:_id`, () => {
    return HttpResponse.json({ myBike: addedBikeMock });
  }),
  http.put(`${urlApi}/bikes`, () => {
    return HttpResponse.json({ editedBike: updateBikeMock });
  }),
];

export default handlers;
