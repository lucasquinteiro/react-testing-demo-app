import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import LoginPage from "../pages/index";

describe("LoginPage", () => {
  const getInputs = (getByTestId: any) => {
    const emailInput = getByTestId("text-field-email");
    const passwordInput = getByTestId("text-field-password");
    const submitButton = getByTestId("button-submit-login");

    return {
      emailInput,
      passwordInput,
      submitButton,
    };
  };

  test("should render all the inputs", () => {
    const { getByTestId } = render(<LoginPage />);
    const { emailInput, passwordInput, submitButton } = getInputs(getByTestId);

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  test("should show errors and button disabled", async () => {
    const { getByTestId, findByTestId } = render(<LoginPage />);
    const { emailInput, passwordInput, submitButton } = getInputs(getByTestId);

    // we input invalid data in each input
    await waitFor(async () => {
      await userEvent.type(emailInput, "asd", { delay: 0.5 });
      await userEvent.type(passwordInput, "asd", { delay: 0.5 });
      await userEvent.click(submitButton);

      const passwordError = await findByTestId("text-field-error-password");
      const emailError = await findByTestId("text-field-error-email");

      expect(passwordError).toHaveTextContent("Too Short!");
      expect(emailError).toHaveTextContent("Invalid email");
      expect(submitButton).toBeDisabled();
    });

    // we clear the inputs and should see a "Required" error for each one
    await waitFor(async () => {
      await userEvent.clear(emailInput);
      await userEvent.clear(passwordInput);

      const passwordError = await findByTestId("text-field-error-password");
      const emailError = await findByTestId("text-field-error-email");

      expect(passwordError).toHaveTextContent("Required");
      expect(emailError).toHaveTextContent("Required");
    });
  });

  test("should submit the login request correctly", async () => {
    const { getByTestId, findByTestId } = render(<LoginPage />);
    const { emailInput, passwordInput, submitButton } = getInputs(getByTestId);
    const testCredentials = { email: "user@test.com", password: "Test1234" };

    await waitFor(async () => {
      await userEvent.type(emailInput, testCredentials.email, { delay: 0.5 });
      await userEvent.type(passwordInput, testCredentials.password, {
        delay: 0.5,
      });
    });
  });
});
