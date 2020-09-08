const creatyEmptyArray = len => {
    let emptyArray = [];
    emptyArray.length = len;
    return emptyArray.fill(0);
};

// 1
const logPositiveNumbersSmallerThanNFor = n => {
    for (let i = 0; i < n; i++)
        console.log(i);
};
logPositiveNumbersSmallerThanNFor(2);

const logPositiveNumbersSmallerThanNWhile = n => {
    let i = 0;
    while (i < n) {
        console.log(i);
        i++;
    }
};
logPositiveNumbersSmallerThanNWhile(2);

const logPositiveNumbersSmallerThanNMap = n => 
    creatyEmptyArray(n).map((arr, index, el) => console.log(index));
logPositiveNumbersSmallerThanNMap(2);

const logPositiveNumbersSmallerThanNForEach = n =>
    creatyEmptyArray(n).forEach((arr, index, el) => console.log(index));
logPositiveNumbersSmallerThanNForEach(2);

// 2
const showPositiveEvenNumbersFor = n => {
    for (let i = 0; i < n; i++) 
        if (i % 2 === 0)
            console.log(i);
};
showPositiveEvenNumbersFor(5);

const showPositiveEvenNumbersWhile = n => {
    let i = 0;
    while (i < n) {
        if (i % 2 === 0)
            console.log(i);
        i++;
    }
};
showPositiveEvenNumbersWhile(5);

const showPositiveEvenNumbersMap = n => {
    creatyEmptyArray(n).map((arr, index, el) => {
        if (index % 2 === 0)
            console.log(index);
    })
};
showPositiveEvenNumbersMap(5);

const showPositiveEvenNumbersForEach = n => {
    creatyEmptyArray(n).forEach((arr, index, el) => {
        if (index % 2 === 0)
            console.log(index);
    })
};
showPositiveEvenNumbersForEach(5);

// 3
const showFor = (n, x) => {
    for (let i = 0; i < n; i += x)
        console.log(i);
};
showFor(20, 3);

const showWhile = (n, x) => {
    let i = 0;
    while (i < n) {
        console.log(i);
        i += x;
    }
};
showWhile(20, 3);

const showMap = (n, x) => {
    creatyEmptyArray(n).map((arr, index, el) => {
        if (index % x === 0)
            console.log(index);
    })
};
showMap(20, 5);

const showForEach = (n, x) => {
    creatyEmptyArray(n).forEach((arr, index, el) => {
        if (index % x === 0)
            console.log(index);
    })
};
showForEach(20, 3);

// 4
let randomArray = [10, 9, 12, 3, 4, 1, 2];

const printNmbersSmallerThanNFor = (arr, n) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] < n)
            console.log(arr[i]);
};
printNmbersSmallerThanNFor(randomArray, 5);

const printNumbersSmallerThanNWhile = (arr, n) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < n)
            console.log(arr[i]);
        i++;
    }
};
printNumbersSmallerThanNWhile(randomArray, 5);

const printNumbersSmallerThanNMap = (arr, n) => {
    arr.map(el => {
        if (el < n)
            console.log(el);
    })
};
printNumbersSmallerThanNMap(randomArray, 5);

const printNumbersSmallerThanNForEach = (arr, n) => {
    arr.forEach(el => {
        if (el < n)
            console.log(el);
    })
};
printNumbersSmallerThanNForEach(randomArray, 5);

// 5
let randomArray1 = [1, 2, 3];
const sumOfNumbersWhile = arr => {
    let sum = 0, i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
};
console.log(sumOfNumbersWhile(randomArray1));

const sumOfNumbersFor = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumOfNumbersFor(randomArray1));

const sumOfNumbersReduce = arr => arr.reduce(((acc, el) => acc += el), 0);
console.log(sumOfNumbersReduce(randomArray1));

const sumOfNumbersForEach = arr => {
    let sum = 0;
    arr.forEach(el => sum += el);
    return sum;
};
console.log(sumOfNumbersForEach(randomArray1));

// 6
let randomArray2 = [1, 2, 3, 4];
const sumMutipliersOfXFor = (arr, x) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % x === 0) 
            sum += arr[i];
    return sum;
};
console.log(sumMutipliersOfXFor(randomArray2, 3));

const sumMutipliersOfXWhile = (arr, x) => {
    let sum = 0, i = 0;
    while (i < arr.length) {
        if (arr[i] % x === 0)
            sum += arr[i];
        i++;
    }
    return sum;
};
console.log(sumMutipliersOfXWhile(randomArray2, 3));

const sumMutipliersOfXForEach = (arr, x) => {
    let sum = 0;
    arr.forEach(el => {
        if (el % x === 0)
            sum += el;
    })
    return sum;
};
console.log(sumMutipliersOfXForEach(randomArray2, 3));

const sumMutipliersOfXReduce = (arr, x) => arr.reduce(((acc, el) => {
    if (el % x === 0)
        return acc += el;
    return acc;
}), 0)
console.log(sumMutipliersOfXReduce(randomArray2, 3));

const sumMutipliersOfXFilter = (arr, x) => {
    let sum = 0;
    arr.filter(el => el % x ===0).filter(el => sum += el);
    return sum;
};
console.log(sumMutipliersOfXFilter(randomArray2, 3));

// 7
const rotateArrayXTimesFor = (arr, x) => {
    for (let i = 0; i < x; i++)
        arr.unshift(arr.pop());
    return arr;
};
console.log(rotateArrayXTimesFor(['h', 'e', 'l', 'l', 'o'], 3));

const rotateArrayXTimesWhile = (arr, x) => {
    while (x != 0) {
        arr.unshift(arr.pop());
        x--;
    }
    return arr;
};
console.log(rotateArrayXTimesWhile(['h', 'e', 'l', 'l', 'o'], 3));

// 8
let randomArray3 = [3, 6, 1, 8, 90, 23, 4, 21, 54, 2, 88, 1 ,2 , 3];
const getSpecialArray = arr => {
    let i = 0, count = 0, emptyArray = [];
    while (i < arr.length) {
        if (count <= arr.length)
            emptyArray.push(arr[count]);
        count += i + 1;
        i++;
    }
    return emptyArray;
};
console.log(getSpecialArray(randomArray3));

// 9
let randomArray4 = [4, 5, 6];
const getSumEvenAndOddsForEach = arr => {
    let sum = 0;
    arr.forEach(el => el % 2 !== 0 ? sum += el + arr.indexOf(el) : sum += el - arr.indexOf(el));
    return sum;
};
console.log(getSumEvenAndOddsForEach(randomArray4));

const getSumEvenAndOddsMap = arr => {
    let sum = 0;
    arr.map(el => el % 2 !== 0 ? sum += el + arr.indexOf(el) : sum += el - arr.indexOf(el));
    return sum;
};
console.log(getSumEvenAndOddsMap(randomArray4));

const getSumEvenAndOddsReduce = arr => arr.reduce(((acc, el) => el % 2 !== 0 ? acc += el + arr.indexOf(el) : acc += el - arr.indexOf(el)), 0)
console.log(getSumEvenAndOddsReduce(randomArray4));

const getSumEvenAndOddsFor = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            sum += arr[i] + i;
        if (arr[i] % 2 === 0)
            sum += arr[i] - i;
    }
    return sum;
};
console.log(getSumEvenAndOddsFor(randomArray4));

// 10
let randomArray5 = [2, 8, 3, 1];
const getMaxOfArrayWhile = arr => {
    let max = arr[0], i = 0;
    while (i < arr.length) {
        if (arr[i] > max)
            max = arr[i];
        i++;
    }
    return max;
};
console.log(getMaxOfArrayWhile(randomArray5));

const getMaxOfArrayFor = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
};
console.log(getMaxOfArrayFor(randomArray5));

const getMaxOfArrayMap = arr => {
    let max = arr[0];
    arr.map(el => el < max ? max : max = el);
    return max;
};
console.log(getMaxOfArrayMap(randomArray5));

// 11
const getMinOfArray = arr => arr.reduce((a, b) => Math.min(a, b));
console.log(getMinOfArray(randomArray5));

// 12
const getIndexOfElem = (arr, elem) => {
    let index = 0;
    arr.forEach(el => index = arr.indexOf(elem));
    return index;
};
console.log(getIndexOfElem([4,5,6,4], 6));

// 13
const getAllIndexesofElem = (arr, elem) => arr.reduce((acc, el, index) => {
    if (el === elem)
        acc.push(index);
    return acc;
}, [])
console.log(getAllIndexesofElem([4,5,6,4], 4));

// 14
const getMaximumSmallerNumberThanN = num => {
    let res = 1;
    while (res < num) {
        res = res * 2;
    }
    return num - res / 2;
};
console.log(getMaximumSmallerNumberThanN(35));

// 15
const combineTwoArraysWhile = (arr1, arr2) => {
    let arr = creatyEmptyArray(arr1.length + arr2.length); 
    let i = 0;
    while (i < arr.length && arr1.length) {
        arr[i] = arr1.shift();
        arr[i+1] = arr2.shift();
        i += 2;
    }
    return arr;
};
console.log(combineTwoArraysWhile([1, 2, 3], [7, 8, 9]));

const combineTwoArraysfor = (arr1, arr2) => {
    let arr = creatyEmptyArray(arr1.length + arr2.length);
    for (let i = 0; i < arr.length; i += 2) {
        arr[i] = arr1.shift();
        arr[i+1] = arr2.shift();
    }
    return arr;
}
console.log(combineTwoArraysfor([1, 2, 3], [7, 8, 9]));

const combineTwoArraysReduce = (emptyArray, arr1, arr2) => emptyArray.reduce((emptyArray, el) => {
    emptyArray.push(arr1.shift());
    emptyArray.push(arr2.shift());
    return emptyArray.filter(el => el != undefined);
}, [])
let arr1 = [1, 2, 3], arr2 = [7, 8, 9]; 
let = resArray = creatyEmptyArray(arr1.length + arr2.length);
console.log(combineTwoArraysReduce(resArray, arr1, arr2));

// 16
const isNumberPrime = num => {
    if (!Number.isInteger(num))
        return false;
    if (num <= 0)
        return false;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log(isNumberPrime(11));

// 17
const getAllPrimeNumbersInInterval = (min, max) => {
    let primeNumbers = [];
    for (let i = min; i <= max; i++)
        if (isNumberPrime(i))
            primeNumbers.push(i);
    return primeNumbers;
}
console.log(getAllPrimeNumbersInInterval(1, 20));

// 18
const getSumOfArray = arr => arr.length === 1 ? arr.pop() : arr.pop() + getSumOfArray(arr);
console.log(getSumOfArray([1, 2, 3, 4]));

// 19
const getLongestWord = text => {
    let maxChars = text.split(' ').map(el => el.length).reduce((a, b) => Math.max(a, b));
    let indexOfLongestWord = getAllIndexesofElem(text.split(' ').map(el => el.length), maxChars);
    return text.split(' ')[indexOfLongestWord];
}
let text = 'ana are mere         golden    ionatan         extraterestre mirifice';
console.log(getLongestWord(text));

// 20
const getASquaredBModC = (a, b, c) => a === 0 || b === 0 ? Math.pow(a, b) % c : getASquaredBModC(Math.floor(a / c), Math.floor(b / c), c);
console.log(getASquaredBModC(8786545, 8909985, 37));
