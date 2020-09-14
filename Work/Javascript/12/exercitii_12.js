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