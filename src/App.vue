<template>
  <div id="app">
    <div class="container-fluid">
      <NavBar />
      <b-breadcrumb :items="items"></b-breadcrumb>
      <router-view/>
    <FooterWeb />
    </div>
  </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import FooterWeb from '../src/components/FooterWeb.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterWeb
  },
  data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/',
            to:"/"
          },
          {
            text: 'Página actual',
            active: true
          }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #ffae00;
}
</style>
