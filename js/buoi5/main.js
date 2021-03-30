// let str = 'Hello'
// // indexOf()
// console.log(str.indexOf('l'))
// console.log(str.indexOf('k'))
// // lastIndexOf()
// console.log(str.lastIndexOf('l'))
// console.log(str.lastIndexOf('k'))
// // includes()
// console.log(str.includes('l'))
// console.log(str.includes('k'))
// // concat()
// console.log(str.concat(' world'))
// // slice()
// console.log(str.slice(1,4))
// console.log(str.slice(-4,-1))
// console.log(str.slice())
// // toUpperCase()

// // toLowerCase()

// // trim
// console.log(' hello world '.trim())

// // split từ chuỗi sang mảng
// console.log('hello world'.split())
// console.log('hello world'.split(' '))
// console.log('hello world'.split(''))
// console.log('hello world'.split('o'))

// // repeat
// console.log('hello'.repeat(10))

// // charAt
// console.log('hello'.charAt(0))
// console.log('hello'.charAt(4))
// console.log('hello'.charAt('hello'.length-1))

function checkStringExist(str1, str2) {
  if (str1.indexOf(str2) == -1) {
    return false;
  }
  return true;
}
console.log(checkStringExist("I love you", "love"));
//
function shortenString(str) {
  if (str.length > 8) {
    let shortStr = str.slice(0, 8) + "...";
    return shortStr;
  }
  return str;
}
console.log(shortenString("Xin"));
//
function capitalizeString(str) {
  let newStr = str.toLowerCase();
  let newStr2 = newStr.split(" ");
  //   let newStr3 = newStr2.split('');
  //   console.log(newStr3);
  for (let i = 0; i < newStr2.length; i++) {
    newStr2[i] = newStr2[i].charAt(0).toUpperCase() + newStr2[i].slice(1);
  }
  return newStr2.join(" ");
}
console.log(capitalizeString("Chào mỪng"));
//
function repeatStringWithDash(str, num) {
  let newStr = `${str}-`.repeat(num);
  return newStr.slice(0, newStr.length - 1);
}
console.log(repeatStringWithDash("a", 5));
//
function reverseString(str) {
  let words = str.split("");
  //   console.log(words);
  let reverseWords = words.reverse();
  //   console.log(reverseWords);
  let reverseString = reverseWords.join("");
  return reverseString;
}
console.log(reverseString("Hello"));
//
function checkSymmetricString(str) {
  let newStr = str.toLowerCase().split(" ");
  //   console.log(newStr);
  let newStr2 = newStr.join("");
  //   console.log(newStr2);
  let newArr = newStr2.split("");
  //   console.log(newArr);
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] != newArr[newArr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSymmetricString("Race car"));
//
function countNumberVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      count += 1;
    }
  }
  return count;
}
console.log(countNumberVowels("hello hien"));
//
function confirmEnding(str1, str2) {
  let endStr1 = str1.slice(str1.length - str2.length);
  if (endStr1 != str2) {
    return false;
  }
  return true;
}
console.log(confirmEnding("gdgdghillo", "illo"));
//
function getFirstLetter(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0);
  }
  return arr.join(" ");
}
console.log(getFirstLetter("xin chào các bạn"));
//
function alphabet_order(str) {
  arr1 = str.split(" ");
  str2 = arr1.join("");
  // arr2 = str2.split('')
  return str2.split("").sort().join("");
}
console.log(alphabet_order("HellO WorL fsd"));
//
function find_FirstNotRepeatedChar(str) {
  let arra = str.split(" ");
  let str2 = arra.join("");
  let arra1 = str2.split("");
  let result = [];
  let ctr = 0;
  for (let x = 0; x < arra1.length; x++) {
    ctr = 0;
    for (let y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }
    if (ctr < 2) {
      result.push(arra1[x]);
    }
  }
  return result.join(",");
}
console.log(find_FirstNotRepeatedChar("abce abcdf"));
