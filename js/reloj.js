export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm() {}
