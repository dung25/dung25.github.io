// B1
function checkAscArr(arr) {
  if (arr.length === 1) {
    return true;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] <= 0) {
      return false;
    }
  }
  return true;
}
console.log(checkAscArr([1, 2, 3]));
// B2
function checkDscArr(arr) {
  if (arr.length === 1) {
    return true;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] <= 0) {
      return true;
    }
  }
  return false;
}
console.log(checkDscArr([1, 2, 3]));
// B3
function checkEvenAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 && arr[i] % 2 == 0) {
      return true;
    }
    if (arr[i] % 2 != 0 || arr[i + 1] - arr[i] <= 0) {
      return false;
    }
    return true;
  }
}
console.log(checkEvenAsc([2, 4, 8]));
// B4
function checkOddAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 && arr[i] % 2 != 0) {
      return true;
    }
    if (arr[i] % 2 == 0 || arr[i + 1] - arr[i] >= 0) {
      return false;
    }
    return true;
  }
}
console.log(checkOddAsc([11, 3, 1]));
// B5
function maxArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      return (max = arr[i]);
    }
  }
  return (max = arr[0]);
}
console.log(maxArr([-10, -35, -5, -11, -9]));
// B6
function minArr(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      return (min = arr[i]);
    }
  }
  return (min = arr[0]);
}
console.log(minArr([-10, -35, -5, -11, -9]));
// b7
function newArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] % 2);
  }
  return newArr;
}
console.log(newArr([5, 2, 3, 14]));
// B8
function repeatStringNumTimes(string, times) {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatStringNumTimes(string, times - 1);
}
console.log(repeatStringNumTimes("a", 10));
//   B9
function repeatStringWithDash(string, times) {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatStringNumTimes("-" + string, times - 1);
}
console.log(repeatStringWithDash("a", 10));
