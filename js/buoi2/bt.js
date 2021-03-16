// B1
function countDay(year, month) {
  let x = year % 4;
  let y = year % 100;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      console.log("Tháng có 31 ngày");
      break;
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
      console.log("Tháng có 30 ngày");
      break;
    case 2:
      switch (x) {
        case 0:
          switch (y) {
            case 0:
              console.log("Tháng có 28 ngày");
              break;
            default:
              console.log("Tháng có 29 ngày");
              break;
          }
          break;
        default:
          console.log("Tháng có 28 ngày");
          break;
      }
  }
}
countDay(2000, 2);
// B2
function loop() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    }
    if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log(`${i}`);
    }
  }
}
loop();
// B3
function vhinhcau(r) {
  return (4 / 3) * Math.PI * r ** 3;
}
console.log(vhinhcau(3));
// B4
function sum(a, b) {
  let totalSum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      totalSum = totalSum + i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      totalSum = totalSum + i;
    }
  }
  console.log(totalSum);
}
sum(5, 2);
// B5
function checkPrime(i) {
  for (var k = 2; k < i; k++) {
    if (i % k == 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(2));
// B6
function sumPrimes(num) {
  let sum = 0;

  function checkPrime(i) {
    for (var k = 2; k < i; k++) {
      if (i % k == 0) {
        return false;
      }
    }
    return true;
  }

  for (var i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrimes(10));
// B7
function sumUoc(a) {
  let sum = 0;
  for (let i = 1; i < a; i++) {
    if (a % i == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumUoc(10);
