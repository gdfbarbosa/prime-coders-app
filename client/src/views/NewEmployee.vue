<template>
  <div id="app">
    <v-container>
      <h1>New employee</h1>
      <v-form ref="form" lazy-validation>
        <v-text-field
          :value="employee.firstName"
          @input="($event) => changeValue($event, 'firstName')"
          :counter="10"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          :value="employee.lastName"
          @input="($event) => changeValue($event, 'lastName')"
          label="Last Name"
          required
        ></v-text-field>

        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="startDate"
              label="Select a startDate in Tatic"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startDate"
            no-title
            scrollable
            @change="changeValueStartDate(startDate)"
            @input="menu = false"
          >
            <v-spacer></v-spacer>
          </v-date-picker>
        </v-menu>

        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="startDateCooperative"
              label="Select a startDate in Cooperative"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startDateCooperative"
            no-title
            scrollable
            @change="changeValueStartDateCooperative(startDateCooperative)"
            @input="menu2 = false"
          >
            <v-spacer></v-spacer>
          </v-date-picker>
        </v-menu>
        <v-container class="d-flex justify-end mb-6">
          <v-btn color="success" class="mr-4" @click="saveNewEmployee"
            >Save</v-btn
          >
          <v-btn class="mr-4" @click="cancelNewEmployee">Cancel</v-btn>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import { Employee } from "../interfaces";
import { useStore } from "../store";
import { useRouter } from "../router";

export default defineComponent({
  name: "NewEmployee",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    let menu = false;
    let menu2 = false;

    const startDate = null;
    const startDateCooperative = null;

    const employee = computed<Employee>(() => store.getters.getEmployee);

    onMounted(() => {
      store.dispatch("resetEmployee");
    });

    const changeValue = (value: string, name: string) => {
      store.dispatch("updateEmployee", { [name]: value });
    };

    const changeValueStartDate = (date) => {
      menu = false;
      store.dispatch("updateEmployee", { ["startDate"]: date });
    };

    const changeValueStartDateCooperative = (date) => {
      menu2 = false;
      store.dispatch("updateEmployee", {
        ["startDateCooperative"]: date,
      });
    };

    const saveNewEmployee = () => {
      store.dispatch("saveNewEmployee", store.getters.getEmployee);
      router.push("/list-employee");
    };

    const cancelNewEmployee = () => {
      router.push("/list-employee");
    };

    onMounted(() => {
      console.log("onMounted");
    });

    return {
      employee,
      changeValue,
      saveNewEmployee,
      cancelNewEmployee,
      changeValueStartDate,
      changeValueStartDateCooperative,
      menu,
      menu2,
      startDate,
      startDateCooperative,
    };
  },
});
</script>
