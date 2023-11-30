import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { BikesStructure } from "./store/features/bikes/types";
import bikesMocks from "./mocks/bikesMock";
import { server } from "./mocks/node";

export let mockBikes: BikesStructure[] = bikesMocks;

beforeAll(() => {
  mockBikes = bikesMocks;
  return server.listen();
});

afterEach(() => {
  mockBikes = bikesMocks;
  return server.listen();
});

afterAll(() => {
  server.close();
});
