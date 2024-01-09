var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomnoimg="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomnoimg);

var randomNumber2=(Math.floor(Math.random()*6))+1;
var randomnoimg2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomnoimg2);

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!💕";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!💕";
}
else{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!💕";
}