import { useMutation } from "react-query";
import api from "./axios";
interface PostCustomerProps {
  address: string;
  valuation: string;
}

const headers = {
  "x-hasura-user-id": import.meta.env.VITE_ACCESS_KEY,
};

export const getCustomers = async () => {
  const response = await api.get("/properties/all", { headers });
  return response.data;
};

export const usePostCustomer = () => {
  return useMutation((formData: PostCustomerProps) => {
    const data = {
      address: formData.address,
      valuation: parseInt(formData.valuation),
    };
    return api.post("/properties/add", data, { headers });
  });
};
