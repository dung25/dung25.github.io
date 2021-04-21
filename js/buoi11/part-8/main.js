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
const btn_sign = document.querySelector("#btn-sign");
const btn_save = document.querySelector("#btn-save");

const login = document.querySelector(".login");
const sign_in = document.querySelector(".sign-in");

const userEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");

const newuserEl = document.querySelector("#new-username");
const newavatarEl = document.querySelector("#new-avatar");
const newpasswordEl = document.querySelector("#new-password");
const confirmEl = document.querySelector("#confirm-password");
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
let account = [];

let data = JSON.parse(localStorage.getItem("ranking"));
// Vào game
console.log(JSON.parse(localStorage.getItem("account")));
btn_start.addEventListener("click", function (e) {
  e.preventDefault();
  let user = userEl.value;
  console.log(user);
  let password = passwordEl.value;
  let check = checkValidate(user, password);
  if (check) {
    let isvalid = false;
    for (let i = 0; i < account.length; i++) {
      console.log(account[0].name);
      if (user === account[i].name && password === account[i].password) {
        isvalid = true;
      }
    }
    if (isvalid) {
      game_start.style.display = "none";
      game.style.display = "flex";
      game_end.style.display = "none";
      init();
    } else {
      alert("username hoặc password không chính xác");
    }
  }
});

let inputs = document.querySelectorAll("input");
Array.from(inputs).map((input) => input.classList.remove("error", "success"));

function checkValidate(userValue, passValue) {
  let isvalid = true;
  if (!userValue) {
    setError(username, "Tên không được để trống");
    isvalid = false;
  } else {
    setSuccess(username);
  }

  if (!passValue) {
    setError(password, "Mật khẩu không được để trống");
    isvalid = false;
  } else {
    setSuccess(password);
  }

  return isvalid;
}

function setError(ele, mess) {
  ele.classList.add("error");

  let span = ele.parentElement.querySelector("span");
  span.innerText = mess;
}

function setSuccess(ele) {
  ele.classList.add("success");

  let span = ele.parentElement.querySelector("span");
  span.innerText = "";
}
// Choi lại
btn_again.addEventListener("click", function () {
  game_start.style.display = "none";
  game.style.display = "flex";
  game_end.style.display = "none";
  init();
});
// Thoát game
btn_reload.addEventListener("click", function () {
  // window.location.reload();
  game_start.style.display = "flex";
  game.style.display = "none";
  game_end.style.display = "none";
});
// Đang ký
btn_sign.addEventListener("click", function () {
  login.style.display = "none";
  sign_in.style.display = "flex";
});
// Lưu đăng ký
btn_save.addEventListener("click", function () {
  // updatePlayer();
  let record = {
    name: newuserEl.value,
    avatar: newavatarEl.value,
    password: newpasswordEl.value,
    score: score,
  };
  if (confirmEl.value == newpasswordEl.value) {
    login.style.display = "flex";
    sign_in.style.display = "none";
    account.push(record);
    setDataLocalStorage(account);
    console.log(account);
  } else {
    alert("Mat khau nhap lại sai");
  }
});

function init() {
  time = 15;
  score = 0;

  timeEl.innerText = `${time}s`;
  scoreEl.innerText = score;
  highScoreEl.innerText = highScore;

  randomNumber();
  // Lay du lieu tu local storage
  // getPlayerDataFromLocalStorage();
  getScoreDataFromLocalStorage();
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
    // setDataLocalStorage(ranking);
    // rederRanking(ranking);
    updateRanking();
    // updatePlayer();

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
    avatar: newavatarEl.value,
    score: score,
  };
  ranking.push(record);
  setScoreDataLocalStorage(ranking);
  rederRanking(ranking);
  console.log(ranking);
}

function updateResult() {
  game_start.style.display = "none";
  game.style.display = "none";
  game_end.style.display = "flex";
  document.querySelector("#score-end-game").innerText = score;
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
  let dataLocal = localStorage.getItem("account");
  if (JSON.parse(dataLocal)) {
    account = JSON.parse(dataLocal);
  } else {
    account = [];
  }
}

function getScoreDataFromLocalStorage() {
  let dataScoreLocal = localStorage.getItem("ranking");
  if (JSON.parse(dataScoreLocal)) {
    ranking = JSON.parse(dataScoreLocal);
  } else {
    ranking = [];
  }
  rederRanking(ranking);
}

function setDataLocalStorage(arr) {
  localStorage.setItem("account", JSON.stringify(arr));
}

function setScoreDataLocalStorage(arr) {
  localStorage.setItem("ranking", JSON.stringify(arr));
}

// window.onload = init;
// window.location.reload()
