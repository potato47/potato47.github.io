<template>
  <div class="home">
    <v-row align="center" justify="space-around">
      <v-btn depressed> Normal </v-btn>
      <v-btn depressed color="primary"> Primary </v-btn>
      <v-btn depressed color="error"> Error </v-btn>
      <v-btn depressed disabled> Disabled </v-btn>
    </v-row>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>
