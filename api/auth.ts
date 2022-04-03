import axios from "./axios-config";

export interface LoginRequestBodyProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginRequestBodyProps) => {
  const response = await axios.post("api/login", { email, password });
  if (!response.data.data) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export { login };
