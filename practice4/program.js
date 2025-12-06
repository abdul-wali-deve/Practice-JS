//1. Print numbers from 1 to 100 using a for loop.
for(var i=0 ; i<=100 ; i++)
    console.log(i)




//2. Print even numbers from 1 to 50 using a while loop.
var num=1;
while(num<=50)
{
    if(num%2 === 0)
    {
        console.log(num)
    }
    num++;
}        



//3. Print odd numbers from 1 to 100 using a do-while loop.
var n1=1;
do
{
    if(!(n1%2 === 0))
    {
    console.log(n1)
    }
    n1++;
}while(n1<=100)




//4. Print the multiplication table of 5 using a for loop.
for(var i1=1 ; i1<=10 ; i1++ )
    console.log("5 *" , i1 , "=" , i1*5)




//5. Print numbers from 50 to 1 using a while loop.
var n2=50
while(n2>=1)
{
    console.log(n2)
    n2--;
}



//6. Print the sum of numbers 1 to 20 using a for loop.
var sum1=0;
for(n3=1 ; n3<=20 ; n3++)
    sum1+=n3;
    console.log("sum is " , sum1)



//7. Count how many numbers between 1–100 are divisible by 3 (use while loop).

var count = 0;
var n4 = 1;
while (n4 <= 100) {
  if (n4 % 3 === 0) {
    count++;
  }
  n4++;
}

console.log("Numbers divisible by 3 between 1 and 100:", count);




//8. Print all numbers between 10 and 200 that are divisible by 10 (for loop).
var count1=0;
for(var n5=10 ; n5<=200  ;n5++)
      if (n5 % 10 === 0) {
    count1++;
  }
  n5++;
console.log("Numbers divisible by 10 between 10 and 200:", count1);




//9. Print squares of numbers from 1–15 using a do-while loop.
var n6=1;
do{
    sum2=n6*n6;
    n6++;
    console.log("Square of this is" ,sum2)
}while(n6<=15)





//10. Print the factorial of a given number (example: 6) using a for loop.

var c, n7, f;
c = 1;
f = 1;
n7=6
do
{
f=f*c;
c = c + 1;
} while(c<=n7)
console.log("Factorial of ", n7 , "is",f); 




//11. Create an array of 5 fruits. Add one more fruit using push() and print the result.
var Fruits=["banana" , "mango" , "apple" , "stewbury"]
Fruits.push("watermallen")
console.log(Fruits)



//12. Create a number array. Remove the last number using pop() and print the array
var n8=[1,2,3,4,5,]
n8.pop()
console.log(n8)



//13. Use shift() to remove the first item from an array of colors. Print the result.
var colors=["blue" , "black" , "white" ,"orange" ]
colors.shift()
console.log(colors)




//14. Use unshift() to add two items at the beginning of an array of cars.
var cars=["car1" , "car2" , "car3"]
cars.unshift("car4" , "car5")
console.log(cars)




//15. Create an array of 10 numbers. Use slice() to copy the first 5 numbers.
var n9=[1,2,3,4,5,6,7,8,9,10]
var newm9=n9.slice(0,5)
console.log(newm9)




//16. Use splice() to remove 2 elements from the middle of an array of 8 items.
var n10=[1,2,3,4,5,6,7,8]
n10.splice(3,2)
console.log(n10)





//17. Use push() and pop() together to simulate a stack. (Add 3 items, remove 2.)
var items1=["item1" , "item2" , "item3" , "item4"]
items1.pop()
items1.push("item5" , "item6" , "item7")
items1.pop()
console.log(items1)




//18. Use unshift() and shift() together to simulate a queue. (Add 2 items, remove 1.)
var items2=["item1", "item2", "item3"]
items2.unshift("item4"  , "item5")
items2.shift()
console.log(items2)




//19. Insert 3 new numbers at index 2 using splice(). Print the new array.
var num1=[1,2,3,4,5,6]
num1.splice(2,2,'5,6,7' )
console.log(num1)




//20. Replace 2 elements in the middle of an array using splice().
var num2=[1,2,3,4,5,6]
num1.splice(2,4 ,5,6,7 )
console.log(num2)




//21. Use slice() to extract the last 3 elements of an array.
var num3=[1,2,3,4,5,6,7]
var num4=num3.slice(0,3)
console.log(num4)




//22. Create an array of student scores. Remove the lowest score using splice().
var studentscore=[10,20,20,30,100,120,300]
studentscore.splice(0,4)
console.log(studentscore)



//23. Using only slice(), copy all elements except the first and last.
var num5=[1,2,3,4,5,6,7]
var num6=num5.slice(1,6)
console.log(num6)



//24. Add numbers 1–5 into an empty array using a loop + push() only.
var num7=[]
num7.push(1,2,3,4,5)
console.log(num7)




//25. Repeatedly use pop() inside a loop to empty an array completely.
var num8 = [10, 20, 30, 40, 50];

console.log("Starting array:", num8)

while (num8.length > 0) {
    var removed = num8.pop();   // removes the last element
    console.log("Popped:", removed, "Remaining:", num8);
}

console.log("Array after emptying:", num8); 
