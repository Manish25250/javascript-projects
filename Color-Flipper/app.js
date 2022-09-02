const colors = ["green", "red", "purple", "yellow", "orange", "blue", "pink"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {

  const randmNum = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randmNum];
  color.textContent = colors[randmNum];

});
