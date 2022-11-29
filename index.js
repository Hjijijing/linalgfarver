redbutton = document.querySelector("#red");
yellowbutton = document.querySelector("#yellow");
greenbutton = document.querySelector("#green");
bluebutton = document.querySelector("#blue");
big = document.querySelector(".big");

greenbutton.addEventListener("click", () => {
  big.style.backgroundColor = "green";
});

yellowbutton.addEventListener("click", () => {
  big.style.backgroundColor = "yellow";
});

bluebutton.addEventListener("click", () => {
  big.style.backgroundColor = "blue";
});

redbutton.addEventListener("click", () => {
  big.style.backgroundColor = "red";
});
