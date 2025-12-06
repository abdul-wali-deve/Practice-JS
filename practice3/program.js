//1. Write a JS program to take input from the user for their name and age, then display them on the console.
var Name=prompt("Enter your name")
var age=parseInt(prompt("Enter your age"))
console.log("your name is" ,Name , "your age is" , age )



//2. Print numbers from 1 to 100 using a for loop
for(var a=0 ; a<=100 ; a++)
    console.log(a)


console.log("after 2 program")
//3. Print even numbers from 1 to 50 using a while loop.
var n=1;
while(n<=50)
{
    if(n%2 === 0)
    {
    console.log(n)
    }
    n++;

}

//4. Print the multiplication table of any number entered by the user (e.g., 5 × 1 to 5 × 10).
var anyNumber=parseInt(prompt("Enter anu number for multiplication"))
var b=1;    
while(b<=10)
{
    console.log(anyNumber , "*" , b , "=" , anyNumber*b)
    b++;
}


console.log("after 4 program")

//5. Display the sum of numbers from 1 to 50 using a for loop.
var sum=0;
for(var c=1 ; c<=50 ; c++)
sum = sum+c;
console.log("the sum of 1 t0 50  is " , sum)



//6. Keep asking the user to enter a number until they enter 0, then display the total sum of all entered numbers (use do-while).
var num;
var sum = 0;
do
{
    var num=parseInt(prompt("ENter the number  for total sum until enter 0"))
    sum +=num;
}
while(num !==0)
console.log("Total sum is" , +sum)    




//7. Write a program to reverse count from 10 to 1 using a while loop.
var f=10;
while(f>=1)
{
    console.log(f)
f--;
}


//8. Ask the user to enter a password, keep asking until they enter the correct password (do-while).

var correctPassword=1234;
var password;
do
{
    password=parseInt(prompt("Enter a password"))
}
while(password !==correctPassword)

    console.log("you enter a correct password")


//9. Display the factorial of a number entered by the user (use for loop`).

var c, num, f;

c = 1;

f = 1;
num=parseInt(prompt("enter numberfor factorial"))

do

{

f=f*c;

c = c + 1;

} while(c<=num)

console.log("Factorial of ", num , "is",f); 



//10. Use switch to display the day name (Mon-Sun) when the user enters a number (1-7).
var dayNumber=parseInt(prompt("Enter days number"))
var days;
switch(dayNumber)
{
    case 1 :
        days ="Monday"
        break;
    case 2 :
        days = "Tuesday"
           break;
    case 3 :
        days = "Wednesday"
        break;
    case 4 :
        days = "Thirsday"
        break;
    case 5:
        days = "Friday"
      break;
    case 6:
        days = "Saturday"    
        break;
    case 7:
        days = "Sunday"
      break;
    default:
        days = "Invalid number please enter number between 1 to 7"                          
}

console.log(days)





//11. Use switch to check if a user enters a vowel (a, e, i, o, u) or consonant.
var letter = prompt("Enter a letter:")

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(" is a vowel.");
    break;

  default:
    console.log(" is not vowel");
}




/*12. Write a program where user enters marks, and based on the marks, print grade using switch:
Marks Range	Grade
90–100	A
80–89	B
70–79	C
below 70	D

(Hint: Convert marks to tens — switch(Math.floor(marks/10)))*/
var marks = parseInt(prompt("Enter your marks:"));

switch (marks / 10) {
  case 10:
  case 9:
    console.log("Grade: A");
    break;

  case 8:
    console.log("Grade: B");
    break;

  case 7:
    console.log("Grade: C");
    break;

  default:
    console.log("Grade: D");
}


//13. Print all numbers divisible by 5 between 1 and 100.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}



//14. Ask the user if they want to repeat the program (y/n). Loop until the user enters "n".
var repeat;

do {
  console.log("This is the program running");
  repeat = prompt("Do you want to repeat the program? (y/n)");

} while (repeat === "y");

console.log("Program ended.");



//15. Take 5 numbers from the user and print the largest one.
var largest = parseInt(prompt("Enter number 1:"));

for (var i = 2; i <= 5; i++) {
  var num = parseInt(prompt("Enter number:" , i));
  if (num > largest) {
    largest = num;
  }
}

console.log("The largest number is: "  +largest)