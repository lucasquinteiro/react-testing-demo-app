import axios from "./axios-config";

const getUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("/users?page=1", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.data.data) {
    throw new Error(response.data.message);
  }
  return response.data.data;
};

export { getUsers };
