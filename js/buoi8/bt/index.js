const btnDecrease = document.querySelector(
  ".main-container .btn-container .prevBtn"
);

const btnIncrease = document.querySelector(
  ".main-container .btn-container .nextBtn"
);
const count = document.querySelector("#counter");
let value = 0;
btnIncrease.addEventListener("click", function () {
  value++;
  document.getElementById("counter").innerText = value;
  if (value > 0) {
    count.style.color = "green";
  }
  console.log("click");
});
btnDecrease.addEventListener("click", function () {
  value--;
  document.getElementById("counter").innerText = value;
  if (value < 0) {
    count.style.color = "red";
  }
});
