var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

easyBtn.addEventListener("click",function(){
easyBtn.classList.add("selected");
numSquares=3;
hardBtn.classList.remove("selected");
colors= generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
resetButton.textContent="new colors";
for(var i=0;i<squares.length;i++)
{	//if thereis a next color then it will fill next square
	if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
	else
		{
			squares[i].style.display="none";
		}
}	

});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="new colors";	
});

resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color
	pickedColor=pickColor();
	//change colorDisplay to match pickeColor
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	this.textContent="new colors";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor
		//compare color to pickedColor
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!!!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;		 
		}

		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}


function changeColors(color)
{
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		//change color of all squares
		squares[i].style.backgroundColor=color;
	}
}


function  pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
} 


function generateRandomColors(num)
{
	//make an array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++)
	{
		//get random color & push into array
		arr.push(randomColor())
	}
	
	//return that array
	return arr;
}

function randomColor()
{
	//make a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//make a green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//make a blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b +")";

}



