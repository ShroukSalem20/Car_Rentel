// Active Arrows => Right Arrow & Left Arrow to move right or left between cards:

let currentScrollPosition = 0;
const cardWidth = document.querySelector(".card-container").offsetWidth + 20; // Calculate card width dynamically, include margins/padding
const maxScroll =
  document.querySelector(".cards-container").scrollWidth -
  document.querySelector(".cards-wrapper").offsetWidth;

function moveRight() {
  if (Math.abs(currentScrollPosition) < maxScroll) {
    currentScrollPosition -= cardWidth;
    document.querySelector(
      ".cards-container"
    ).style.transform = `translateX(${currentScrollPosition}px)`;
  }
}

function moveLeft() {
  if (currentScrollPosition < 0) {
    currentScrollPosition += cardWidth;
    document.querySelector(
      ".cards-container"
    ).style.transform = `translateX(${currentScrollPosition}px)`;
  }
}

////////////////////////////////////////////////////////////////////////////////////
