<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Profesionales"
        text="Tenemos una amplia expeciencia en el sector"
        img-src="../assets/Background.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Flexibilidad"
        text="Nos adaptamos a tus necesidades"
        img-src="../assets/Background 2.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Disponibilidad"
        text="Disponibilidad casi inmediata y en toda la provincia de Huesca"
        img-src="../assets/Background 3.png"
      ></b-carousel-slide>
    </b-carousel>

    <br />
    <br />

    <article>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <br />
            <h2>¿Quiénes somos?</h2>
            <p>
              <strong>Transportes y Excavaciones Hermanos Cavero</strong> es una
              pequeña empresa familiar, fundada por dos hermanos experimentados
              en los transportes con camión el transporte de mercancias de
              cualquier clase y ambito, la ejecucion de obras nuevas de
              edificacion urbana, industrial, urbanizacion, saneamiento y
              abastecimientos de aguas y excavaciones. A lo largo de los años
              hemos realizado innumerables trabajos en diferentes tipos de obras
              y para todo tipo de clientes que siempre han acabado satisfechos
              con el trabajo. Actualmente contamos con tres emplados y
              maquinaria de todo tipo para realizar correctamente cada uno de
              nuestros servicios.
            </p>
            <b-button variant="warning" to="/nosotros">Ver más</b-button>
          </div>
          <div class="col-lg-6 col-md-12">
            <br />
            <h2>¿Dónde nos encontramos?</h2>
            <p>
              <strong>Transportes y Excavaciones Hermanos Cavero</strong> es
              originalmente del pueblo de Boltaña, un pequeño pueblo de Huesca
              pero ofrecemos trabajos por toda la comunidad y cercanías.
            </p>
            <br />
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5888.5300539604295!2d0.07141245!3d42.44337685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a7f96336c4701d%3A0x21cc46e3935e6eb!2s22340%20Bolta%C3%B1a%2C%20Huesca!5e0!3m2!1ses!2ses!4v1697972280066!5m2!1ses!2ses"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </article>
    <br />
    <h1>Servicios</h1>
    <br />
    <article>
      <div class="center">
        <div class="card col-lg-11 col-md-11">
          <img
            id="transportes1"
            src="../assets/obras.jpg"
            class="card-img-top"
            alt="imagen obras"
          />
          <div class="card-body">
            <h2 class="card-title">Transporte</h2>
            <p class="card-text">
              En Transportes y Excavaciones Hermanos Cavero contamos con una
              completa flota de camiones. Nos ocupamos también del transporte de
              residuos y áridos de construcción . Nos adaptamos a todo tipo de
              necesidades para satisfacer plenamente a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="center">
        <div class="card col-lg-11 col-md-11">
          <img
            id="excavaciones1"
            src="../assets/excavadora.jpeg"
            class="imagen excavadora"
            alt="imagen excavadora"
          />
          <div class="card-body">
            <h2 class="card-title">Excavaciones</h2>
            <p class="card-text">
              En Transportes y Excavaciones Hermanos Cavero contamos con una
              completa flota de camiones. Nos ocupamos también del transporte de
              residuos y áridos de construcción . Nos adaptamos a todo tipo de
              necesidades para satisfacer plenamente a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="center">
        <div class="card col-lg-11 col-md-11">
          <img
            id="hormigon1"
            src="../assets/hormigonera.jpg"
            class="card-img-top"
            alt="imagen hormigonera"
          />
          <div class="card-body">
            <h2 class="card-title">Hormigón</h2>
            <p class="card-text">
              En Transportes y Excavaciones Hermanos Cavero contamos con una
              completa flota de camiones. Nos ocupamos también del transporte de
              residuos y áridos de construcción . Nos adaptamos a todo tipo de
              necesidades para satisfacer plenamente a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      <br />
    </article>
    <section id="contacto">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12 col-md-10">
            <br />
            <h1>Ponte en contacto con nosotros</h1>
            <p>
              Aceptamos consultas tanto por llamada como por mensaje vía
              Whatsapp
            </p>
            <h1>+34 621076736</h1>
          </div>
        </div>
      </div>
    </section>
    <br />
  </div>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  #logo {
    width: 37%;
  }
}

@media only screen and (min-width: 769px) {
  #logo {
    width: 13%;
  }
}

@media only screen and (max-width: 768px) {
  #offcanvasDarkNavbar {
    width: 40%;
  }
}

@media only screen and (min-width: 769px) {
  #offcanvasDarkNavbar {
    width: 20%;
  }
}

@media only screen and (max-width: 768px) {
  #iconos {
    width: 15%;
  }
}

@media only screen and (min-width: 769px) {
  #iconos {
    width: 7%;
  }
}

h1 {
  font-family: "Kanit", sans-serif;
  text-align: center;
}

h2 {
  font-family: "Kanit", sans-serif;
}

h3 {
  font-family: "Kanit", sans-serif;
  text-align: center;
}

h4 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 40;
}

p {
  text-align: center;
}

h5 {
  font-family: "Kanit", sans-serif;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a {
  color: white;
}

li {
  color: aliceblue;
}

.nav-item {
  color: white;
}
</style>