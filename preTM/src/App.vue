<template>
  <v-app id="inspire">
    <AppBar />
    
      <router-view></router-view>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
a {
  text-decoration: none;
  font-weight: bold;
}


</style>