const button = document.querySelector("button");
const hostElement = document.querySelector(":host");

button.addEventListener("click", () => {
  hostElement.style.color = "#b0e31c"; // Change :host color to red
});
