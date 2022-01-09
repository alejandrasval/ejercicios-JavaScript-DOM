let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitsBall.left > limitsStage.left) x--;
      break;

    case 38:
      e.preventDefault();
      if (limitsBall.top > limitsStage.top) y--;
      break;

    case 39:
      e.preventDefault();
      if (limitsBall.right < limitsStage.right) x++;
      break;

    case 40:
      e.preventDefault();
      if (limitsBall.bottom < limitsStage.bottom) y++;
      break;

    default:
      e.preventDefault();
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
