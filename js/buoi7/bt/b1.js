let text = document.getElementById("text");
console.log(text);
text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

function changeColor() {
  let li = document.getElementsByTagName("li");
  console.log(li);
  for (i = 0; i < li.length; i++) {
    li[i].style.color = "blue";
  }
}
console.log(changeColor());



