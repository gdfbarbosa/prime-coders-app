<template>
  <div id="app">
    <v-container fluid style="height: 100vh">
      <h1>My employees</h1>
      <v-container class="d-flex justify-end mb-6">
        <v-btn @click="newEmployee">Novo</v-btn>
      </v-container>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="employeeList"
          :items-per-page="5"
        >
          <template v-slot:item.startDate="{ item }">
            <span>{{
              new Date(item.startDate).toISOString().slice(0, 10)
            }}</span>
          </template>
          <template v-slot:item.startDateCooperative="{ item }">
            <span>{{
              new Date(item.startDateCooperative).toISOString().slice(0, 10)
            }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editEmployee(item._id)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="deleteEmployee(item._id)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import { Employee } from "../interfaces";
import { useStore } from "../store";
import { useRouter } from "../router";

export default defineComponent({
  name: "ListEmployee",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      console.log("onMounted");
      store.dispatch("fetchEmployees");
    });

    const headers = [
      {
        text: "Id",
        value: "_id",
        align: "left",
        sortable: false,
      },
      {
        text: "First Name",
        value: "firstName",
        align: "left",
        sortable: false,
      },
      {
        text: "Last Name",
        value: "lastName",
        align: "left",
        sortable: false,
      },
      {
        text: "Start Date (Tatic)",
        value: "startDate",
        align: "left",
        sortable: false,
      },
      {
        text: "Start Date (Cooperative)",
        value: "startDateCooperative",
        align: "left",
        sortable: false,
      },
      { text: "Actions", value: "actions", sortable: false },
    ];

    const employeeList = computed<Employee[]>(() => store.getters.getEmployees);

    const deleteEmployee = (id: string) => {
      store.dispatch("deleteEmployeeById", id);
    };

    const newEmployee = () => {
      router.push("/new-employee");
    };

    return {
      employeeList,
      headers,
      deleteEmployee,
      newEmployee,
    };
  },
});
</script>
