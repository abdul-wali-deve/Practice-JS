//1. Print all fruits from the array one by one.
//var fruits = ["apple", "mango", "banana", "orange"];
var fruits0 = ["apple", "mango", "banana", "orange"];
for(var i=0;i<=fruits0.length;i++)
console.log(fruits0[i])



// 2. Ask the user for any fruit name and check if it exists in the fruits array.
// (print “available” or “not available”)
var fruits1 = ["apple", "mango", "banana", "orange"];
var userInput1=prompt("Enter name of fruits")
if(userInput1 in fruits1){    // we use member function
    console.log("avaiable")
}
else{
    console.log("not avaiable")
}


//3. Convert all fruits array values into uppercase using a loop.
var fruits2 = ["apple", "mango", "banana", "orange"];

for (var j= 0; j < fruits2.length; j++) {
    fruits2[j] = fruits2[j].toUpperCase();
}

console.log(fruits2);




//4. Convert all fruits array values into lowercase using a loop.
var fruits2 = ["Apple", "Mango", "Banana", "Orange"];

for (var j= 0; j < fruits2.length; j++) {
    fruits2[j] = fruits2[j].toLowerCase();
}

console.log(fruits2);





//5. Take user input for a full name and convert it into proper case.
//Example: "aBDUL hANAN" → "Abdul hanan"
var userInput2=prompt("Enter any name")
var firstchar=userInput2.slice(0,1);
var otherchar=userInput2.slice(1);
var userInput3=firstchar.toUpperCase()+otherchar.toLowerCase();
console.log(userInput3)
/********************************chatgpt
 * var fullName = prompt("Enter your full name:");

fullName = fullName.toLowerCase();
var nameParts = fullName.split(" ");

for (var i = 0; i < nameParts.length; i++) {
    var part = nameParts[i];
    nameParts[i] = part.charAt(0).toUpperCase() + part.slice(1);
}

var properName = nameParts.join(" ");
console.log(properName);

 */




//6. Print each character of a given string using a loop.
var stringNumber="1 2 3 4 5 6"
for(var k=0; k<=stringNumber.length; k++)
{
 console.log(stringNumber[k])
}





//7. Count how many times the letter a appears in a given fruit name.
var fruit3 = prompt("Enter any fruit name:");

fruit3 = fruit3.toLowerCase(); 
var count = 0;

for (var i = 0; i < fruit3.length; i++) {
    if (fruit3[i] === "a") {
        count++;
    }
}

console.log("The letter 'a' appears " + count + " times.");






//8. Replace the first occurrence of “banana” with “mango” inside a sentence
// var sentence="you like banana axcept apple"
// for (var i = 0; i < sentence.length; i++) {
//    if (sentence.slice(i, i + 6) == "banana") {
//     sentence =
//       sentence.slice(0, i) + "mango" + sentence.slice(i + 6);
//   }
// }

// console.log("🚀 ~ sentence:", sentence);



// //9. Replace all occurrences of “apple” with “green apple” using a loop.
var sentence2="an apple is very good for health and science (Are you know newton with respect to apple) .so respect apple "

for (var e = 0; e < sentence2.length; e++) {
   if (sentence2.slice(e, e + 5) == "apple") {
    sentence2 =
      sentence2.slice(0, e) + "green apple" + sentence2.slice(e + 5);
  }
}

console.log("🚀 ~ sentence:", sentence2);





//10. Find the index of “apple” inside a sentence using indexOf and print the index.
var sentence3="apple is very good for health and science (Are you know newton with respect to apple) .so respect apple "
console.log("index of apple is" ,sentence3.indexOf("apple"))




//11. Ask the user for a fruit name and tell how many times it appears in a paragraph.
var paragraph1="apple is very good for health and science (Are you know newton with respect to apple) .so respect apple "
var userInput4=prompt("Enter name of fruit that find in paragraph");
userInput4 = userInput4.toLowerCase(); 
var count = 0;

for (var i = 0; i < paragraph1.length; i++) {
    if (paragraph1[i] === userInput4) {
        count++;
    }
}

console.log("The word appears " + count + " times.");



//12. Create an array of 6 fruits and print only fruits that start with “b”.
var fruit4 = ["apple", "mango", "banana", "orange" , "graps" , "berry"];
for (var i = 0; i < fruit4.length; i++){
        if(fruit4[i][0] === "b")
        {
            console.log(fruit4[i])
        }
} 




    
//13. Take a sentence from the user and print the first 5 characters using slice.
var sentence4=prompt("Enter any sentence")
var sentence5=sentence4.slice(0,6)
console.log(sentence5)




//14. Take a sentence from the user and remove the last 3 characters using slice.
var sentence6=prompt("Enter any sentence for remove last three char")
var resultSentence=sentence6.slice(0 ,-3)
console.log("before slice" , sentence6)
console.log("after slice" , resultSentence)




//15. Ask the user for a word. If it ends with “fruit”. print “This ends with fruit”.
var sentence7=prompt("Enter the words for check the end")
// for (var i = 0; i < sentence7.length; i++){
    if (sentence7.endsWith("fruit")) {
    console.log("This ends with fruit");
} else {
    console.log("This does NOT end with fruit");
}
// }






//16. Print the reverse of a fruit name using a loop.
var fruit7 ="apple";
var reversed = "";

// Loop from the last character to the first
for (var i = fruit7.length - 1; i >= 0; i--) {
    reversed += fruit7[i];
}

console.log("Reversed fruit name:", reversed);



//17. Check if a fruit name contains any space. If yes. print “Invalid fruit name”.

var fruit5 = prompt("Enter fruit");  // Change the value to test

if (fruit5.includes(" ")) {
    console.log("Invalid fruit name");
} else {
    console.log("Valid fruit name");
}









//18. Print the longest fruit name from a given fruit array.
var fruit6=["apple" , "mango" , "banana" , "kiwi" , "strawberry"]
var longestFruit="";
for(var i=0 ; i<fruit6.length ; i++)
{
    if(fruit6[i].length>longestFruit.length)
    {
        longestFruit=fruit6[i]
    }
}
console.log("longest fruit is" , longestFruit)






//19. Ask the user for a fruit. Capitalize the first letter and print the result.
var userInput2=prompt("Enter any fruit name")
var firstchar=userInput2.slice(0,1);
var otherchar=userInput2.slice(1);
var userInput3=firstchar.toUpperCase()+otherchar.toLowerCase();
console.log(userInput3)