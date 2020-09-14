// 1

const getCustomSequence = (num) => {
    let sequence = [];
    while (num !== 1) {
        sequence.push(num);
        num % 2 === 1 & num > 1 ? num = num * 3 + 1 : num = Math.floor(num / 2);
    }
    sequence.push(1);
    return sequence;
};

const getMaxSequenceLengthInInterval = (i, j) => {
    let maxSeq = 0;
    let currentMax = 0;
    for (let num = i; num <= j; num++) {
        let previousMax  = currentMax;
        let currentSequence = getCustomSequence(num);
        currentMax = currentSequence.length;
        maxSeq = Math.max(previousMax, currentMax);
    }
    return maxSeq;
};

console.log(getMaxSequenceLengthInInterval(1,3));