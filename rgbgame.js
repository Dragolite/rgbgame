var numSquares=6;
var colors=generateRandomColors(numSquares);
var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector('#easyBtn');
var hardBtn=document.querySelector('#hardBtn');

//easy mode game changing logic
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    h1.style.backgroundColor="steelblue";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(i = 0; i < 6; i++ )
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    
});

//hard mode game changing logic
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6
    h1.style.backgroundColor="steelblue";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(i = 0; i < 6; i++ )
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});

//reset button or try again button
resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor=pickColor();
    //change color display to match new color
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    //change colors of squares
    for(var i=0;i<numSquares;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    resetButton.textContent="New colors";
    messageDisplay.textContent='';
});

//change the great rgb text
colorDisplay.textContent=pickedColor;

for(var i=0;i<numSquares;i++)
{   //add colors to the squars
    squares[i].style.backgroundColor=colors[i];

    //add click listners to the squares
    squares[i].addEventListener("click",function(){
        //grab color of picked square
    var clickedColor=this.style.backgroundColor;

    //compare to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent="Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor=pickedColor;
        resetButton.textContent="Play again?";
    }
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent='Try again';
    }
    })
}
//function to change color of all the squares when clicked the correct one
function changeColors(color){
    //loop through all the squares
    for(let i=0;i<squares.length;i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor=color;
    }
}

//random color selector
function pickColor(){
    let l= Math.floor(Math.random() * colors.length);
    return colors[l];
}

//generate color for the game
function generateRandomColors(num){
//make an array
var arr = []
//repeat num times
for(var i = 0; i < num; i++){
//get random color
    arr.push(randomColor());
}
//return arary
return arr;
}

//generate random color
function randomColor(){
    //pick a 'red' from 0-255
    let r=Math.floor(Math.random() * 256);
    //pick a 'green' from 0-255
    let g=Math.floor(Math.random() * 256);
    //pick a 'blue' from 0-255
    let b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}