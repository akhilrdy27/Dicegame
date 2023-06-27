//alert("working");
document.querySelector("h1")
var rannum1 = Math.floor(Math.random()*6 )+1;
var ranimg1src = "images/dice"+rannum1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ranimg1src);
var rannum2 = Math.floor(Math.random()*6)+1;
var ranimg2src = "images/dice"+rannum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ranimg2src);

if(rannum1>rannum2){
    document.querySelector("h1").innerHTML = "<em>PLAYER 1 WINS</em>";
}
else if(rannum1<rannum2){
    document.querySelector("h1").innerHTML = "<em>PLAYER 2 WINS</em>";
}
else{
    document.querySelector("h1").innerHTML = "DRAW , REFRESH AGAIN";
}