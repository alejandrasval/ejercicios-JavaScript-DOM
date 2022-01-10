import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall } from "./teclado.js";
import darkTheme from "./dark_mode.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webcamStatus from "./deteccion_webcam.js";
import getGeolocation from "./geolocation.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jan 01, 2023 00:00:00", "Happy New Year! 🥳");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a className="links" href="https://www.youtube.com/watch?v=m-0n82m8QVk" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/m-0n82m8QVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a className="links" href="https://goo.gl/maps/osahdEvuGxtJ6HgE8" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.493782392872!2d-75.16251342774515!3d6.231148097439772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441d2972edf1bb%3A0xc8e9c49c096f7adc!2sGuatape%2C%20Guatap%C3%A9%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1641674810896!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcamStatus("webcam");
  getGeolocation("geolocation")
});

// document.addEventListener("keydown", (e) => {
//   moveBall(e, ".ball", ".stage");
// });

darkTheme(".dark-light-btn", "dark-mode");
networkStatus();
