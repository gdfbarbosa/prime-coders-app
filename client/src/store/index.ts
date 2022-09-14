import Vue from "vue";
import Vuex, { ModuleTree } from "vuex";
import { employee } from "./modules/";

Vue.use(Vuex);

export type Modules = typeof modules;

const debug = true;

const modules = { employee };

const store = new Vuex.Store<Modules>({
  modules: modules as ModuleTree<unknown>,
  strict: debug,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStore = () => store;
export default store;
