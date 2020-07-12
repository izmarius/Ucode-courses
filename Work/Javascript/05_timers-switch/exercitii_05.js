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

