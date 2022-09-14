import { State } from "./state";
import { GetterTree } from "vuex";

const getters: GetterTree<State, State> = {
  getEmployees(state: State) {
    return state.employeeList;
  },
  getEmployee(state: State) {
    return state.employee;
  },
};

export default getters;
