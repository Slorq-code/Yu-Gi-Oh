<template>
  <div class="about">
    <div class="aboutImgContainer" >
      <img class="imgMagoOscuro" src="@/assets/imgs/mago_oscuro.png" alt="magoOscuro">
    </div>
    <div class="aboutTextContainer">
      <p class="aboutText" >
        Yu-Gi-Oh! es un juego de cartas coleccionables y una serie de anime y manga que ha ganado un gran éxito en todo
        el mundo. El juego se centra en un grupo de jóvenes que utilizan cartas mágicas llamadas "Monster Cards" para
        luchar entre sí en emocionantes duelos. La serie de anime y manga, por otro lado, sigue la historia de un joven
        llamado Yugi, quien despierta un antiguo espíritu del juego dentro de él y se convierte en un experto en el juego.
        Una de las cosas que hace que Yu-Gi-Oh! sea tan popular es su combinación única de acción emocionante y
        estrategia. Los duelos son intensos y llenos de giros y vueltas, y requieren que los jugadores piensen
        cuidadosamente sobre cómo usar sus cartas para vencer a sus oponentes. Además, el juego y la serie también ofrecen
        una gran cantidad de personajes interesantes y una trama intrigante que mantienen a los espectadores y jugadores
        emocionados.
        Otra cosa que hace que Yu-Gi-Oh! sea tan exitoso es su capacidad para atraer a una gran variedad de jugadores. Ya
        sea que seas un jugador casual o un competidor serio, hay un lugar para ti en el mundo de Yu-Gi-Oh! Además, el
        juego y la serie son adecuados para todas las edades, lo que significa que tanto los niños como los adultos pueden
        disfrutar de ella.
        En conclusión, Yu-Gi-Oh! es un juego y una serie emocionante y estratégica que ha ganado un gran éxito en todo el
        mundo. Con su combinación única de acción emocionante y estrategia, personajes interesantes y una trama
        intrigante, Yu-Gi-Oh! atrae a una gran variedad de jugadores de todas las edades. Es una de las mejores opciones
        para pasar un buen tiempo.
      </p>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.about {
  display: flex;
  width: 100%;
  height: 100%;
}
.aboutImgContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  margin: 0 3.25%;
  background: radial-gradient(circle, rgba(135,135,135,0.7360558965403563) 28%, rgba(255,255,255,0) 28%, rgba(0,0,0,0) 100%);
}
.imgMagoOscuro{
  width: 100%;
  max-height: 85vh;
}
.aboutTextContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 3.25%;
}
.aboutText {
  text-shadow: rgb(172, 172, 172);
  color: white;
  font-size: 20px;
}
</style>