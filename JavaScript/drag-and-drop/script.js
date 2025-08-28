let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

const card = document.getElementById("card");

const items = document.getElementsByClassName("items");
const rightBox = document.getElementById("rightBox");
const leftBox = document.getElementById("leftBox");

for (const element of items) {
  if (!element) continue;
  element?.addEventListener("dragstart", (e) => {
    let selected = e.target;
    console.log(selected);

    leftBox?.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox?.addEventListener("drop", (e) => {
      if (selected) {
        leftBox.appendChild(selected);
        selected = null; // clear after drop
      }
    });
    rightBox?.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox?.addEventListener("drop", (e) => {
      if (selected) {
        rightBox.appendChild(selected);
        selected = null; // clear after drop
      }
    });
  });
}

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  console.log(startX, startY);

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}
