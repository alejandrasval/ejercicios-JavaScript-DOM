import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./dark_mode.js";
document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jan 01, 2023 00:00:00", "Happy New Year! 🥳");
  scrollTopButton(".scroll-top-btn");
});

document.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-light-btn", "dark-mode");
