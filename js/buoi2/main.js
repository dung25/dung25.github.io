let a = true;
let b = false;
let c = !a;
let d = !b;

console.log(a, b, c, d);

let number = 10;
console.log(Boolean(number));

console.log(Boolean(6 > 10));

// kiem tra falsy value
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Toán tử &&, toán tử ||
// Toán từ &&
console.log(Boolean(true && true));
console.log(Boolean(false && true));
console.log(Boolean(true && false));
console.log(Boolean(false && false));

console.log(Boolean(true || true));
console.log(Boolean(false || true));
console.log(Boolean(true || false));
console.log(Boolean(false || false));

let hour = 8;
if (hour < 10 && hour > 7) {
  console.log("Good-morning");
}

let hour1 = 12;
if (hour1 < 10) {
  console.log("Good-morning");
} else {
  console.log("Good afternoon");
}

let hour2 = 14;
if (hour2 < 10) {
  console.log("Sang");
} else if (hour2 > 10 && hour2 < 12) {
  console.log("trua");
} else {
  console.log("toi");
}

function sosanh(mark) {
  if (mark >= 85) {
    console.log("A");
  } else if (mark >= 70 && mark < 85) {
    console.log("B");
  } else if (mark >= 40 && mark < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
}
sosanh(80);

function sosanh(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
console.log(sosanh(5, 5));

function check(number) {
  if (number < 0) {
    console.log("Số âm");
  } else if (number > 0) {
    console.log("Số dương");
  } else {
    console.log("0");
  }
}
check(-5);

function check2(number) {
  if (number % 2 == 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẻ");
  }
}
check2(4);

function check3(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
check3(16);

function check4(a, b, c) {
  if (c == a + b) {
    console.log("True");
  } else {
    console.log("False");
  }
}
check4(3, 2, 5);

// switch case
let money = 105000;
switch (money) {
  case 12000:
    console.log("Ca phe sua");
    break;
  case 10000:
    console.log("Den da");
    break;
  case 8000:
    console.log("Sting");
    break;
  case 2000:
    console.log("Tra da");
    break;
  default:
    console.log("Ko co do uong");
    break;
}

let num = 9;
switch (num) {
  case 2:
  case 4:
  case 6:
  case 8:
  case 10:
    console.log("Số chẵn");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    console.log("Số lẻ");
    break;
  default:
    console.log("Số không hợp lệ");
    break;
}

let month = 8;
switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Mùa xuân");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Mùa hạ");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Mùa thu");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Mùa đông");
    break;
  default:
    console.log("Ko rõ mùa");
}

let day = 8;
switch (day) {
  case 0:
    console.log("CN");
    break;
  case 1:
    console.log("Hôm nay là T2");
    break;
  case 2:
    console.log("Hôm nay là T3");
    break;
  case 3:
    console.log("Hôm nay là T4");
    break;
  case 4:
    console.log("Hôm nay là T5");
    break;
  case 5:
    console.log("Hôm nay là T6");
    break;
  case 6:
    console.log("Hôm nay là T7");
    break;
  default:
    console.log("Ko có ngày này");
}

// Vòng lặp (For, while, do/while, ForEach)
// for(bien_khoi_tao; dieu_kien; buoc_nhay)
// Thức dậy lúc 7h trong vòng 30 ngày
for (let i = 1; i <= 30; i = i + 2) {
  console.log(`Ngày ${i} Thức dậy lúc 7h`);
}
// break :ket thuc vong lap
// continue:
// vào ngày 20 bị ốm
for (let i2 = 1; i2 <= 30; i2 = i2 + 1) {
  if (i2 == 20) {
    console.log(`Ngày ${i2} bị ốm`);
    break;
  }
  console.log(`Ngày ${i2} Thức dậy lúc 7h`);
}

for (let i2 = 1; i2 <= 30; i2 = i2 + 1) {
  if (i2 % 2 == 1) {
    continue;
  }
  console.log(`Ngày ${i2} Thức dậy lúc 7h`);
}

// Tính tổng tiền tiết kiệm
// tiền hành tiết kiệm 10 ngày . mỗi ngày tiết kiệm 100k
let totalMoney = 0;
for (let i = 1; i <= 10; i++) {
  if (i >= 5) {
    totalMoney = totalMoney + 200000;
  } else {
    totalMoney = totalMoney + 100000;
  }
}
console.log(totalMoney);

let total = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    total = total + i;
  }
}
console.log(total);

let total1 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    total1 = total1 + i;
  }
}
console.log(total1);

let total2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} là số chẵn`);
  } else {
    console.log(`${i} là số lẻ`);
  }
}
