import { State } from "./state";
import { MutationTree } from "vuex";
import { Employee } from "@/interfaces";

const mutations: MutationTree<State> = {
  updateEmployee(state: State, item: Partial<Employee>) {
    state.employee = { ...state.employee, ...item };
  },
  updateEmployees(state: State, employeeList: Employee[]) {
    console.log("employees", employeeList);
    state.employeeList = employeeList;
  },
  removeEmployeeById(state: State, id) {
    state.employeeList = state.employeeList.reduce(
      (previous: Employee[], current: Employee) => {
        if (current._id === id) {
          return previous;
        }
        return [...previous, current];
      },
      []
    );
  },
  resetEmployee(state: State) {
    state.employee = {
      _id: null,
      firstName: "",
      lastName: "",
      startDate: null,
      startDateCooperative: null,
    };
  },
};

export default mutations;
