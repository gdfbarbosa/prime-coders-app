import { State } from "./state";
import { ActionTree, ActionContext } from "vuex";
import { getEmployees, deleteEmployee, saveEmployee } from "@/services";
import { Employee } from "../../../interfaces";

const actions: ActionTree<State, State> = {
  async fetchEmployees(context: ActionContext<State, State>) {
    const employees = await getEmployees();
    context.commit("updateEmployees", employees);
  },
  async updateEmployee(
    context: ActionContext<State, State>,
    item: Partial<Employee>
  ) {
    context.commit("updateEmployee", item);
  },
  async deleteEmployeeById(context: ActionContext<State, State>, id: string) {
    const result = await deleteEmployee(id);
    if (result) {
      context.commit("removeEmployeeById", id);
    }
  },
  async saveNewEmployee(
    context: ActionContext<State, State>,
    employee: Employee
  ) {
    const result = await saveEmployee(employee);
    console.log(result);
  },
  async resetEmployee(context: ActionContext<State, State>) {
    context.commit("resetEmployee");
  },
};

export default actions;
