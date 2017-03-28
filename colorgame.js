
//generate random color
	var colors = generaterandomcolor();
	//generate random pickedcolor
	var pickedcolor = colors[Math.floor(Math.random()*6)];
var header = document.querySelector("#header");
//alert(pickedcolor)
//select all div with class named square
var colorsquare = document.querySelectorAll(".square");

//response for users
var stateofcolor = document.querySelector('#state');

var setnew = document.querySelector("#createnew");
setnew.addEventListener("click",function(){
	//generate random color
	colors = generaterandomcolor();
	//generate random pickedcolor
	pickedcolor = colors[Math.floor(Math.random()*6)];
	//must reset value, otherwise, it will remain the same and color of square keeps the same.
	for(var i = 0; i < colorsquare.length; i++) {
		colorsquare[i].style.background = colors[i];
	}
});




	
	for (var i = 0; i < colorsquare.length; i++) {

	//set backgroundcolor for square.
	colorsquare[i].style.backgroundColor = colors[i];
	
	//add event to each squares
	colorsquare[i].addEventListener("click",function(){
			//alert(this.style.backgroundColor);
			if(this.style.backgroundColor==pickedcolor){
				stateofcolor.innerHTML ="nice guess, this is the right color";
				header.innerHTML = pickedcolor;
				for (var i = 0; i < colorsquare.length; i++) {
					colorsquare[i].style.backgroundColor = pickedcolor;
				}
			}
				else{
					//alert(this.style.backgroundColor)
					stateofcolor.innerHTML ="wrong color "+this.style.backgroundColor;
					this.style.backgroundColor ="#232323";
				}
			

	});
}
setTimeout(function(){
				header.innerHTML = "";
				stateofcolor.innerHTML = "";
			},5000)
function generaterandomcolor(){
	var colors = [];

//generate random color
for (var i = 0; i < 6; i++) {
	colors[i] = "rgb("+Math.floor(Math.random()*258)+", "+Math.floor(Math.random()*258)+", "+Math.floor(Math.random()*258)+")"
}
return colors;
}