// 1. write a function to return the n character from a string
function getCharFromStringAtIndex (text, index) {
    return text.charAt(index);
}
console.log(getCharFromStringAtIndex('sddvghjkq', 6));

// 2. WAF (write a function), with 1 parameter x ,  WR (which returns) the char code of character from position x
function getCharCodeFromStringAtIndex (x) {
    let str = 'osdfjsa';
    return str.charCodeAt(x);
}
console.log(getCharCodeFromStringAtIndex(3));

// 3. WAF with 2 params x and y, WR the sum of charcodes from position x and y
function getSumOfCharCodes (x, y) {
    let str = 'sfgouutllvvc';
    return str.charCodeAt(x) + str.charCodeAt(y);
}
console.log(getSumOfCharCodes(3, 5));

// 4. WAF with 2 params, input (string), x(number), WR the same string with the character from position x as uppercase
function getStringWithUppercaseCharAtIndex (string, x) {
    let c1  = string.charAt(x);
    c2 = c1.toUpperCase();
    return string.replace(c1, c2);
}
console.log(getStringWithUppercaseCharAtIndex('hello', 1));

// 5. WAF, (string 1, string 2), WR the indexof string 2 within string 1
function getIndexOfStringInString (string1, string2) {
    return string1.indexOf(string2);
}
console.log(getIndexOfStringInString('this is a text within a text','text'));

// 6. WAF, (string 1, string 2), WR the last indexof string 2 within string 1
function getLastIndexOfStringInString (string1, string2) {
    return string1.lastIndexOf(string2);
}
console.log(getLastIndexOfStringInString('this is a text within a text', 'text'));

// 7. WAF, (string) , WR the first 2 characters
function getFirstTwoChars (string) {
    return string.substr(0, 2);
}
console.log(getFirstTwoChars('hello'));

// 8. WAF, (string), WR the characters from position 1 and -1 (previous character from last one)
function getCharsFromIndexAndPreviousIndex (string, index) {
    return string.charAt(index) + string.charAt(index - 1);
}
console.log(getCharsFromIndexAndPreviousIndex('abcdef', 4));

// 9. WAF, (string, start, end), WR the characters between (start and end)
function getStringBetweenIndices (string, startPos, endPos) {
    return string.substring(startPos, endPos);
}
console.log(getStringBetweenIndices('abcdefghi', 2, 7));

// 10. WAF (string1, string2), to replace the string2 within string1
function replaceStringInString (string1, string2) {
    let str = 'this is a ' + string1;
    return str.replace(string1, string2);
}
console.log(replaceStringInString('text', 'banana'));

// 11.  WAF(string), WR true if the length is even.
function isStringLengthEven (string) {
    return string.length % 2 !== 0;
}
console.log(isStringLengthEven('hello'));

// 12. WAF(string1, s2), WR the sum of lengths of s1 and s2
function getSumtOfTwoStringLengths (string1, string2) {
    return string1.length + string2.length;
}
console.log(getSumtOfTwoStringLengths('text', 'string'));

// 13. WAF(string1, s2), WR true if s1 starts with s2
function doesString1StartWithString2 (string1, string2) {
    return string1.startsWith(string2);
}
console.log(doesString1StartWithString2('this is a text', 'this'));

// 14. WAF(string, number) to remove the character from position number using slice
function getCharAtIndex (string, index) {
    return string.slice(index, index + 1);
}
console.log(getCharAtIndex('hello', 1));

// 15. WAF (string, string) WR the number of aparition of string 2 whithin string1
function getNumberOfAparitions (string1, string2) {
    let numberOfAparitions = string1.split(string2).length - 1;
    return numberOfAparitions;
}
console.log(getNumberOfAparitions('text abc text text def', 'text'));

// 16. create an array
let randomArray = [5, 'text', 12, 4, 'c', 100];
console.log(randomArray);

// 17.  WAF to add a string into array
function addStringIntoArray (string, array) {
    array.push(string);
}
let cars = ['kia', 'peugeot'];
addStringIntoArray('suzuki', cars);
console.log(cars);

// 18. WAF (arr, string) to add string into array on position 0
function addStringIntoArrayAtPos0 (string, array) {
    array.unshift(string);
}
let fruits = ['banana', 'apple'];
addStringIntoArrayAtPos0('pear', fruits);
console.log(fruits);

// 19. WAF (arr, number) to add the number into array
function addNumberIntoArray (number, array) {
    array.push(number);
}
addNumberIntoArray(10, randomArray);
console.log(randomArray);

// 20. WAF (arr) WR the last element from array
function getLastEllementFromArray (array) {
    return array.pop();
}
let drinks = ['water', 'wine','beer'];
console.log(getLastEllementFromArray(drinks));

// 21. WAF (string) WR the characters from string as array
function getArrayOfCharsFromString (string) {
    return string.split('');
}
console.log(getArrayOfCharsFromString('this is a text'));

// 22. WAF (arr) WR the reversed array
function getReversedArray (array) {
    return array.reverse();
}
let digits = [1, 2, 3, 4, 5];
console.log(getReversedArray(digits));

// 23. WAF (string) to return the inversed string. ex: abc ==> cba
function getReversedString (string) {
    let array = string.split('');
    return getReversedArray(array);
}
console.log(getReversedString('abc'));

// 24. WAF (arr, x) to remove the value from position x from array
function removeIemFromIndex (array, x) {
    array.splice(x, 1);
}
let array1 = [1, 2, 4, 7, 9];
removeIemFromIndex(array1, 3);
console.log(array1);

// 25. WAF (arr, x) WR true if there is any value equal x into the array
function isArrayItemEqualtoX (array, x) {
    let index = array.indexOf(x);
    return index !== -1;
}
let nums = [1, 2, 45, 3, 67];
console.log(isArrayItemEqualtoX(nums, 9));

// 26. WAF (arr, y) WR an array containing all the values except y
function getArrayWithoutYValue (array, y) {
    let index = array.indexOf(y);
    removeIemFromIndex(array, index);
    return array;
}
let array2 = ['h', 'f', 3, 'a', 5, 7];
console.log(getArrayWithoutYValue(array2, 3));


// 27. WAF (arr) of numbers which returns the sorted array;
function getSortedNumbersArray (array) {
    return array.sort(function(a, b){return a - b;});
}
console.log(getSortedNumbersArray(nums));

// 28. WAF (arr) WR the rotated array (1 time)
function getRotatedArray (array) {
    let indexOfLastValue = array.length - 1;
    return array = array.concat(array.splice(0, indexOfLastValue));
}
let arr = [1, 2 ,3];
console.log(getRotatedArray(arr));

// 29.  WAF (arr) of numbers WR another array which contains the squared values; [1,2,3] ==> [1,4,9]
function getSquaredNumbers (item, index, array) {
    array[index] = item * item;
}

function getSquaredArray (array) {
    array.forEach(getSquaredNumbers);
    return array;
}
let numbers = [1, 2, 3];
console.log(getSquaredArray(numbers));

// 30. WAF (r: number) WR the  surface of a circle having the raduis equal r
function getCircleSurface (r) {
    return Math.PI * r * r;
}
console.log(getCircleSurface(3));

// 31. WAF (arr) which prints to the console the value from the array (one by one)
function logValues (item) {
    console.log(item);
}
let array3 = [6, 7, 8];
array3.forEach(logValues);

// 32. WAF writeToConsole(value) which prints the value to the console
function writeToConsole (value) {
    console.log(value);
}
writeToConsole('hello');

// 33. WAF (arr1, arr2) which returns another array with elements from arr1 and arr2
function getUnionOfTwoArrays (arr1, arr2) {
    return arr1.concat(arr2);
}
let firstArray = [1, 2, 3];
let secondArray = ['a', 'b', 'c'];
console.log(getUnionOfTwoArrays(firstArray, secondArray));

// 34. WAF (arr, position) (arr) contains strings, which replace the element from position x with the inversed value; ex: ['ana', 'xy'], 1 ==> ["ana", "yx"]
function getArrayWithInvertedValueAtPosX (array, x) {
    let invertedValue = array[x].split('').reverse().join('');
    array.splice(x, 1, invertedValue);
}
let array4 = ['abc' , 'xy'];
getArrayWithInvertedValueAtPosX(array4, 1);
console.log(array4);

// 35. WAF: (arr, value) WR the position of value into the array
function getPosOfValueFromArray (array, value) {
    return array.indexOf(value);
}
let array5 = [5, 6, 7, 10, 14, 24];
console.log(getPosOfValueFromArray(array5, 24));

// 36. WAF (n) which returns an array with n elements
function getNewArrayWithNElements (n) {
    return new Array(n).fill('');
}
console.log(getNewArrayWithNElements(5));

// 37. WAF(string) WR string withowt spaces. ex: "    a    bcd   xyzt    " ==> "abcdxyzt";
function getStringWithoutSpaces (string) {
    return string.split(' ').join('');
}
console.log(getStringWithoutSpaces('    a    bcd   xyzt    '));

// 38. WAF (X) which returns true if x is array
function isAnArray (X) {
    return Array.isArray(X);
}
console.log(isAnArray(array5));

// 39. WAF (y) which returns true if y is string;
function isAString (y) {
    return y.toString() === y.valueOf();
}
console.log(isAString(5));

// 40. WAF (string, number) which returns the string + number
function getConcatNumberString (string, number) {
    return string + number;
}
console.log(getConcatNumberString('jackson', 5));

// 41. WAF WR the inverse value; suppose you have a door; write a function which toggle the state door. isOPEN/isClosed
function getDoorState (state) {
    return !state;
}
console.log(getDoorState(0));

// 42. WAF WR the number of miliseconds of your life
function getMillisecondsInLife (age) {
    return age * 24 * 3600 * 1000;
}
console.log(getMillisecondsInLife(28));

// 43. WAF WR current date + 2h
function getCurrentDatePlus2H () {
    let date = new Date();
    let currentDate = date.getHours();
    return currentDate + 2;
}
console.log(getCurrentDatePlus2H());

// 44. WAF WR day of the week of the current date
function getCurrentDay () {
    let date = new Date();
    return date.getDay();
}
console.log(getCurrentDay());

// 45. WAF WR the difference between 2 dates
function getDateDif (d1, d2) {
    return d1 - d2;
}
let date1 = new Date(2020, 06, 20);
let date2 = new Date(2020, 06, 23);
console.log(getDateDif(date1, date2));