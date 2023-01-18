//your code here
let textbox = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

textbox.addEventListener("input", function() {
  letterCount.innerHTML = textbox.value.length;
});
