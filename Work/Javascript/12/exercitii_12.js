// 1. cea mai lunga secventa intr-un interval (text pb complet intr-o poza)

// 2. se cere sa se tipareasca la consola valoarea folosita la apelul functiei push

// 3. sa se ordoneze un sir de numere  descrescator in functie de numarul de aparitii ale cifrei 1 din reprezentarea binara a numarului;
// daca sunt mai multe numere care contin aceeasi valoare de numere de 1, acestea vor fi tiparite descrescator
// [1,2,3,8] ==> [3, 8, 2, 1]

// 4. se cere sa se tipareasca la consola valoarea unei proprietati si noua valoare de fiecare data cand se modifica;

// 1

const getCustomSequence = (num) => {
    let sequence = [];
    if (num === 1) {
        sequence.push(1);
        num = num * 3 + 1;
    }
    while (num !== 1) {
        sequence.push(num);
        num % 2 === 1 & num > 1 ? num = num * 3 + 1 : num = Math.floor(num / 2);
    }
    sequence.push(1);
    return sequence;
};

console.log(getCustomSequence(1));
console.log(getCustomSequence(2));

const getMaxSequenceLengthInInterval = (i, j) => {
    let maxSeq = 0;
    let currentMax = 0;
    for (let num = i; num <= j; num++) {
        let previousMax  = maxSeq;
        let currentSequence = getCustomSequence(num);
        currentMax = currentSequence.length;
        maxSeq = Math.max(previousMax, currentMax);
    }
    return maxSeq;
};

console.log(getMaxSequenceLengthInInterval(1,2));

// 2

Array.prototype.customPush = function (el) {
    this.length++;
    this[this.length - 1] = el;
    return this;
};

let ar = [1, 2, 3];
ar.customPush(10);
console.log(ar);

// 3
let numArr = [1, 2, 3, 8];

const getArraySortedByBinaryRepresentation = (arr) => {
    arr = arr.sort((a, b) => b - a);
    for (var i = 0; i < arr.length - 1; i++) {
        var noOfOnesA = arr[i].toString(2).split('').filter(el => el !== '0').length;
        for (var j = i + 1; j < arr.length; j++) {
            var noOFOnesB = arr[j].toString(2).split('').filter(el => el !== '0').length;
            if (noOfOnesA < noOFOnesB) {
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}
console.log(getArraySortedByBinaryRepresentation(numArr));