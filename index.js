//dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var aleatoryImage = 'dice' + randomNumber1 + '.png'; //dice1.png - dice6.png

var routeImage = 'images/' + aleatoryImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", routeImage);

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var aleatoryImage = 'dice' + randomNumber2 + '.png'; //dice1.png - dice6.png

var routeImage = 'images/' + aleatoryImage; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", routeImage);

//logic for to chose winner

if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins";

}
else if (randomNumber1 < randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins";
}
else {
    document.querySelectorAll("h1")[0].innerHTML = "Draw";
}