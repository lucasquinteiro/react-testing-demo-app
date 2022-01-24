import "@testing-library/jest-dom";
import { server } from "../mocks/msw-server";
import localStorageMock from "../utils/localStorage";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

beforeAll(() => {
  server.listen();
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
});
afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});
afterAll(() => server.close());
