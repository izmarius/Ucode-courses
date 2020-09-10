// only function declaration is benenfiting from hoisting 
// function expressions are not hoisted

// declaration
function greet () {
    console.log('hello');
}

// func expression 
const speak = function () {
    console.log('have a nice day!');
};

// arrow function
const clacArea = (radius) => {
    return 3.14 * radius**2;
};
const area = clacArea(5);
console.log(area);

const billCalc = (products ,tax) => {
    let total = 0;
    for (let i = 0; i <products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

let products1 = [10, 15, 30];
const tax = 0.2;
const bill1 = billCalc(products1, tax);
console.log(bill1);