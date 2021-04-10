const para = document.querySelector("p");
let splitWords = para.innerHTML.split(" ");
// let replacementword = ""
// console.log(splitWords);
function highLight() {
  let highlightedWords = "";
  let ouput = "";
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length >= 8) {
      highlightedWords = `<span class="highlight">${splitWords[i]}</span>`;
      // console.log(highlightedWords);
    } else {
      highlightedWords = splitWords[i];
    }
    ouput = ouput + " " + highlightedWords;
  }
  return ouput;
}
document.querySelector("p").innerHTML = highLight();

const link = document.createElement("a");
link.innerHTML = '<a href="facebook.com">Facebook</a>';
document.body.appendChild(link);

const count = document.createElement("div");
count.innerText = `Tổng số từ: ${splitWords.length}`;
document.body.appendChild(count);

function strReplace() {
  let replace = para.innerHTML.replace(/[?]/g, "🤔").replace(/!/g, "😲");
  return replace;
}
document.querySelector("p").innerHTML = strReplace();
