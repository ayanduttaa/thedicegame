//For Player 1

var randomNumber1 = Math.floor((Math.random())*6)+1;

var randomDiceImage= "dice"+randomNumber1+".png";

var randomImageSource="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[2];

image1.setAttribute("src", randomImageSource);



//For Player 2

var randomNumber2 = Math.floor((Math.random())*6)+1;

var randomDiceImage= "dice"+randomNumber2+".png";

var randomImageSource="images/" + randomDiceImage;

var image2=document.querySelectorAll("img")[3];

image2.setAttribute("src", randomImageSource);




//The Match

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins"
}else{
  document.querySelector("h1").innerHTML="Draw"
}
