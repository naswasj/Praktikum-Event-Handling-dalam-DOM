const hoverText = document.getElementById("hoverText");
const hoverButton = document.getElementById("hoverButton");

hoverText.addEventListener("mouseover", function () {
  hoverText.textContent = "Mouse is over the button!";
});

hoverText.addEventListener("mouseout", function () {
  hoverText.textContent = "Aku dimana ya?";
});
