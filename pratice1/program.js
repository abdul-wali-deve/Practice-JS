//operators
 //Arithematic operators (+ - * / %)
 var x=10;
 var y=20;
 result = x + y;
 console.log(result);

//comperison operator (==   >   <   >=   <=)
var x=10;
var y=20;
console.log(x>y)




// 1.Write a JS program to store the name of a user and his age, then display them on the console.
var userName="Abdulwali"
var age=19
console.log("My name is" ,userName, "and my age is " , age)

// 2.Write a JS program to store the name, roll number, and grade of a student, and print them.

var studentName="Abdulwali"
var rollNumber=16
var grade="12"
console.log("My name is " , studentName , "and my Rollno is " , rollNumber , "and my grade is " ,grade)

// 3.Write a JS program to declare variables of all basic data types: string, number, boolean, null, and undefined. Display their values and types.
var myString = "abdulwali";
var myNumber = 2;
var myBoolean = true;
var myNull = null;
console.log("My name is" , myString , "and my number is " , myNumber , "and we us boolean is ", myBoolean , "and also " , myNull)


// 4.Write a JS program to show an example of a valid and invalid variable name (just as comments).
// var console.log="abdulwali"   (is invalid variable)
// var age=19
// console.log(age)


// 5.Write a JS program to add two numbers and display the result.
var x=10
var y=20
result=x+y
console.log(result)



// 6.Write a JS program to subtract one number from another and print the output.

var a=30
var b=20
result1=a-b
console.log(result1)


// 7.Write a JS program to multiply two numbers and display the product.
var c=4
var d=3
result2=c*d
console.log(result2)

// 8.Write a JS program to divide two numbers and show the quotient and remainder.
var a=10
var b=20
result3=a/b
console.log(result3)


// 9.Write a JS program to calculate the area of a rectangle using length and breadth variables.
var lengthOfrectangel=10
var breathOfrectangle=20
result4=lengthOfrectangel*breathOfrectangle
console.log(result4)

// 10.Write a JS program to calculate the square of a given number.
var i=2
console.log("Enter the number " , i)
console.log(i*i)
i++


// 11.Write a JS program to find the average of three numbers.
var a=10
var b=15
var c=20
console.log( (a + b + c)/3)



// 12.Write a JS program to swap the values of two variables using a third variable.

var a = 5;
var b = 10;

console.log("Before swapping:");
console.log("a =", a, ", b =", b);

// Use a third variable
var temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a, ", b =", b);


// 13.Write a JS program to check whether a number is greater than 100 or not.


var j=100 
if(j>100)
    console.log("yes this is equal")
else
    console.log("NO this is not equal")

// 14.Write a JS program to compare two numbers and display which one is greater.
var e=5
var f=10
if(f>e)
    console.log("f is greater than e")
else
    console.log("e is greater than f")


// 15.Write a JS program to calculate the total and average marks of 5 subjects.
var englishMarks=20
var urduMarks=30
var mathMarks=40
var physicsMarks=45
var chemistryMarks=50
var pakstudyMarks=10
resultTotal=englishMarks+urduMarks+ mathMarks+ physicsMarks+chemistryMarks+pakstudyMarks
console.log(resultTotal)
console.log("Average marks is", resultTotal/6)


// 16.Write a JS program to demonstrate the use of all arithmetic operators: +, -, *, /, %, **.
var x=2
var y=3
var z=4
console.log(x + y - z * x / y ** z)


// 17.Write a JS program to check whether the entered age is greater than or equal to 18 (eligible to vote or not).
var myAge=18
if(myAge>18)
    console.log("I,m eligible")
else
    console.log("I,m not aligible")



// 18.Write a JS program to compare two strings and check if they are equal or not.
var x="abdulwali"
var y="abdulwali"
if(x==y)
    console.log("this is equal")
else
    console.log("this is not equal")
