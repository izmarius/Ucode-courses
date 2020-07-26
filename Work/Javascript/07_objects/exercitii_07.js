// 1. WAF WR 6 random numbers out of 49
//  hint: create an array of objects {number: i, code: random string}. for random string use guid. (take a look over javascript guid function). sort the array by code and take first 6

// 2. simulate a 6/49 game. you have the winning 6 numbers and n tickets. return the tickets which has 1 winning number, 2 , .... 6
// hint: you can use :
// winningTickets = {};
// winningTickets[1] = []; ... winningTickets[6] = [];


// 3. Create a chat. you have one chat room with many users. 
// - when a user send a message to the chat, every user receive that message. 
// - when a user enters into the room it will receive the existing messages

// hint: use the same approach as descibed with closure at the store example

// 4. you have an array; please return all pairs of numbers with sum equal n
// ex: [1,3,2,6, 5], 7 ==> [[1,6],[2,5]]


// 5. please design a matrix of n/n numbers containing random numbers between (0, n)
// hint: an array is []
// a matrix is [[], [], []] ...
// this means that arr = []; and after that arr[0] = []; and so on

// 6. return the sum of numbers

// 7. return the sum of all diagonal numbers

// 8. return the sum of numbers for every column

// 9. WAF WR the "determinantul" :)

// 10. WAF which store the selected days of the week.
// hint: you can use: ['monday', 'tuesday' , ...] or assign to every day a value and store as [0, 1], etc OR use bit wise: 1 + 2 + 4 + 8 ... to verify is checked you can use (value & 2 ('tuesday') )  === 2


// 1
var createUUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c =='x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

var getArrayOfObjectsWith49RandomStrings = () => {
    var arr = [];
    for (let i = 1; i <= 49; i++) 
        arr.push({number: i, code: createUUID()});
    return arr;
}

var sortArrayOfObjects = (arr) => {
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++) 
            if (arr[i].code < arr[j].code) {
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
}

var get6RandomNumbersOf49 = () => {
    var arr = getArrayOfObjectsWith49RandomStrings();
    sortArrayOfObjects(arr);
    return arr.splice(0, 6).map(el => el.number);
}
console.log(get6RandomNumbersOf49());
