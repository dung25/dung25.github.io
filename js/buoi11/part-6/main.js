// Truy cập vào các phần tử DOM
const firstNumberEl = document.querySelector("#primary-number");
const secondNumberEl = document.querySelector("#secondary-number");
const operatorEl = document.querySelector("#operator");
const resultEl = document.querySelector("#result");

const timeEl = document.querySelector(".game-info .time");
const scoreEl = document.querySelector(".game-info .score");
const highScoreEl = document.querySelector(".game-info .high-score");

const listPlayerEl = document.querySelector(".list-player");

const game_start = document.querySelector("#start");
const game = document.querySelector("#game");
const game_end = document.querySelector("#end");

const btn_start = document.querySelector("#btn-start");
const btn_again = document.querySelector("#btn-again");
const btn_reload = document.querySelector("#btn-reload");

const userEl = document.querySelector('#username')
const avatarEl = document.querySelector('#avatar')
// Khai báo biến
let firstNumber;
let secondNumber;
let result;

let operator = ["+", "-", "*"];
let operatorRandom;

let time;
let score;
let highScore = 0;
let interval;

let ranking = [];

btn_start.addEventListener("click", function () {
  game_start.style.display = "none";
  game.style.display = "flex";
  game_end.style.display = "none";
  init()
  
});

btn_again.addEventListener("click", function () {
  game_start.style.display = "none";
  game.style.display = "flex";
  game_end.style.display = "none";
  init()
});
btn_reload.addEventListener('click',function(){
  window.location.reload()
})
function init() {
  time = 15;
  score = 0;

  timeEl.innerText = `${time}s`;
  scoreEl.innerText = score;
  highScoreEl.innerText = highScore;

  randomNumber();
  // Lay du lieu tu local storage
  getDataFromLocalStorage();
  // Đếm ngược thời gian
  interval = setInterval(updateTime, 1000);

  // Clear nội dung input
  resultEl.value = "";
}

function updateTime() {
  time--;
  timeEl.innerText = `${time}s`;

  if (time == 0) {
    clearInterval(interval);

    // Cập nhật điểm cao nhất
    updateHighScore();

    // Cap nhap ranking
    updateRanking();

    // Delay 2s sau đó chơi lại game
    // setTimeout(init, 2000);
    updateResult();
  }
}

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

function updateHighScore() {
  highScore = Math.max(highScore, score);
  highScoreEl.innerText = highScore;
}

function updateRanking() {
  let record = {
    name: userEl.value,
    avatar: avatarEl.value,
    score: score,
  };
  ranking.push(record);
  setDataLocalStorage(ranking);
  rederRanking(ranking);
}

function updateResult() {
  game_start.style.display = "none";
  game.style.display = "none";
  game_end.style.display = "flex";
  document.querySelector('#score-end-game').innerText = score
}

// Random số và biểu thức
function randomNumber() {
  // Random số
  firstNumber = Math.floor(Math.random() * 9 + 1);
  secondNumber = Math.floor(Math.random() * 9 + 1);

  // Random biểu thức
  operatorRandom = operator[Math.floor(Math.random() * operator.length)];

  // Tính toán kết quả
  result = eval(`${firstNumber} ${operatorRandom} ${secondNumber}`);

  // Hiển thị lên trên giao diện
  firstNumberEl.innerText = firstNumber;
  secondNumberEl.innerText = secondNumber;
  operatorEl.innerText = operatorRandom;
}

// Xử lý sự kiện khi ấn vào nút kiểm tra
resultEl.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    // Lấy kết quả trong ô input
    let value = resultEl.value;

    // Kiểm tra input rỗng
    if (value == "" || time == 0) {
      return;
    }

    // Đối chiếu kết quả
    if (Number(value) == result) {
      randomNumber();
      resultEl.value = "";

      updateScore();
    } else {
      resultEl.value = "";
      return;
    }
  }
});

function rederRanking(arr) {
  let arrSort = arr.sort(function (a, b) {
    return b.score - a.score;
  });
  listPlayerEl.innerHTML = "";
  for (let i = 0; i < arrSort.length; i++) {
    listPlayerEl.innerHTML += `
    <div class="list-item">
        <div class="list-rank">${i + 1}</div>
        <div class="list-info">
            <img
            src="${arr[i].avatar}"
            alt="${arr[i].name}"
            />
            <div class="info">
                <span class="name">${arr[i].name}</span>
            </div>
        </div>
        <div class="list-score">
            <span class="top-item-icon"
            ><i class="fa fa-star" aria-hidden="true"></i
            ></span>
        <span class="top-item-point">${arr[i].score}</span>
        </div>
    </div>`;
  }
}

function getDataFromLocalStorage() {
  let dataLocal = localStorage.getItem("ranking");
  if (JSON.parse(dataLocal)) {
    ranking = JSON.parse(dataLocal);
  } else {
    ranking = [];
  }
  rederRanking(ranking);
}

function setDataLocalStorage(arr) {
  localStorage.setItem("ranking", JSON.stringify(arr));
}

// window.onload = init;
// window.location.reload()
