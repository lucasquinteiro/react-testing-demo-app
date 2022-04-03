import { rest } from "msw";
import { successLoginResponse } from "../../fixture/auth";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST

 const handlers = [
  // Handles a POST /login request
  rest.post(
    `${API_HOST}api/login`,
    (_, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ ...successLoginResponse })
      );
    }
  ),
];

export default handlers