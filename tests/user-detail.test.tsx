import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import localStorageMock from "./utils/localStorage";


import { successLoginResponse } from "./fixture/auth";
import { users } from "./fixture/users";
import UserDetailsPage from "../pages/users/[id]";

const mockRouter = {
  route: "/users/:id",
  pathname: "/users/:id",
  push: jest.fn(),
  query: { id: 23 },
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("UserDetailsPage", () => {
  beforeEach(() => {
    localStorageMock.setItem("token", successLoginResponse.data.Token);
  });

  test("should show all the user data matching with the user id", async () => {
    const { findByText } = render(<UserDetailsPage />);
    const testUser = users.data.find(({id}) => id === 23)

    await findByText(`Name: ${testUser?.name}`)
    await findByText(`Email: ${testUser?.email}`)
    await findByText(`Location: ${testUser?.location}`)
  });
});
