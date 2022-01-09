export default function responsiveMedia(
  id,
  mediaQuerie,
  mobileContent,
  desktopContent
) {
  let breakpoint = window.matchMedia(mediaQuerie);

  const responsive = (e) => {
    if (e.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
