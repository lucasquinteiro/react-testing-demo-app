import "@testing-library/jest-dom";
import { loadEnvConfig } from '@next/env'
import { server } from "../mocks/msw-server";
import localStorageMock from "../utils/localStorage";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../components/Navbar')

beforeAll(() => {
  server.listen();
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
});

afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => server.close());
