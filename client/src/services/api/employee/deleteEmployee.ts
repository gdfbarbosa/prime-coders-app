import { getInstance } from "@/services";
import { Employee } from "@/interfaces";
import { AxiosResponse } from "axios";

const request = async (id: string): Promise<Employee | null> => {
  const response: AxiosResponse = await getInstance().delete(`/employee/` + id);
  if (!response) {
    return null;
  }
  return response.data;
};

export default request;
