var randomNumber1 = Math.random() * 6 ;
randomNumber1 = Math.floor(randomNumber1)+1;

// code for first dice
var changeName = "images/dice"+randomNumber1+".png";

var selektor = document.querySelectorAll("img")[0];

selektor.setAttribute("src",changeName);

// code for second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;

var changeName2 = "images/dice"+randomNumber2+".png";

var selektor = document.querySelectorAll("img")[1];

selektor.setAttribute("src", changeName2);

if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "🚩Player 1 WIN!  ";

}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "  Player 2 WIN!🚩";
}else{
  document.querySelector("h1").innerHTML = "🚩It's a draw 🚩";
}
