let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  console.log(e.keyCode);

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

export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);
}
