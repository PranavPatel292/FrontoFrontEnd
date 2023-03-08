import api from "./axios";

export const getCustomers = async () => {
  const headers = {
    "x-hasura-user-id": import.meta.env.VITE_ACCESS_KEY,
  };
  const response = await api.get("/properties/all", { headers });
  return response.data;
};
