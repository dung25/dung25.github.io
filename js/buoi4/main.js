
//
function similarity(arr1, arr2) {
  let empArr = [];
  for (i = 0; i < arr1.length; i++) {
    for (a = 0; a < arr2.length; a++) {
      if (arr1[i] == arr2[a]) {
        empArr.push(arr1[i]);
        break;
      }
    }
  }
  let resultArr = empArr.filter((data, index) => {
    return empArr.indexOf(data) === index;
  });
  return resultArr;
}
console.log(similarity([3, 2, 4, 3, 1, 5, 3, 6, 2, 1], [3, 4, 2, 1, 2, 3, 2]));
//
function uniquieArr(arr) {
  let resultArr = arr.filter((data, index) => {
    return arr.indexOf(data) === index;
  });
  return resultArr;
}
console.log(uniquieArr([1, 2, 3, 4, 1, 2]));
//
function randomHexCode() {
  let letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomHexCode());

function randomRBGCode() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let rbgColor = `rbg(${x},${y},${z})`;
  return rbgColor;
}
console.log(randomRBGCode());
