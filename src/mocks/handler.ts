import { http, HttpResponse } from "msw";
import { mockBikes } from "../setupTests";
const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/bikes`, () => {
    return HttpResponse.json(mockBikes);
  }),
];

export default handlers;
