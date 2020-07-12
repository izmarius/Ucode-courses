// 1
const randomArray1 = [1, 2, 3, 4, 5];

let logArrayElementsForEach = array => array.forEach(el => console.log(el));
logArrayElementsForEach(randomArray1);

let logArrayElementsMap = array => array.map(el => console.log(el));
logArrayElementsMap(randomArray1);

let logArrayElementsReduce = (array, iniValue) => array.reduce((accumulator ,el) => console.log(el), iniValue);
logArrayElementsReduce(randomArray1);

// 2
const randomArray2 = [1, 2, 3, 4, 5];

let getSumReduce = (sum, el) => sum += el;
let getSumOfNumbersReduce = (array, sum) => array.reduce(getSumReduce, sum);
let sum1 = getSumOfNumbersReduce(randomArray2, 0);
console.log(sum1);

let getSumOfNumbersForEach = (array, sum) => (
    array.forEach(el => sum += el),
    sum
);
let sum2 = getSumOfNumbersForEach(randomArray2, 0);
console.log(sum2);

let getSumOfNumbersMap = (array, sum) => (
    array.map(el => sum += el),
    sum
);
let sum3 = getSumOfNumbersMap(randomArray2, 0);
console.log(sum3);

// 3
const randomArray3 = [1, 2, 3, 4, 5];

let getArrayOfEvenNumbers = array => array.filter(el => el % 2 !== 0);

let sumOfEven1 = getSumOfNumbersReduce(getArrayOfEvenNumbers(randomArray3), 0);
console.log(sumOfEven1);

let sumOfEven2 = getSumOfNumbersForEach(getArrayOfEvenNumbers(randomArray3), 0);
console.log(sumOfEven2);

let sumOfEven3 = getSumOfNumbersMap(getArrayOfEvenNumbers(randomArray3), 0);
console.log(sumOfEven3);

// 4
const randomArray4 = [1, 1, 1, 1, 1, 1];

let getFirstNElementsOfArray = (array, n) => array.slice(0, n);

let sumSlice1 = getSumOfNumbersReduce(getFirstNElementsOfArray(randomArray4, 3), 0);
console.log(sumSlice1);

let sumSlice2 = getSumOfNumbersForEach(getFirstNElementsOfArray(randomArray4, 3), 0);
console.log(sumSlice2);

let sumSlice3 = getSumOfNumbersMap(getFirstNElementsOfArray(randomArray4, 3), 0);
console.log(sumSlice3);

// 5
const randomArray5 = [1, 2, 3, 4, 5];
console.log(randomArray5.slice(0, 2)); // removes from end to start and returns array

console.log(randomArray5.splice(1, 2)); // removes from start and counts over how many to remove and return array, can insert where elements were removed
console.log(randomArray5.splice(1, 2, 9, 9));
console.log(randomArray5);

// 6
let createEmptyArray = length => {
    let emptyArray = [];
    emptyArray.length = length;
    return emptyArray.fill(0);
};
console.log(createEmptyArray(3));

// 7 
let getRandomNumberInInterval = (min, max) => Math.random() * (max - min) + min;
console.log(getRandomNumberInInterval(3, 5));

// 8
let createEmptyArrayWithRandomNumbersInInterval = (length, min, max) => {
    let emptyArray = createEmptyArray(length);
    emptyArray.forEach((el, index, array) => array[index] = getRandomNumberInInterval(min, max));
    return emptyArray;
};
console.log(createEmptyArrayWithRandomNumbersInInterval(3, 1, 5));

// 9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatTwoArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(concatTwoArrays(arr1, arr2));

let concatTwoArraysForEach = (arr1, arr2) => {
    arr2.forEach(el => arr1.push(el));
    return arr1;
};
console.log(concatTwoArraysForEach(arr1, arr2));

arr1 = [1, 2, 3];
let concatTwoArraysReduce = (arr1, arr2) => (
    arr2.reduce((acc, el) => arr1.push(el), arr1),
    arr1
)
console.log(concatTwoArraysReduce(arr1, arr2));

// 10
const isNumberLowerThan18 = num => num < 18 ? true : false;
console.log(isNumberLowerThan18(15));

// 11
let randomArray6 = [4, 1, 3];
const getArraySortedAsc = arr => arr.sort((a, b) => a - b);
console.log(getArraySortedAsc(randomArray6));

// 12
const getArraySortedDesc = arr => arr.sort((a, b) => b - a);
console.log(getArraySortedDesc(randomArray6));

// 13 sper ca am inteles ok aici
const getArraySortedAscOrDesc = ascendent => ascendent ? getArraySortedAsc : getArraySortedDesc;
console.log(getArraySortedAscOrDesc(false)(randomArray6));

// 14 
const getSumOfCharCodesFromString = text => text.split('').map(el => el.charCodeAt(0)).reduce(((acc, el) => acc += el), 0);
console.log(getSumOfCharCodesFromString('abc'));

// 15
const getStringFromArrayOfNumbers = arr => arr.map(el => String.fromCharCode(el)).join('');
console.log(getStringFromArrayOfNumbers([98, 65, 89]));

// 16
const getReverseStringWithoutChar = (string, char) => string.split('').filter(el => el != char).reverse().join('');
console.log(getReverseStringWithoutChar('alabalaportocala', 'a'));

// 17
const getSumOfArrayOfArrays = arrOfArr => arrOfArr.reduce(((acc1, el1) => acc1 += el1.reduce(((acc2, el2) => acc2 += el2), 0)), 0);
console.log(getSumOfArrayOfArrays([[1,2,3],[4],[5,6,7,8],[9,10]]));