// 1
let array1 = [1, 2, 1, 3, 1];
const getDistictsFromArray = arr => {
    let emptyArray = [];
    for (let i = 0; i < array1.length - 1; i++) {
        for (let j = i + 1; j < array1.length; j++) {
            if (arr[i] !== arr[j])
                emptyArray.push(arr[j]);
        }
        i = arr.length;
    }
    return emptyArray;
}
console.log(getDistictsFromArray(array1));

// 2
const next = (arr, index) => index === arr.length ? 0 : index += 1;
const previous = (arr, index) => index === 0 ? 0 : index -= 1;
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(next(a, 0));
console.log(previous(a, 8));

// 3
const logCurrentDate = () => setTimeout(() => {
   console.log(new Date()); 
}, 2000);
logCurrentDate();

// 4
const logCurrentDateAfterXSeconds = timeout => setTimeout(() => {
    console.log(new Date()); 
}, timeout);
logCurrentDateAfterXSeconds(5000);

// 5
const logDateAfterArrayOfSeconds = arr => arr.map(el => setTimeout(() => console.log(new Date()), el * 1000));
logDateAfterArrayOfSeconds([1, 5, 10]);

//6
//7

// 8
const getSum = arr => arr.length === 0 ? 0 : arr.pop() + getSum(arr);
console.log(getSum([1, 2, 3]));

// 9
const getFactorialN = n => n === 1 ? 1 : n * getFactorialN(n - 1);
console.log(getFactorialN(3));