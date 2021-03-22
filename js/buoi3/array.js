let numbers = [2, 4, 6, 8];
console.log(numbers);

let emptyArr = [];
console.log(emptyArr);

console.log(numbers.length);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[numbers.length - 1]);

numbers[2] = 7;
console.log(numbers);

// phuong thuc them, xoa cac phan tu trong mang
// them o cuối mảng
numbers.push(10);
console.log(numbers);
// thêm ở dầu mảng
numbers.unshift(0);
console.log(numbers);
// Xóa ở cuối mảng
numbers.pop();
console.log(numbers);
// Xóa ở đầu mảng
numbers.shift();
console.log(numbers);
// splice : vừa thêm vừa xóa
// chỉ xóa
numbers.splice(1,2)
console.log(numbers)
// chỉ thêm
numbers.splice(1,0,4,7)
console.log(numbers)
// vừa thêm vừa xóa
numbers.splice(1,1,5,6)
console.log(numbers)
//  Nối mảng
numbers=numbers.concat([9,10]);
console.log(numbers)

// đảo ngược dòng
numbers.reverse()
console.log(numbers)

// sắp xếp mảng
numbers.sort(function (a,b) {
    return a-b
});
console.log(numbers)

// lặp bảng 
let sum = 0
for (let i=0; i<numbers.length;i++) {
    sum = sum + numbers[i]
}
console.log(`Tổng mảng là ${sum}`)

let arr = [];
for (let i=0; i<numbers.length;i++) {
    if(numbers[i]%2==0) {
        arr.push(numbers[i])
    }
}
console.log(arr)

let arr1 = [1,2,3]// value type và reference type
let arr2 = [1,2,3]
console.log(arr1 == arr2) // so sánh địa chỉ ô nhớ

console.log(2=='2') //so sanh gia tri

console.log(2==='2')// so sanh gia tri va kieu du lieu
