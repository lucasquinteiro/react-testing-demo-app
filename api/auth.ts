import axios from "./axios-config";

export interface LoginRequestBodyProps {
  email: string;
  password: string;
}

export interface RegisterRequestBodyProps extends LoginRequestBodyProps {
  name: string;
}

const login = async ({ email, password }: LoginRequestBodyProps) => {
  const response = await axios.post("api/login", { email, password });
  if (!response.data.data) {
    throw new Error(response.data.message);
  }
  return response.data;
};

const register = async ({ name, email, password }: RegisterRequestBodyProps) => {
  const response = await axios.post("api/register", { name, email, password });
  if (!response.data.data) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export { login, register };
