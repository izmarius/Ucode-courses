//filter
const users = [{name: 'mark', premium: true}, {name: 'mario', premium: false}];
const preiumUsers = users.filter(user => {
    return user.premium;
});
console.log(preiumUsers);

//map
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const saleProducts = prices.map(price => {
    if (price >= 30) {
        return price / 2;
    }
    return price;
});
console.log(saleProducts);

//reduce
const scores = [20, 10, 30, 25, 15, 40, 80, 5];
const result = scores.reduce((acc, score) => {
    if (score > 15) {
        acc++;
    }
    return acc;
}, 0);
console.log(result);

//find
const scoreList = [20, 100, 30, 25, 15, 100, 80, 5];
const firstHighScore = scoreList.find(score => {
    return score > 90;
});
console.log(firstHighScore); 

//sort
const heights = [1.20, 2, 1.50, 3];
heights.sort((a, b) => {
    return b - a;
});
console.log(heights);

