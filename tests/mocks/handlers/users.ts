import { rest } from "msw";

import { users } from "../../fixture/users";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST

const handlers = [
  // Handles a POST /login request
  rest.get(`${API_HOST}api/users`, (_, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ ...users })
    );
  }),
  rest.get(`${API_HOST}api/user`, (req, res, ctx) => {
    const id = Number(req.url.searchParams.get('id'))
    const user = users.data.find((item) => id === item.id) || null
    
    return res(
      ctx.status(200),
      ctx.json({ data: user })
    );
  }),
];

export default handlers