// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(6));

// var dice1 = Math.random();
//  dice1 = dice1 * 6;
//  dice1 = Math.floor(dice1) + 1;

//  console.log (dice1);
 

// let dice1Value = Math.floor ((Math.random() *6) + 1);
// let dice2Value = Math.floor ((Math.random() *6) + 1);

// console.log(dice1Value, dice2Value);

--------------------------------------------------------------------

// DICE 1
 var randomNumber1 = Math.floor ((Math.random() *6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);

//  DICE 2

 var randomNumber2 = Math.floor ((Math.random() *6) + 1);

 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


 if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
else  {
    document.querySelector("h1").innerHTML = "Draw! Try Again";
}

 //TO REFRESH THE PAGE

 
 function roll() {

    window.location.reload(); 
