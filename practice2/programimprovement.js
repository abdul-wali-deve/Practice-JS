//1. Write a JS program to take input from the user for their name and age, then display them on the console.
var userName=prompt("Enter your name")
var userAge=parseInt(prompt("Enter your age"))
console.log("your name is" , userName , "and your age is" , userAge)




// 2. Write a JS program to take input from the user for a student’s name, roll number, and grade, and print them.
var studentName=prompt("Enter student name")
var studentRollno=parseInt(prompt("Enter your rollno"))
var studentGrade=parseInt(prompt("student grade is"))
console.log("student name is " , studentName , "and student rollno is " , studentRollno , "and student grade is" , studentGrade)




// 3. Write a JS program to take input from the user and declare variables of all basic data types: string, number, boolean, null, and undefined. Display their values and types.
// var string;
// var number;
// var boolean;
// //var null;
// var undefined;
// console.log("data type string is " , string , "and also" , number , "and " , boolean , "and a " , undefined)


// 3. Write a JS program to take input from the user and declare variables of all basic data types: string, number, boolean, null, and undefined. Display their values and types.
var myString = "abdulwali";
var myNumber = 2;
var myBoolean = true;
var myNull = null;
console.log("My name is" , myString , "and my number is " , myNumber , "and we us boolean is ", myBoolean , "and also " , myNull)




// 4. Write a JS program to show an example of a valid and invalid variable name (just as comments).
// var console.log()
// 1var
// -var
// this is invalid variable
// var age
// var age1
// this is valid variable




// 5. Write a JS program to take input from the user for two numbers, add them, and display the result.
var a=parseInt(prompt("Enter the value of a"))
var  b=parseInt(prompt("Enter the value of b"))
result1=a+b
console.log("the sum is" , result1)


//6. Write a JS program to take input from the user for two numbers, multiply them, and display the product.
var c=parseInt(prompt("ENter the value of c"))
var d=parseInt(prompt("Enter the value of d"))
result2=c*d
console.log("the product is" , result2)


//7. Write a JS program to take input from the user for two numbers, divide them, and show the quotient and remainder.
var e=parseInt(prompt("Enter the value of e"))
var f=parseInt(prompt("Enter the value of f"))
result3=e/f
result4=e%f
console.log("the quotent is" , result3 , "and remender is" , result4)



//8. Write a JS program to take input from the user for the length and breadth of a rectangle, then calculate and display its area.
var lengthOfrectangle=parseInt(prompt("Enter the length of rectangle"))
var breathOfrectangle=parseInt(prompt("Enter the breath of rectangle"))
area=lengthOfrectangle*breathOfrectangle
console.log("Area of rectangle is" , area)


//9. Write a JS program to take input from the user for a number and calculate its square.
var g=parseInt(prompt("Enter the value for square"))
result5=g*g
console.log("the square is" , result5)



//10. Write a JS program to take input from the user for marks of 5 subjects, then calculate the total and average.
var englishMarks=parseInt(prompt("Enter english marks"))
var urduMarks=parseInt(prompt("Enter the urdu marks"))
var mathMarks=parseInt(prompt("Enter the math marks"))
var physicsMarks=parseInt(prompt("Enter the physics marks"))
var chemistryMarks=parseInt(prompt("Enter the chemistry marks"))
var pakstudyMarks=parseInt(prompt("Enter the pakstudy marks"))
resultTotal=englishMarks+urduMarks+ mathMarks+ physicsMarks+chemistryMarks+pakstudyMarks
console.log("total marks is" , resultTotal)
console.log("Average marks is", resultTotal/6)




//11. Write a JS program to take input from the user for age and check whether the person is eligible to vote (age ≥ 18) using logical operators.
var eligibleAge=parseInt(prompt("Enter your age"))
eligibleAgeresult=eligibleAge==18||eligibleAge>=18
console.log("you are eligible" , eligibleAgeresult)




// 12. Write a JS program to take input from the user for a number and check whether it is positive, even, and less than 100 using logical operators.
var number1=parseInt(prompt("Enter the number for cheacking the number is positive and even"))
numberresult=number1==0||number1>=0
console.log("the number is positive and even" , numberresult)
number2=parseInt(prompt("Enter the for checking wheather the number less than 100"))
result6=number2>100
console.log("the number is greater than 100" , result6)


//13. Write a JS program to take input from the user for three numbers and check whether all are equal or not using logical operators.
var firstnumber=parseInt(prompt("Enter the first number for checking equality"))
var secondnumber=parseInt(prompt("Enter the second number for checking equality"))
var thirdnumber=parseInt(prompt("Enter the third number for checking equality"))
totalnumber=firstnumber==12||secondnumber==12||thirdnumber==12
console.log("All numbers are equal")


//14. Write a JS program to take input from the user for temperature and check whether it is within the comfortable range (20–30°C) using logical operators.
var temperature=parseInt(prompt("Enter value of temperature"))
rangeTemperature=temperature<=20||temperature>=30
console.log("your temperature is comfortable" , rangeTemperature)



//15. Write a JS program to take input from the user for marks and check whether the student has passed (marks ≥ 40 and ≤ 100) using logical operators.
var studentMarks=parseInt(prompt("Enter the marks"))
marksCheck=studentMarks>=40||studentMarks<=100
console.log("you are passed" , marksCheck)