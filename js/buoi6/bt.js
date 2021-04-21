let grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];
// B1
function thtrungbinh(grades) {
  let tong = 0;
  for (let i = 0; i < grades.length; i++) {
    tong = tong + grades[i].grade;
  }
  return tong / grades.length;
}

console.log(thtrungbinh(grades));
// B2
function thtrungbinhnam(grades) {
  let tong = 0;
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "M") {
      tong = tong + grades[i].grade;
      count += 1;
    }
  }
  return tong / count;
}
console.log(thtrungbinhnam(grades));
// B3
function thtrungbinhnu(grades) {
  let tong = 0;
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "F") {
      tong = tong + grades[i].grade;
      count += 1;
    }
  }
  return tong / count;
}
console.log(thtrungbinhnu(grades));
// B4
function maleRank(grades) {
  let findMale = grades.filter((student) => student.sex === "M");
  let rank1 = findMale[0].grade;
  for (let i = 1; i < findMale.length; i++) {
    if (findMale[i].grade > rank1) {
      rank1 = findMale[i].grade;
    }
  }
  return rank1;
}
console.log(maleRank(grades));
// B5
function femaleRank(grades) {
  let findFemale = grades.filter((student) => student.sex === "F");
  let rank1 = findFemale[0].grade;
  for (let i = 1; i < findFemale.length; i++) {
    if (findFemale[i].grade > rank1) {
      rank1 = findFemale[i].grade;
    }
  }
  return rank1;
}
console.log(femaleRank(grades));
// B6
function maleLastRank(grades) {
  let findMale = grades.filter((student) => student.sex === "M");
  let last_rank = findMale[0].grade;
  for (let i = 1; i < findMale.length; i++) {
    if (last_rank > findMale[i].grade) {
      last_rank = findMale[i].grade;
    }
  }
  return last_rank;
}
console.log(maleLastRank(grades));
// B7
function femaleLastRank(grades) {
  let findFemale = grades.filter((student) => student.sex === "F");
  let last_rank = findFemale[0].grade;
  for (let i = 1; i < findFemale.length; i++) {
    if (last_rank > findFemale[i].grade) {
      last_rank = findFemale[i].grade;
    }
  }
  return last_rank;
}
console.log(femaleLastRank(grades));
// B8
function rank(grades) {
  let rank1 = grades[0].grade;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].grade > rank1) {
      rank1 = grades[i].grade;
    }
  }
  return rank1;
}
console.log(rank(grades));
// B9
function last_rank(grades) {
  let last_rank = grades[0].grade;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].grade < last_rank) {
      last_rank = grades[i].grade;
    }
  }
  return last_rank;
}
console.log(last_rank(grades));
// B10
function female(grades) {
  let findFemale = grades.filter((student) => student.sex === "F");
  return findFemale;
}
console.log(female(grades));
// B11
function ascName(grades) {
  let findAscName = grades.sort((a, b) => a.name - b.name);
  return findAscName;
}
console.log(ascName(grades));
// B12
function ascGrade_01(grades) {
  let findAscGrade = grades.sort((a, b) => a.grade - b.grade);
  return findAscGrade;
}
console.log(ascGrade_01(grades));
// B13
function jMale(grades) {
  let findjFemale = grades.filter(
    (student) => student.name.charAt(0) === "J" && student.sex === "F"
  );
  return findjFemale;
}
console.log(jMale(grades));
// B14
function ascGrade_02(grades) {
  let findAscGrade = grades.sort((a, b) => b.grade - a.grade);
  return findAscGrade;
}
console.log(ascGrade_02(grades).slice(0, 5));

// Yêu cầu 2
// B1
let isIncreasing = (arr) => {
  return arr.every((v, i) => i === 0 || v >= arr[i - 1]);
};
console.log(isIncreasing([1, 2, 3]));
// B2
let max = (arr) => arr.sort((a, b) => b - a)[0];
console.log(max([1, 9, 3, 5, 2]));
// B3

const similarity = (arr1, arr2) =>
  arr1.filter((element) => arr2.includes(element));
console.log(similarity([1, 2, 3, 4], [1, 2, 4, 3]));
// B4
const symmetricDifference = (arr1, arr2) =>
  arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));

console.log(symmetricDifference([1, 2, 3, 4, 1], [1, 2, 4, 5]));
//B5
var union = (arr1, arr2) =>
  arr1.concat(arr2).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
console.log(union([1, 2, 3], [1, 2, 3]));
// B6
let findDuplicates = (arr) => [
  ...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i)),
];
console.log(findDuplicates([1, 2, 5, 2, 6, 2, 5]));
// B7
// for
function sumEven(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6]));

let sumEven_03 = (arr) =>
  arr.filter((i) => i % 2 === 0).reduce((a, v) => (a += v));
console.log(sumEven_03([1, 2, 3, 4, 5, 6]));
