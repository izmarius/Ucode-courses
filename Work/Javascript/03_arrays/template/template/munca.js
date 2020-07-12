// += operator
//debugger;

function add(x) {
    return x + 1;
}

var addAsArrow = x => x + 1;
var xplus1 = addAsArrow(3);



//FUNCTIONS --------------------
//anonymous
var anonim = function (x) {
    x = x + 1;
    return x;
}
//arrow function


var addAsArrow1 = x => {
    x = x + 1;
    return x;
};
xplus1 = addAsArrow1(3);

//debugger;




////////////////////////////////

//filter
// 1 2 3 4 5
function getProductsSmallerThanX0(products, price) {
    var newProducts = products.filter(function (el) {
        return el < price;
    })

    // return products.filter(el => el< price);

    return newProducts;
}
function getProductsSmallerThanX1(products, price) {

    var checkIsSmallerThanPice = function (el) {
        return el < price;
    }
    var newProducts = products.filter(checkIsSmallerThanPice)

    return newProducts;
}

function getProductsSmallerThanX2(products, price) {

    var checkIsSmallerThanPice = function (el) {
        return el < price;
    }
    return products.filter(checkIsSmallerThanPice)
}

const smallProducts = getProductsSmallerThanX2([1, 20, 5, 6, 29], 20);
console.log('produse<20 ', smallProducts);

function getProductsSmallerThanXWithFunctionAsParamater(products, conditionFunction) {
    return products.filter(conditionFunction)
}

function checkIsSmallerThanPice(el) {
    return el < 20;
}


const smallProducts1 = getProductsSmallerThanXWithFunctionAsParamater([1, 20, 5, 6, 29], checkIsSmallerThanPice);
console.log('produse<20 ', smallProducts1);

function getProductsSmallerThanXWithFunctionAsParamater1(products, conditionFunction) {
    return products.filter(conditionFunction)
}

//START -- ASTA FACEM MAI TARZIU; odata cu closure
// function checkIsSmallerThanPice1(el, price) {
//     return el<price;
// }

// const smallProducts1 = getProductsSmallerThanXWithFunctionAsParamater1([1,20,5,6,29],checkIsSmallerThanPice);
// console.log('produse<20 ', smallProducts1);
//END -- ASTA FACEM MAI TARZIU; odata cu closure


function getProductsSmallerThanX2ArrowFct(products, price) {
    return products.filter(el => el < price)
}

const smallProductsArrwFct = getProductsSmallerThanX2ArrowFct([1, 20, 5, 6, 29], 20);
console.log('produse<20 ', smallProductsArrwFct);


var prods = [2, 4, 6, 9, 87].filter(el => el < 20);
console.log(prods);

//map

[1, 2, 3].map(el => el + 10);
[1, 2, 3].map(function (el) {
    return el + 20;
});


//reduce



//forEach

//for

//function; different types

console.log(add(3));

//--------------------------------------------

let getPeopleUnderAge = (peopleAges, age) => (
    age -= 2, 
    peopleAges.filter(el => el < age));
let ppl = getPeopleUnderAge([12, 13, 18, 20, 21], 18);
console.log(ppl);

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

