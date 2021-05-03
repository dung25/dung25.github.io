const gameContainerEl = document.getElementById("game-container");
const loginContainerEl = document.getElementById("login-container");
const forgotContainerEl = document.getElementById("forgot-container");

const btnLinkLoginFromGame = document.querySelector(".btn-login");
const btnLinkForgot = document.querySelector(".btn-link-forgot-password");
const btnLinkLoginFromForgot = document.querySelector(".btn-link-login");

const btnLogin = document.querySelector("#btn-login");
const inputUsername = document.querySelector("#login-username");
const inputPassword = document.querySelector("#login-password");

const inputUsernameForgot = document.querySelector(".input-group input");
const btnSend = document.querySelector(".input-group-append button");

const btnRegister = document.querySelector("#btn-register");
// Chuyển từ màn chơi game => login
btnLinkLoginFromGame.addEventListener("click", function () {
  gameContainerEl.style.display = "none";
  loginContainerEl.style.display = "flex";
});

// Chuyển từ màn login => forgot
btnLinkForgot.addEventListener("click", function () {
  loginContainerEl.style.display = "none";
  forgotContainerEl.style.display = "flex";
});

// Chuyển từ màn forgot => login
btnLinkLoginFromForgot.addEventListener("click", function () {
  loginContainerEl.style.display = "flex";
  forgotContainerEl.style.display = "none";
});

// mock up một danh sách user để so sánh
let user = [
  //   {
  //     username: "user1",
  //     password: "11111",
  //     avatar:
  //       "https://i.pinimg.com/236x/4f/e1/d0/4fe1d0c4ee72ad6152789d6e2c84e4fc.jpg",
  //   },
  //   {
  //     username: "user2",
  //     password: "22222",
  //     avatar:
  //       "https://www.clipartkey.com/mpngs/m/52-524202_class-dojo-monsters-avatar-clipart-png-download-class.png",
  //   },
  //   {
  //     username: "user3",
  //     password: "33333",
  //     avatar:
  //       "https://www.jing.fm/clipimg/detail/82-827636_28-collection-of-class-dojo-avatar-clipart-class.png",
  //   },
];

// truy cập vào nút logn
// Lắng nghe sự kiện
// Lấy dữ liệu của 2 ô input, gán vào 2 biến
// Nếu
// duyệt qua mảng user, nếu nó bằng vói user trong mock up thì return true
// Khi mới vào trang, lấy thông tin user ra, lưu vào một biến global user để dùng vào các chỗ khác
btnLogin.addEventListener("click", function () {
  let usernameValue = inputUsername.value;
  let passwordValue = inputPassword.value;

  let isValid = false;
  if (usernameValue == "" || passwordValue == "") {
    alert("Cannot leave username or password blank");
    return;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].username == usernameValue &&
        data[i].password == passwordValue
      ) {
        isValid = true;
        // Lưu data vào
        localStorage.setItem("user", JSON.stringify(data[i]));
        // break;
      }
    }
    if (isValid) {
      alert("Login Successfully");
      loginContainerEl.style.display = "none";
      gameContainerEl.style.display = "block";
      getDataFromLocalStorage()
    } else {
      alert("username or password is incorrect");
    }
  }
});

// Khi hết thời gian thì lưu thông tin của user vào mảng ranking

// Quên mật khẩu
// truy cập vào nút gửi, lắng nghe sự kiện
// Nếu tìm được username giống, hiển thị password ra
btnSend.addEventListener("click", function () {
  let usernameForgotValue = inputUsernameForgot.value;

  let isValid = false;
  let userForgot;
  for (let i = 0; i < user.length; i++) {
    if (usernameForgotValue === user[i].username) {
      isValid = true;
      userForgot = user[i];
      break;
    }
  }
  if (isValid) {
    alert(`Your password is ${userForgot.password}`);
  } else {
    alert("No username found");
  }
});

// Tạo tài khoản mới
// Push vào storage
const registerUsername = document.querySelector("#register-username");
const registerPassword = document.querySelector("#register-password");
const registerConfirmPassword = document.querySelector(
  "#register-confirm-password"
);
const registerAvatar = document.querySelector("#register-avatar");
let data = []
btnRegister.addEventListener("click", function () {
  let account = {
    username: registerUsername.value,
    password: registerPassword.value,
    avatar: registerAvatar.value,
  };

  if (registerPassword.value != registerConfirmPassword.value) {
    alert("Mật khẩu xác nhận sai");
  } else if (
    registerUsername.value == "" ||
    registerPassword.value == "" ||
    registerAvatar.value == "" ||
    registerConfirmPassword.value == ""
  ) {
    alert("Không dược để trống");
  } else {
    data.push(account);
    setDataUserLocalStorage(data);
  }

  //
  registerUsername.value = "";
  registerPassword.value = "";
  registerConfirmPassword.value = "";
  registerAvatar.value = "";
});

function setDataUserLocalStorage(arr) {
  localStorage.setItem("data", JSON.stringify(arr));
}
