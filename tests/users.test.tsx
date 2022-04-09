import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import localStorageMock from "./utils/localStorage";
import { Promise } from "bluebird";

import { successLoginResponse } from "./fixture/auth";
import { users } from "./fixture/users";
import UsersPage from "../pages/users";

const mockRouter = {
  route: "/users",
  pathname: "/users",
  push: jest.fn(),
  query: {},
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("UsersPage", () => {
  beforeEach(() => {
    localStorageMock.setItem("token", successLoginResponse.data.Token);
  });

  test("should show all the users fetched from the API", async () => {
    const { findByTestId, getByText, debug } = render(<UsersPage />);

    // You can make sure it is rendering the title because getByText will fail if it cannot find "Users"
    // NOTICE that you CAN use regex here!
    getByText(/users/i);

    const assertRow = async (user: any) => {
      // We need to use findByTestId instead of getByTestId
      // so that the test waits for user's request to resolve
      // Actually findBy* queries do many retries if they cannot find the element right away

      await findByTestId(`user-item-${user.id}`);
      const userNameText = await findByTestId(`user-name-${user.id}`);
      expect(userNameText).toHaveTextContent(user.name);

      // prints to console how our component looks at any given time.
      // debug()
    };

    // A simple map will generate overlapping act() calls
    // so its better to run these assertions sequentially and not concurrently

    // const promises = users.data.map(async (user) => {
    //   // we verify each row is rendering correctly
    //   await findByTestId(`user-item-${user.id}`);
    //   const userNameText = await findByTestId(`user-name-${user.id}`);
    //   expect(userNameText).toHaveTextContent(user.name);
    // });
    // await Promise.all(promises);

    // we can use bluebird's .mapSeries to achieve this
    await Promise.mapSeries(users.data, assertRow);
  });

  test("should redirect to user detail", async () => {
    const { findByTestId } = render(<UsersPage />);
    const user = users.data[0];
    await findByTestId(`user-item-${user.id}`);
    const linkButton = await findByTestId(`link-button-${user.id}`);

    expect(linkButton).toHaveTextContent("View Details");

    await waitFor(async () => {
      await userEvent.click(linkButton);
    });

    expect(mockRouter.push).toBeCalled();
    expect(mockRouter.push).toBeCalledTimes(1);
    expect(mockRouter.push).toBeCalledWith(`/users/${user.id}`);
  });
});
