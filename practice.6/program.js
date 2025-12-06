//1. Write a JS program to replace the first occurrence of the word "apple" with "green apple" using the replace method.
let word = "apple"
let newword = word.replace("apple","greenapple")
console.log(newword);




//2. Write a JS program to replace all occurrences of the word "car" with "bike" inside a paragraph using a loop and replace.
let paragraph1 = "my hobby is drive a car with great expertices"
let paragraph2 = paragraph1.replace("car" , "bike")
console.log(paragraph2);





//3. Write a JS program to replace all spaces in a string with hyphens.
let paragraph3 = "my hobby is drive a car with great expertices"
let paragraph4 = paragraph3.replace(/ /g , "-") //  (/ /g)is to know the space 
console.log(paragraph4);



//4. Write a JS program to replace digits inside the string "price99" with "120".
let word2 = "price99"
let newword2 = word2.replace("99" , "120")
//let updatedText = text.replace(/\d+/g, "120");     \d+ is to know the digits hows written inside the  / /g 
console.log(newword2);




//5. Write a JS program to generate a random number between 1 and 10 using Math.random and Math.floor.
let randomNumber1 = Math.floor(Math.random() * 10) + 1;
console.log("random number is" , randomNumber1);





//6. Write a JS program to pick a random fruit from an array using Math.random and Math.floor.
var fruit = ["apple" , "mango" , "orange" , "banana"]
let randomNumber2 = Math.floor(Math.random() * fruit.length)
let fruitName = fruit[randomNumber2]
console.log(fruitName);




//7. Write a JS program to take a floating number from the user and print its ceil value using Math.ceil.
let anyNumber = parseInt(prompt("Enter any number"))
let printNumber = Math.ceil(anyNumber)
console.log(printNumber);



//8. Write a JS program to take a floating number from the user and print its floor value using Math.floor.
let anyNumber1 = parseInt(prompt("Enter any floor number"))
let printNumber1 = Math.floor(anyNumber1)
console.log(printNumber1);



//9. Write a JS program to take a number and round it to the nearest integer using Math.round
let anyNumber2 = parseInt(prompt("Enter any floor number"))
let printNumber2 = Math.floor(anyNumber2)
console.log(printNumber2);




//10. Write a JS program to create a function that prints the sum of two numbers using parameters and arguments.
function number1(a,b){
    sum=a+b;
    console.log(sum);
    
}

number1(10,29)




//11. Write a JS program to create a function that prints the square of a given number.
function squareOfnumber(i)
{
    square = i*i;
    console.log(square);
    
}
 squareOfnumber(2)



 //12. Write a JS program to create a function that takes a sentence and replaces a user given word with another word.
 function sentencechange(){
    para1 = "Hi I,m a software engineer"
    find1 = prompt("Enter the that you find in this sentence Hi I,m a software engineer")
    replace1 = prompt("Enter Replace word")
    showpara = para1.replace(find1 , replace1)
    console.log(showpara);
    
 }

sentencechange()



//13. Write a JS program to print the current date and time using the Date object.
let currentDate = new Date();
console.log(currentDate);


//14. Write a JS program to print the current year, month, and day separately using getFullYear, getMonth, and getDate.
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDay();
console.log("Year is " , currentYear , "Month is" , currentMonth , "Day is" , currentDay);



//15. Write a JS program to create a date object and set its year to 2030 using setFullYear.
var currentDate1 = new Date();
console.log("Today date" , currentDate1);
currentDate1.setFullYear(2030)
console.log("update date", currentDate1 );



//16. Write a JS program to create a date object for your next birthday and print the date.
let birthMonth =11; 
let birthDay = 5;  
let today = new Date();
let currentYear1 = today.getFullYear();
let nextBirthday = new Date(currentYear, birthMonth, birthDay);
if (nextBirthday < today) {
    nextBirthday.setFullYear(currentYear1 + 1);
}

// Print the next birthday date
console.log("Your next birthday is on:", nextBirthday);




//17. Write a JS program to create an age calculator that takes the birth year and prints the age.
var userDate = prompt("Enter your date of birth in this formate Month date , year ")
console.log("you enter " ,  userDate);
var dateOfbirth = new Date(userDate);
var currentDate2 = new Date();
var milisecondCurrent = currentDate2.getTime();
var miliseconDateofBirth = dateOfbirth.getTime();
different = milisecondCurrent - miliseconDateofBirth
console.log("Different",different);
var age = different / 1000 / 60 / 60 / 24 / 365;
console.log("your age is" , Math.floor(age));
 


//18. Write a JS program to calculate and print how many days are left until 31 December of the current year.
var todayDate = new Date();
var date1 = 31;
var year = todayDate.getFullYear();
var month = 11; 
var afterDate = new Date(year , month , date1)
var diff = todayDate - afterDate;
var leftBehind = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log(leftBehind);



//19. Write a JS program to create a function that returns the maximum of three numbers.
function checkNumber(){
var a = parseInt(prompt("Enter first number"))
var b = parseInt(prompt("Enter second number"))
var c = parseInt(prompt("Enter third number"))
if(a>b){
    console.log("greater number is" , a);
}
else if(b>c)
{
    console.log("greater num is" , b);
    
}
else{
    console.log("greater number is " , c);
    
}
}
checkNumber()
 
  


//20. Write a JS program to create a function that takes a number and returns a random number between 1 and that number.
function anyNumber3(){
let d = 5
let e = Math.floor(Math.random() * d) + 1
console.log(e)
}
anyNumber3()