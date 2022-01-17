import axios from "./axios-config";

export interface LoginRequestBodyProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginRequestBodyProps) => {
  const response = await axios.post("/authaccount/login", { email, password });
  return response.data;
};

export { login };
