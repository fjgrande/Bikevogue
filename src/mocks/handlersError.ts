import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

const handlersError = [
  http.get(`${urlApi}/bikes`, () => HttpResponse.error()),
  http.delete(`${urlApi}/bikes/delete/6564a20f803b820996b50a00`, () =>
    HttpResponse.error(),
  ),
  http.post(`${urlApi}/bikes/add`, () => HttpResponse.error()),
];

export default handlersError;
