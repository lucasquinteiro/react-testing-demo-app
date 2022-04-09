import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

import { credentials } from "./fixture/auth";
import * as authModule from "../api/auth";
import RegisterPage from "../pages/register";

const mockRouter = {
  route: "/register",
  pathname: "/register",
  push: jest.fn(),
  query: {},
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("Register", () => {
  const getInputs = (getByTestId: any) => {
    const nameInput = getByTestId("text-field-name");
    const emailInput = getByTestId("text-field-email");
    const passwordInput = getByTestId("text-field-password");
    const submitButton = getByTestId("button-submit-register");

    return {
      nameInput,
      emailInput,
      passwordInput,
      submitButton,
    };
  };

  test("should render all the inputs (using getBy)", () => {
    const { getByTestId } = render(<RegisterPage />);
    getInputs(getByTestId);
  });

  test("should show errors and button disabled", async () => {
    const { getByTestId, findByTestId, findByText } = render(<RegisterPage />);
    const { emailInput, nameInput, passwordInput, submitButton } = getInputs(getByTestId);

    // we input invalid data in each input
    await waitFor(async () => {
      await userEvent.type(nameInput, "Lucas", { delay: 0.5 });
      await userEvent.type(emailInput, "asd", { delay: 0.5 });
      await userEvent.type(passwordInput, "asd", { delay: 0.5 });
      await userEvent.click(submitButton);
    });

    await waitFor(async () => {
      await findByText("Invalid email");
      await findByText("Too Short!");
    })

    await waitFor(async () => {
      await userEvent.clear(emailInput);
      await userEvent.clear(passwordInput);
    });

    const passwordError = await findByTestId("text-field-error-password");
    const emailError = await findByTestId("text-field-error-email");

    await waitFor(() => expect(passwordError).toHaveTextContent("Too Short!"));
    await waitFor(() => expect(emailError).toHaveTextContent("Required"));
  });

  test("should submit the login request correctly", async () => {
    const { getByTestId } = render(<RegisterPage />);
    const { emailInput, passwordInput,nameInput,  submitButton } = getInputs(getByTestId);
    jest.spyOn(authModule, "register");

    await waitFor(async () => {
      await userEvent.type(nameInput, "Lucas", { delay: 0.5 });
      await userEvent.type(emailInput, credentials.email, { delay: 0.5 });
      await userEvent.type(passwordInput, credentials.password, {
        delay: 0.5,
      });
      await userEvent.click(submitButton);
    });

    await waitFor(() => expect(authModule.register).toBeCalledWith({...credentials, name: 'Lucas'}));
    await waitFor(() => expect(mockRouter.push).toBeCalledWith("/"));
  });
});
