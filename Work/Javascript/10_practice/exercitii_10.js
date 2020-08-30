// 1. WAF WR the longest sequence of equal numbers; [1,2,2,3] ==> [2,2]
// 2. you have an array of objects representing the list of directories {
// 	id,
// 	name,
// 	parentId
// } 


// create a tree structure from the list (like windows explorer)
// delete a specific node from tree
// search for a specific node (by id) intothe tree
// add a new node to a specific node

// 3. WAF WR the friendly time fromanumber representing the miliseconds
// - just now (<30 sec)
// - less than a minute
// - x minutes ago (< 45min)
// - less than one hour
// - x hours ago (< 12 hours)
// - less than a day

// 4. search sfter s lot of regex examples
// hint:
// 	1. list of words
// 	2. remove double spaces
// 	3. get the text between strings: ex: test regex e super tare. func('regex','tare') ==> e super
// 	4. use the same regex for getting the commented text (between /*  and */) 
// 	5. use regex to capitalize the first letter after dot. ex: imi place regex.       sunt niste treburi faine ==> imi place regex. Sunt niste treburi faine
// 	6. find all src values of images from a html
// 	7. use a regex which can be used for password validation.min length = 6,min one upercase, min one special character (!@$%^&**)_+   

// searxh on internet after other examples	

// 5. Design patterns
// - check the singleton patternand create an example


// 1

// let getLongestSequence = (arr) => {
//     let arrOfSeq = [];
//     let maxCount  = 1;
//     let maxCountPosition = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count += 1;
//             }
//         }
//         console.log(count);
//         maxCount = Math.max(maxCount, count);
//         if (maxCount === count) {
//             maxCountPosition = i;
//         }    
//     }
//     arrOfSeq.push(arr.slice(maxCountPosition, maxCountPosition + maxCount));
//     return arrOfSeq;
// } 
// console.log(getLongestSequence([1, 2, 2, 2, 3, 3, 3]));

let getMaxFromArray = (arr) => {
    let max = arr[0];
    arr.forEach(el => {
        if (el > max)
            max = el;
    })
    return max;
}

let getMaxIndexes = (arr) => {
    let max = getMaxFromArray(arr);
    let maxIndexes = [];
    arr.forEach((el, i, ar) => {
        if (el === max)
            maxIndexes.push(i);
    })
    return maxIndexes;
} 

let getCustomSlice = (arrOfStartIndexes, endIndex, arrToSlice) => 
    arrOfStartIndexes.map(el => arrToSlice.slice(el, el + endIndex));

let getLongestSequence = (arr) => {
    let seqCount = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                count += 1;
        }
        seqCount.push(count);
    }
    let max  = getMaxFromArray(seqCount);
    let maxIndexes = getMaxIndexes(seqCount);
    let longestSequence = getCustomSlice(maxIndexes, max, arr);
    return longestSequence;
}

console.log(getLongestSequence([1, 2, 2, 2, 3, 3, 3, 3]));

// 3
let getFriendlyTimeFormat = (timeInMilliseconds) => {
    let friendlyTimeFormat = ''
    if (timeInMilliseconds < 30000)
        return friendlyTimeFormat = 'just now';
    if (timeInMilliseconds >= 30000 & timeInMilliseconds < 60000)
        return friendlyTimeFormat = 'less than a minute ago';
    if (timeInMilliseconds >= 60000 & timeInMilliseconds < 2700000)
        return friendlyTimeFormat = `${timeInMilliseconds / 60000} minute(s) ago`;
    if (timeInMilliseconds >= 2700000 & timeInMilliseconds < 3600000)
        return friendlyTimeFormat = 'less than one hour';
    if (timeInMilliseconds >= 3600000 & timeInMilliseconds < 43200000)
        return friendlyTimeFormat = `${timeInMilliseconds / 3600000} hour(s) ago`;
    if (timeInMilliseconds >= 43200000)
        return friendlyTimeFormat = 'More than a day';
    return friendlyTimeFormat = 'invalid time entry.'
} 

console.log(getFriendlyTimeFormat(500000));
