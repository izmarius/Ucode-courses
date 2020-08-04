// 1. WAF which sort an array of objects by age;
// 2. WAF which sort an array of objects by a property passed as a parameter;
// 3. WAF which sort an array of objects by a property and ascendent/descendent passed as a parameter ;

// 4. WAF WR the distinct values from an array
// [1,2,2,2] => [1,2]

// 5. take a look over instanceof
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// 6. see the difference between instanceof and typeof
// https://stackoverflow.com/questions/899574/what-is-the-difference-between-typeof-and-instanceof-and-when-should-one-be-used
// http://engblog.yext.com/post/js-type-checking

// 7. let''s assume that javascript does not contains the new operator;
// can you write your own "new" operator?
// https://2ality.com/2014/01/new-operator.html

// 8. sort a object by key; 
// ex: 
// {
// 	zanzi: {test: 1},
// 	ana: 10,
// 	balet: 'duminica'
// }
//  ==>
// {
// 	ana: 10,
// 	balet: 'duminica',
// 	zanzi: {test: 1},
// }


// 9. sort an array of numbers by number of 1 from binary representation
// hint: 
// var d = 10;
// console.log( d.toString(2) );


// 10. 
// 	- declare a object of type car which contains the method "start"
// 	- serialize the object as string: hint JSON.stringify
// 	- deserialize the object as obj1
// 	- call the start method; ask why the start method is not available
// 	- create a new object from obj1 having the type Car; the object could be obj2;  hint new Car(obj1); here, yiu can read the properties
// 	- call obj2.start; explain why you don''t have teh start method;
// 	- ask yourself how the car object can be create in order to have the start method. hints below
// 		1. use prototype - recommanded solution
// 		2. the start method can be declared using this 

// 1
let peopleList1 = [
    {name: 'jim', age: 32},
    {name: 'mike', age: 28},
    {name: 'john', age: 17},
    {name: 'alexia', age: 29}
]

let getSortArrayOfObjectsByAge = (arr) => {
    var sortedArray = arr.sort((a, b) => a.age - b.age);
    return sortedArray;
}
console.log(getSortArrayOfObjectsByAge(peopleList1));

// 2
let peopleList2 = [
    {name: 'jim', age: 32},
    {name: 'mike', age: 28},
    {name: 'john', age: 17},
    {name: 'alexia', age: 29}
]

let getSortedArrayOfObjectsByProperty = (arr, property) => {
    var sortedArray = [];
    sortedArray = arr.sort((a, b) => {
        var comparison = 0;
        var propertyValueOfA = typeof a[property] === 'string' ? a[property].toUpperCase() : a[property];
        var propertyValueOfB = typeof b[property] === 'string' ? b[property].toUpperCase() : b[property];
        if (propertyValueOfA < propertyValueOfB)
            return -1;
    });
    return sortedArray;
}
console.log(getSortedArrayOfObjectsByProperty(peopleList2, 'name'));

// 3
let carList = [
    {model: 'kia', noOfDoors: 4},
    {model: 'fiat', noOfDoors: 2},
    {model: 'suzuki', noOfDoors: 5}
]

let getSortedAscOrDescArrayOfObjectsByProperty = (arr, property, order) => {
    var sortedArray = [];
    sortedArray = arr.sort((a, b) => {
        var comparison = 0;
        var propertyValueOfA = typeof a[property] === 'string' ? a[property].toUpperCase() : a[property];
        var propertyValueOfB = typeof b[property] === 'string' ? b[property].toUpperCase() : b[property];
        if (propertyValueOfA > propertyValueOfB)
            comparison = -1;
        if (propertyValueOfA > propertyValueOfB)
            comparison = 1;
        return order === 'asc' ? comparison : comparison * -1;
    });
    return sortedArray;
}
console.log(getSortedAscOrDescArrayOfObjectsByProperty(carList, 'model', 'asc'));

// 4
let getArrayOfDistinctValues = (arr) => {
  var resultArr = [];
  resultArr = arr.filter((el, index, a) => a.indexOf(el) === index);
  return resultArr;
}

console.log(getArrayOfDistinctValues([1, 2, 2, 2, 2]));

// 8 
let obj1 = {
	zanzi: {test: 1},
	ana: 10,
	balet: 'duminica'
};

let getObjectSortedByKey = (obj) => {
    var resultObj = {};
    resultObj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    return Object.fromEntries(resultObj);
}

console.log(getObjectSortedByKey(obj1));

// 9
let numArr = [1, 2, 3, 4, 5, 6];

let getArraySortedByBinaryRepresentation = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        var noOfOnesA = arr[i].toString(2).split('').filter(el => el !== '0').length;
        for (var j = i + 1; j < arr.length; j++) {
            var noOFOnesB = arr[j].toString(2).split('').filter(el => el !== '0').length;
            if (noOfOnesA > noOFOnesB) {
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}
console.log(getArraySortedByBinaryRepresentation(numArr));
