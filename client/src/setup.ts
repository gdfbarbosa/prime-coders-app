import Vue, { VueConstructor } from "vue";
import VueCompositionAPI from "@vue/composition-api";

const setupVue = (vue: VueConstructor<Vue>): void => {
  vue.config.productionTip = false;

  vue.use(VueCompositionAPI);
};

export default setupVue;
