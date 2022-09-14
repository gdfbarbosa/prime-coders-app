<template>
  <div id="app">
    <v-app transition="slide-x-transition">
      <v-card>
        <v-navigation-drawer app permanent absolute>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item link @click="$router.push({ path: '/' })">
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  John Doe
                </v-list-item-title>
                <v-list-item-subtitle>john@acme.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item link @click="$router.push({ path: '/list-employee' })">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Employees</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              @click="$router.push({ path: '/list-vacations' })"
            >
              <v-list-item-icon>
                <v-icon>mdi-airplane</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vacations</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              @click="$router.push({ path: '/calculate-vacations' })"
            >
              <v-list-item-icon>
                <v-icon>mdi-calculator</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vacations Calculator</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <router-view />
        </v-content>
      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
