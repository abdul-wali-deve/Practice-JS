//1. Write a JS program that creates a function which takes two numbers as parameters and returns their sum. Print the returned result.

function parameter1(a,b){
    sum = a + b;
    console.log(sum);
    
}
 parameter1(2,3)




 //2. Write a JS program that creates a function that takes a user name as a parameter and returns a welcome message. Print the returned message in the console.
 function welcomeUser(name) {
    return "Welcome " + name;
}

console.log(welcomeUser("sir"));



//3. Write a JS program that creates a function to calculate the square of a number and returns the result.
function square(i){
  var result1=i*i
    return result1
}

var ans1 =square(5)
console.log(ans1);



//4. Write a JS program that creates a function which takes two numbers as parameters and returns the larger number
function large(firstNum , secNum)
{
    var firstNum = parseInt(prompt("Enter first number:"))
    var secNum = parseInt(prompt("Enter second number"))
    if(firstNum>secNum)
        console.log(firstNum , "is greater ")
    else
        console.log(secNum , "is greater");
        
}

large()




//5. Write a JS program that changes the text of a paragraph when a button is clicked.
//(Use onclick event)
function saygreeting(message){
    console.log(message);
    
}
saygreeting()




//6. Write a JS program that changes the color of a heading when the user hovers the mouse over it.
//index.html line no 10



//7. Write a JS program that changes an image to another image when the mouse is hovered on it and changes back when the mouse leaves it.
//index.html line lo 12 ro 19





// //8. Write a JS program that changes the background color of the page when a link is clicked.
// (Use onclick on an anchor tag)




//9. Write a JS program that increases the font size of a paragraph when the user hovers over it and resets it on mouse out.
//line no 23 to 27



//10. Write a JS program that calls a function on button click. The function should return a random number between 1 and 100 and display it on the console.
//index.html line no 31
function button()
{
    let randomNumber1 = Math.floor(Math.random() * 100) + 1;
    console.log("rendom num is" , randomNumber1);
    
}
