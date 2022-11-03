console.log("World");
l = document.querySelectorAll(".image").length;
for (var i = 0; i < l; i++) {
  console.log("Hello World!");
}
var score = 0;
var total = 0;
document.querySelectorAll(".image")[0].addEventListener("click", function () {
  total++;
  console.log("Total score is: " + total);
  random = Math.random() * 3;
  random = Math.floor(random) + 1;
  console.log(random);
  var images = random + ".jpg";
  document.querySelector("#image").setAttribute("src", images);
  if (random == 1) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (random === 2) {
    document.querySelector("h1").innerHTML = "You Wins!";
    score++;
    console.log("Score is: " + score);
  } else {
    document.querySelector("h1").innerHTML = "You Loss!";
  }
});
document.querySelectorAll(".image")[1].addEventListener("click", function () {
  total++;
  random = Math.random() * 3;
  random = Math.floor(random) + 1;
  images = random + ".jpg";
  document.querySelector("#image").setAttribute("src", images);
  if (random === 2) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (random === 3) {
    document.querySelector("h1").innerHTML = "You Wins!";
    score++;
    console.log("Score is: " + score);
  } else {
    document.querySelector("h1").innerHTML = "You Loss";
  }
});
document.querySelectorAll(".image")[2].addEventListener("click", function () {
  total++;
  random = Math.random() * 3;
  random = Math.floor(random) + 1;
  images = random + ".jpg";
  document.querySelector("#image").setAttribute("src", images);
  if (random === 3) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (random === 1) {
    document.querySelector("h1").innerHTML = "You Wins!";
    score++;
    console.log("Score is: ", Score);
  } else {
    document.querySelector("h1").innerHTML = "You Loss!";
  }
});
document.querySelector("button").addEventListener("click", function () {
  console.log(score);
  console.log(total);
  document.querySelector("h3").innerHTML = "Score is: " + score + " / " + total;
});
