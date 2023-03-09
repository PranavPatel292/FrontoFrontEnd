import api from "./axios";

const headers = {
  "x-hasura-user-id": import.meta.env.VITE_ACCESS_KEY,
};

export const getCustomers = async () => {
  const response = await api.get("/properties/all", { headers });
  return response.data;
};

export const postCustomer = async (address: string, valuation: number) => {
  const data = {
    address: address,
    valuation: valuation,
  };

  const response = await api.post("/properties/add", data, { headers });
  return response.data;
};
