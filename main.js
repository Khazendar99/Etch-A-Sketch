button = document.createElement("button");
button.textContent = "Press Here: Etch A Sketch";
document.body.prepend(button);
container = document.querySelector(".container");
containerWidth = container.offsetWidth;
function swsn() {
  container.innerHTML = "";
  value = prompt("Enter a number from 1 to 100");
  if (value >= 1 && value <= 100) {
    for (i = 1; i <= value * value; i++) {
      div = document.createElement("div");
      div.style.flex = `0 0 calc(${containerWidth / value}px)`;
      div.classList.add("smallDiv");
      container.appendChild(div);
    }
    let divs = document.querySelectorAll(".smallDiv");

    divs.forEach((div) =>
      div.addEventListener("mouseover", () => div.classList.add("changed"))
    );
  } else {
    swsn();
  }
}
button.addEventListener("click", swsn);
