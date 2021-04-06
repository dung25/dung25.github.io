let ul = document.getElementById("list");
let li8 = document.createElement('li')
let li9 = document.createElement('li')
let li10 = document.createElement('li')
li8.innerText = 'Item 8'
li9.innerText = 'Item 9'
li10.innerText = 'Item 10'
ul.appendChild(li8)
ul.appendChild(li9)
ul.appendChild(li10)

document.querySelector("ul > li:first-child").style.color = "red";

document.querySelector("ul > li:nth-child(3)").style.backgroundColor = "green";

let li4 = document.querySelector("ul > li:nth-child(4)");
ul.removeChild(li4);

let newLi = document.createElement("li");
newLi.innerText = "New Li";
ul.insertBefore(newLi, document.querySelector("ul > li:nth-child(4)"));

let button = document.createElement('button')
button.innerText = "Add"

let input = document.createElement('input')
document.body.appendChild(button)
document.body.appendChild(input)

