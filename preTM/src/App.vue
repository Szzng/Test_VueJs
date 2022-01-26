<template>
  <v-app id="inspire">
    <AppBar />

    <v-container>
      <v-row>
        <v-col class="col-12 col-md-10" offset-md="1">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({

  })
}
</script>

<style>
a {
  text-decoration: none;
  font-weight: bold;
}

</style>
