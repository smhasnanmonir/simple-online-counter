"use strict";

let score = 0;
document.querySelector(".btn").addEventListener("click", function () {
  score += 1;
  document.querySelector(".score").textContent = score;
});

document.querySelector(".reset-btn").addEventListener("click", function () {
  score = 0;
  document.querySelector(".score").textContent = score;
});
