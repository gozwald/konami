let keyTracker = "";
let topVar = 50;
let leftVar = 50;

document.addEventListener("keyup", getKeysPressed);

function getKeysPressed(e) {
  let keyPressed = e.key;
  keyTracker = keyTracker + keyPressed;

  if (
    keyTracker.includes(
      "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
    )
  ) {
    konamiGame();
  } else {
    console.log(keyTracker);
    console.log("not yet");
  }
}

function incrementGhost(e) {
  if (e.key === "ArrowUp" && topVar >= 1) {
    topVar--;
    console.log(topVar);
  }

  if (e.key === "ArrowUp" && topVar === -0) {
    topVar = topVar + 4;
    console.log(topVar);
  }

  if (e.key === "ArrowDown" && topVar <= 98) {
    topVar++;
    console.log(topVar);
  }

  if (e.key === "ArrowDown" && topVar === 99) {
    topVar = topVar - 4;
    console.log(topVar);
  }

  if (e.key === "ArrowLeft" && leftVar >= 1) {
    leftVar--;
    console.log(leftVar);
  }

  if (e.key === "ArrowLeft" && leftVar === 0) {
    leftVar = leftVar + 4;
    console.log(leftVar);
  }

  if (e.key === "ArrowRight" && leftVar <= 98) {
    leftVar++;
    console.log(leftVar);
  }

  if (e.key === "ArrowRight" && leftVar === 99) {
    leftVar = leftVar - 4;
    console.log(leftVar);
  }
}

function konamiGame() {
  document.body.style = "background: black; height: 100%; width: 100%";

  let ghostInSpace = `<img height=75px src=/src/ghost.png style="position: absolute; top:${topVar}%; left: ${leftVar}%">`;

  document.body.innerHTML = ghostInSpace;

  document.addEventListener("keydown", incrementGhost);
}
