import { getInstance } from "@/services";
import { Employee } from "@/interfaces";
import { AxiosResponse } from "axios";

const request = async (employee: Employee): Promise<Employee | null> => {
  const response: AxiosResponse = await getInstance().post(
    `/employee`,
    employee
  );
  if (!response) {
    return null;
  }
  return response.data;
};

export default request;
