// var name = "jack";
// var age = 23;

// var message = "Hi, my name is " + name + " and I am " + age + " years old!";

// console.log(message);

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var lenght2 = 12;
// var width2 = 14;

// console.log(area1);

// function area(length, width) {
// 	return length * width;
// }

// var rectanglesAreas = []
// rectanglesAreas.push(area(10,15));
// rectanglesAreas.push(area(14,2));
// rectanglesAreas.push(area(4,5));

// console.log(rectanglesAreas)


// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Dare
Hello Yaakhov
Good Bye John
Hello Breed
Good Bye Jason
Hello Brainy
Hello Frank
Good Bye jerry
Hello Philip
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/


(function () {

var names = ["Dare","Yaakhov", "John", "Breed", "Jason", "Brainy", "Frank", "jerry", "Philip", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();