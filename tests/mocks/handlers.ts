import { rest } from "msw";
import { successLoginResponse } from "../fixture/auth";

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
];
