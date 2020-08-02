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
var helper = {
    createUUID: () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c =='x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },
    
    getArrayOfObjectsWith49RandomStrings: () => {
        var arr = [];
        for (let i = 1; i <= 49; i++) 
            arr.push({number: i, code: helper.createUUID()});
        return arr;
    },
    
    sortArrayOfObjects: (arr) => {
        for (let i = 0; i < arr.length - 1; i++)
            for (let j = i + 1; j < arr.length; j++) 
                if (arr[i].code < arr[j].code) {
                    var aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
    },
    
    get6RandomNumbersOf49: () => {
        var arr = helper.getArrayOfObjectsWith49RandomStrings();
        helper.sortArrayOfObjects(arr);
        return arr.splice(0, 6).map(el => el.number);
    },

    getRandomNumberBetweenZeroAndN: (n) => {
        var randomNumber = Math.floor(Math.random() * (n));
        return randomNumber;
    },

    getEmptyMatrixOfEqualSize: (size) => {
        var matrix = Array(size).fill().map(() => Array(size).fill());
        return matrix;
    }
}

// 2
var lottoHelper = helper;

function Ticket () {
    this.id = 0;
    this.numbers= [];
}

var sixOf49Game = {
    tickerService: {
        winningTicket: [14, 29, 33, 1, 21, 8],
        registeredTickets: [],
        winnerTickets: {1: [], 2: [], 3: [], 4: [], 5: [], 6: []},

        registerNTickets: (n) => {
            while (n !== 0) {
                var ticket = new Ticket();
                ticket.id = lottoHelper.createUUID();
                ticket.numbers = lottoHelper.get6RandomNumbersOf49();
                sixOf49Game.tickerService.registeredTickets.push(ticket);
                n--;
            }
        },

        getWinnerTickets: () => {
            sixOf49Game.tickerService.registeredTickets.forEach(e1 => {
                var count = 0;
                e1.numbers.forEach(e2 => {
                    sixOf49Game.tickerService.winningTicket.forEach(e3 => {
                        if (e2 === e3)
                            count++;
                    })
                })
                if (count !== 0) {
                    Object.getOwnPropertyDescriptor(sixOf49Game.tickerService.winnerTickets, count).value.push(e1);
                    console.log(count + ' ' + e1.numbers);
                }       
            })
        }
    }
}
sixOf49Game.tickerService.registerNTickets(50);
console.log(sixOf49Game.tickerService.winningTicket);
console.log(sixOf49Game.tickerService.registeredTickets);
console.log(sixOf49Game.tickerService.winnerTickets);
sixOf49Game.tickerService.getWinnerTickets();

// 4
let getArrayOfNumberPairsWithSumEqualToN = (arr, n) => {
    var resultArray = [];
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++) 
            arr[i] + arr[j] !== n ? resultArray : resultArray.push([arr[i], arr[j]]);
    return resultArray;
}
console.log(getArrayOfNumberPairsWithSumEqualToN([1, 3, 2, 6, 5], 7));

// 5
let getMatrixOfEqualSizeWithRandomNumbersBelowN = (matrixSize, n) => {
    var matrix = helper.getEmptyMatrixOfEqualSize(matrixSize);
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix.length; j++) {
            var randomNum = helper.getRandomNumberBetweenZeroAndN(n);
            matrix[i][j] = randomNum;
        }    
    return matrix;
}
console.log(getMatrixOfEqualSizeWithRandomNumbersBelowN(3, 10));

// 6, 7, 8
function Matrix (matrix) {
    this.matrixService = {
        getMatrix: () => {
            return matrix;
        },

        getSum: () => {
            var sum = matrix.reduce(((acc, el) => acc += el.reduce(((acc, el) => acc += el), 0)), 0)
            return sum;
        },

        getSumOfDiagonalNumbers: () => {
            var sum = matrix.reduce(((acc, el1, i, arr1) => acc += el1.reduce(((acc, el2, j, arr2) => {
                if (i == j)
                    acc += el2;
                if (i == (arr2.length - 1 - j))
                    acc += el2;
                return acc;
            }), 0)), 0)
            return sum;
        }
    }
}

let mat1 = new Matrix(getMatrixOfEqualSizeWithRandomNumbersBelowN(3, 10));
console.log(mat1.matrixService.getMatrix());

console.log(mat1.matrixService.getSum());
console.log(mat1.matrixService.getSumOfDiagonalNumbers());

// 10
var weekDayss = {
    0: {name: 'uncheked', value: 0},
    1: {name: 'Monday', value: 1},
    2: {name: 'Teusday', value: 2},
    4: {name: 'Wednesday', value: 4},
    8: {name: 'Thursday', value: 8},
    16: {name: 'Friday', value: 16},
    32: {name: 'Saturday', value: 32},
    64: {name: 'Sunday', value: 64}
}
let getDayOfTheWeek = (checkedBoxes, weekDays) => {
    var selectedDays = [];
    for (let i = 0; i < 7; i++) {
        var c =  checkedBoxes[i];
        (c & weekDays[c].value) === 0 ? selectedDays : selectedDays.push(weekDays[c].name);
    }
    return selectedDays;
}
console.log(getDayOfTheWeek([1, 2, 4, 8, 0, 0, 0], weekDayss));