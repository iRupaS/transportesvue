<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <img alt="Vue logo" src="../assets/logo_dark.png" style="width: 20%; height: auto;">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
  
            <b-nav-item class="nav-link textsize" to="/">Home</b-nav-item>
            <b-nav-item class="nav-link textsize" to="/about">Maquinaria</b-nav-item>
            <b-nav-item class="nav-link textsize" to="/nosotros">Nosotros</b-nav-item>
            <b-nav-item class="nav-link textsize" to="/documental">Documental</b-nav-item>
            <b-nav-item class="nav-link textsize" to="/json">Trabajos Anteriores</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>


<script>
export default {


}
</script>

<style scoped>
.textsize {
  font-size: 130%;
}
</style>
