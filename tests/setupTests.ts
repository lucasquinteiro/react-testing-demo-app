import "@testing-library/jest-dom";
import { worker } from "./mocks/msw-server";

beforeAll(() => worker.listen());
afterEach(() => worker.resetHandlers());
afterAll(() => worker.close());
