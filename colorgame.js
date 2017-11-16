var numSquares = 9;
var h1 = document.querySelector("h1");
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var newColors = document.getElementById("newColors");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

//Level buttons
easy.addEventListener("click", function(){
	numSquares = 3;
	color = generateRandomColors(numSquares);
	pickedColor = randomColor();
 	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
 	}
 	 h1.style.backgroundColor = "steelblue";
 	newColors.textContent = "New Colors";
 	this.classList.add("selected");
 	medium.classList.remove("selected");
 	hard.classList.remove("selected");
 	messageDisplay.textContent = "";

});
medium.addEventListener("click", function(){
	numSquares = 6;
	color = generateRandomColors(numSquares);
	pickedColor = randomColor();
 	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
 	}
 	h1.style.backgroundColor = "steelblue";
 	newColors.textContent = "New Colors";
 	this.classList.add("selected");
 	easy.classList.remove("selected");
 	hard.classList.remove("selected");
 	messageDisplay.textContent = "";

});
hard.addEventListener("click", function(){
	numSquares = 9;
	color = generateRandomColors(numSquares);
	pickedColor = randomColor();
 	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
 	squares[i].style.backgroundColor = color[i];
 	squares[i].style.display = "block";
 	}
 	h1.style.backgroundColor = "steelblue";
 	newColors.textContent = "New Colors";
 	this.classList.add("selected");
 	medium.classList.remove("selected");
 	easy.classList.remove("selected");
  	messageDisplay.textContent = "";

});



newColors.addEventListener("click", function(){
	color = generateRandomColors(numSquares);
	pickedColor = randomColor();
 	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
 	squares[i].style.backgroundColor = color[i];
 	h1.style.backgroundColor = "steelblue";
 	newColors.textContent = "New Colors";
 	}
 	messageDisplay.textContent = "";
});

 colorDisplay.textContent = pickedColor;

 for(var i = 0; i < squares.length; i++){
 	squares[i].style.backgroundColor = color[i];

 	squares[i].addEventListener("click", function(){
 	var clickedColor = this.style.backgroundColor;
 	if(clickedColor === pickedColor){
 		 for(var i = 0; i < squares.length; i++){
 	squares[i].style.backgroundColor = pickedColor;
 	}
 		this.style.backgroundColor = pickedColor;
 		messageDisplay.textContent = "Correct!";
 		pickColor(pickedColor);
 		h1.style.backgroundColor = pickedColor;
 		newColors.textContent = "Play again";
 	}
 	else{
 		this.style.backgroundColor = "#232323";
 		messageDisplay.textContent = "Please try again!";
 	}
 })
}

function pickColor(){
 	for(var i = 0; i < squares.length; i++){
 	squares[i].style.backgroundColor = color;
	}	
}

function randomColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
	arr.push(ranColor());
	}
	return arr;

}

function ranColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+ red + ", " + green + ", " + blue +")";
}