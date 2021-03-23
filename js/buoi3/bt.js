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
    if (arr[i + 1] - arr[i] >= 0) {
      return false;
    }
  }
  return true;
}
console.log(checkDscArr([38, 222, 8]));
// B3
function checkEvenAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 && arr[i] % 2 == 0) {
      return true;
    }
    if (arr[i] % 2 != 0 || arr[i + 1] - arr[i] <= 0) {
      return false;
    }
  }
  return true;
}
console.log(checkEvenAsc([2,4,7]));
// B4
function checkOddAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 && arr[i] % 2 != 0) {
      return true;
    }
    if (arr[i] % 2 == 0 || arr[i + 1] - arr[i] >= 0) {
      return false;
    }
  }
  return true;
}
console.log(checkOddAsc([2, 11, 3, 2]));
// B5
function maxArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxArr([5, 80, 7, -10]));
// B6
function minArr(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minArr([-36, -10, -35, -5, -119, -9]));
// B7
function newArr(arr) {
  let empArr = [];
  for (let i = 0; i < arr.length; i++) {
    empArr.push(arr[i] % 2);
  }
  return empArr;
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
