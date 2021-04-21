// Object
let empUser = {};
let user = {
  name: "Nguyễn Như Dũng",
  email: "dungnn",
  age: 1999,

  speak: function (name) {
    console.log(`xin chào ${name}`);
  },
  getAge: function () {
    return 2021 - this.age;
  },
};
console.log(this);
console.log(user);
// Lấy ra giá trị
console.log(user.name);
console.log(user.age);
console.log(user.email);

console.log(user["name"]);
// Thay đổi giá trị
user.name = "Trần văn B";
console.log(user);
// Thêm key value
user.weight = 50;
console.log(user);
// Xóa key value
delete user.weight;
console.log(user);
//
user.speak("Dũng");
console.log(user.getAge());
// C2
let sum_01 = function (a, b) {
  return a + b;
};
console.log(sum_01(3, 4));
// C3 arrow-function
let sum_02 = (a, b) => {
  return a + b;
};
console.log(sum_02(3, 4));

// map , filter (chỉ array)
let numbers = [1, 2, 3, 4];
let newNum = numbers.map((ele, index) => ele * 2);
console.log(newNum);

let fillterNum = numbers.filter((ele) => ele > 2);
console.log(fillterNum);

let findNumber = numbers.find((ele) => ele > 2);
console.log(findNumber);

let findIndexNumber = numbers.findIndex((ele) => ele > 2);
console.log(findIndexNumber); // chả về chỉ số

// some: 1 cái đúng = true, sai hết = false
console.log(numbers.some((value) => value == 4));
console.log(numbers.some((value) => value > 4));
// every 
console.log(numbers.every((value) => value > 0));
console.log(numbers.every((value) => value > 2));
//

