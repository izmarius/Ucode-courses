// 1
const myCustomMapFunction = function (callback) {
    for (let i = 0; i < this.length; i++)
        this[i] = callback(this[i], i);
    return this;
}
Array.prototype.mymap = myCustomMapFunction;

let arr = [1, 2 , 3];
console.log(arr.mymap(el => el * 2));
console.log(arr);

//  2
function Shelf (color, lightIntesity, type, allowProductNumbers) {
    this.color = color;
    this.lightIntesity = lightIntesity;
    this.type = type;
    this.allowProductNumbers = allowProductNumbers;
    this.products = [];

    this.getType = function () {
        return this.type;
    }

    this.getProducts = function () {
        return this.products;
    }

    this.setColor = function (newColor) {
        this.color = newColor;
    }

    this.setLightIntensity = function (newLightIntensity) {
        this.lightIntesity = newLightIntensity;
    }
}

function Product (description, cost, profit, shelfType) {
    this.description = description;
    this.cost = cost;
    this.profit = profit;
    this.price = this.cost + this.profit;
    this.code = (Math.random() + 1).toString(36).slice(-5);
    this.type = shelfType;

    this.getType = function () {
        return this.type;
    }

    this.getPrice = function () {
        return this.price;
    }
}

function Store () {
    var shelfs = [s1, s2, s3, s4, s5];

    this.receiveProduct = function (product) {
        shelfs.forEach(el => {
            if (el.getType() !== product.getType())
                return false;
            el.getProducts().push(product);
        })
    }

    this.getSumOfAllProducts = function () {
        return shelfs.reduce(((acc, el) => acc += el.getProducts().reduce(((acc, el) => acc += el.getPrice()), 0)), 0);
    }

    this.getShelfs = function () {
        return shelfs;
    }
}

let s1 = new Shelf('blue', 50, 'sport', 10);
let s2 = new Shelf('red', 40, 'toys', 30);
let s3 = new Shelf('green', 80, 'jewelry', 15);
let s4 = new Shelf('orange', 60, 'clothes', 40);
let s5 = new Shelf('white', 100, 'presentation', 2);

let basketball = new Product('basketball', 10, 5, 'sport');
let stuffedBear = new Product('stuffedBear', 8, 3, 'toys');
let ring = new Product('ring', 50, 13, 'jewelry');
let hoodie = new Product('hoodie', 15, 7, 'clothes');
let bicycle = new Product('bicycle', 0, 0, 'presentation');

let store1 = new Store();
store1.receiveProduct(basketball);
store1.receiveProduct(stuffedBear);
store1.receiveProduct(ring);
store1.receiveProduct(hoodie);
store1.receiveProduct(bicycle);
console.log(store1.getShelfs().map(el => el.getProducts()));
console.log(store1.getSumOfAllProducts());