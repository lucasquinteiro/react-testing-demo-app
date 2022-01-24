import { rest } from "msw";
import { successLoginResponse } from "../fixture/auth";
import { users } from "../fixture/users";

export const handlers = [
  // Handles a POST /login request
  rest.post(
    "http://restapi.adequateshop.com/api/authaccount/login",
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ ...successLoginResponse })
      );
    }
  ),
  rest.get("http://restapi.adequateshop.com/api/users", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ ...users })
    );
  }),
];
