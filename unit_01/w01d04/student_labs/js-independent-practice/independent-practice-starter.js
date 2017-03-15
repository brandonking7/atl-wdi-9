//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// 1. define the function
// 2. define an empty array
// 3. for each string in the original array
// 4. we will find the length
// 5. and push the length to the new array as a number
// 6. return the new array

function lengths (arrayOfStrings) {
  var arrayOfNumbers = [];

  for(var i = 0; i < arrayOfStrings.length; i++); {
    var lengthOfStrings = arrayOfStrings[1].length;

    arrayOfNumbers.push(lengthOfStrings);

  }
  return arrayOfNumbers;
}
var array = ['You', 'Me', 'Us', 'Them']

lengths(array);

// your code here

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result

function transmogrifier (base1, base2, exp) {

}
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// 1. define a function called wordReverse
// 2. define one parameter called stringToReverse
// 3. turn the string into an array of words
// 4. create an empty array to store the reversed array
// 5. working backwards through the original array, place them into the empty array
// 6. return the resversed array as a string
function wordReverse (stringToReverse) {
  var arrayOfWords = stringToReverse.split(' ');
  var reversedWords = [];
  reversedWords = arrayOfWords.reverse();

  return reversedWords.join(' ');

}
"I've got a lovely bunch of coconuts"

wordReverse.stringToReverse

// your code here
