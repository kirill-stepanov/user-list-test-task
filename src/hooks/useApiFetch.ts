import axios from "axios";

export const useApiFetch = () => {
  const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const getRequest = async (endPoint: string) => {
    try {
      return await httpClient.get(endPoint);
    } catch (error) {
      console.log(error);
    }
  };

  return { getRequest };
};
