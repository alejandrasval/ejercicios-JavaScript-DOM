export default function webcamStatus(id) {
  const $video = document.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "afterend",`<p>Sucedió el siguiente error:<mark>${err}</mark></p>`
        );
      });
  }
}
