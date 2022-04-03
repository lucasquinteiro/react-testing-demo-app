import axios from "./axios-config";

const getUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.data.data) {
    throw new Error(response.data.message);
  }
  return response.data.data;
};

const getUser = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`api/user?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

export { getUsers, getUser };
