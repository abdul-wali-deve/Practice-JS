//program1
// 1. Write a JS program that takes a name from an input field and displays it in a paragraph when a button is clicked.
// UI:
// One text input
// One button
// One paragraph for result
function showName()
{
    const username = document.getElementById("name1").value
    document.getElementById("result1").textContent=username
    
}



//program2
// 2. Write a JS program that takes two numbers from input fields and shows their sum in a paragraph on button click.

// UI:
// Two number inputs
// One button
// One paragraph for result
function add(a ,b)
{
    var a = parseInt(document.getElementById("number1").value)
    var b = parseInt(document.getElementById("number2").value)
    var  sum =a + b
    document.getElementById("sum").textContent=sum
    
}


//program3
// 3.Write a JS program that changes paragraph text when a link is clicked.
// UI:
// One link
// One paragraph
function changepara()
{
    document.getElementById("para1").innerHTML="this is changing para"
}


//prgram4
// 4. Write a JS program that clears the input field value when a button is clicked.
// UI:
// One text input
// One button




//program5
// 5. Write a JS program that changes the color of a paragraph when the mouse is over it and resets when mouse leaves.
// UI:
// One paragraph
function changecolor()
{
    document.getElementById("para2").style.color="red"
}
function resetcolor()
{
    document.getElementById("para2").style.color="black"
}



//program6
// 6.Write a JS program that copies the value from an input field and displays it inside a paragraph on button click.
// UI:
// One input field
// One button
// One paragraph
function copyValue() {
var inputValue = document.getElementById("textInput").value;
document.getElementById("output").innerText = inputValue;
}



//program7
//7.Write a JS program that changes the background color of a button when mouse is over it and restores it when mouse leaves.
//UI:
//One button
function changeColor1() {
document.getElementById("myButton").style.backgroundColor = "orange";
}
function restoreColor() {
document.getElementById("myButton").style.backgroundColor = "";
}




//program8
// 8.Write a JS program that increases the font size of a paragraph when a button is clicked.
// UI:
// One button
// One paragraph
let size = 16; // initial font size in pixels
function increaseFont() {
size += 2;
document.getElementById("text").style.fontSize = size + "px";
}




//program9
// 9.Write a JS program that shows the length of text entered in an input field when a button is clicked.
// UI:
// One text input
// One button
// One paragraph
function showLength() {
var text = document.getElementById("textInput").value;
document.getElementById("result").innerText = 
"Length of text: " + text.length;
}



//program10
// 10.Write a JS program that clears input fields and paragraph text when a link is clicked.
// UI:
// One input field
// One paragraph
// One link
function clearData() {
document.getElementById("textInput").value = "";
document.getElementById("para").innerText = "";
}