const myCustomFilterFunction = function (callback) {
    for (let i = 0; i < this.length; i++)
        if (callback(this[i])) {
            let aux = this[i];
            this[i] = this[this.length - 1];
            this[this.length - 1] = aux;
            this.length -= 1;
        }
    return this;
}
Array.prototype.myfilter = myCustomFilterFunction;

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

    this.getAllowedProductNumbers = function () {
        return this.allowProductNumbers;
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
    var forSale = false;

    this.getType = function () {
        return this.type;
    }

    this.getCode = function () {
        return this.code;
    }

    this.getPrice = function () {
        return this.price;
    }

    this.getDescription = function () {
        return this.description;
    }

    this.isForSale = function () {
        return forSale;
    }

    this.changeForSale = function () {
        forSale = !forSale;
    }
}

function Store () {
    var shelfs = [s1, s2, s3, s4, s5];
    var soldProducts = [];

    this.receiveProduct = function (product) {
        shelfs.forEach(el => {
            if (el.getType() !== product.getType())
                return false;
            if (el.getProducts().length >= el.getAllowedProductNumbers())
                return false;
            if (el.getType() !== 'presentation')
                product.changeForSale();
            el.getProducts().push(product);
        })
    }

    this.getSumOfAllProducts = function () {
        return shelfs.reduce(((acc, el) => acc += el.getProducts().reduce(((acc, el) => acc += el.getPrice()), 0)), 0);
    }

    this.getSumPerEachCategory = function () {
        return shelfs.map(el => el.getProducts().reduce(((acc, el) => acc += el.getPrice()), 0));
    }

    this.sellProduct = function (productCode) {
        shelfs.forEach(el => el.getProducts().filter(el => {
            if (el.getCode() !== productCode)
                return false;
            if (!el.isForSale())
                return false;
            soldProducts.push(el);
            el.changeForSale();
            return true;
        }));
    }

    this.reserveProduct = function (productCode) {
        var timeout = 1; //minutes
        shelfs.forEach(el => el.getProducts().forEach(el => {
            if (el.getCode() === productCode) {
                el.changeForSale();
                console.log('product:code,name ' + el.getCode() + ',' + el.getDescription() + ' reseerved for ' + timeout + ' minutes')
            }
            setTimeout(() => {
                el.changeForSale();
            }, timeout * 60 * 1000)
        }))
    }

    this.addShelf = function (newShelf) {
        shelfs.push(newShelf);
    }

    this.getShelfs = function () {
        return shelfs;
    }

    this.getSoldProducts = function () {
        return soldProducts;
    }
}

let s1 = new Shelf('blue', 50, 'sport', 10);
let s2 = new Shelf('red', 40, 'toys', 30);
let s3 = new Shelf('green', 80, 'jewelry', 15);
let s4 = new Shelf('orange', 60, 'clothes', 40);
let s5 = new Shelf('white', 100, 'presentation', 2);

let basketball = new Product('basketball', 10, 5, 'sport');
let boxingGloves = new Product('boxingGloves', 10, 4, 'sport');
let stuffedBear = new Product('stuffedBear', 8, 3, 'toys');
let ring = new Product('ring', 50, 13, 'jewelry');
let hoodie = new Product('hoodie', 15, 7, 'clothes');
let bicycle = new Product('bicycle', 0, 0, 'presentation');
let car = new Product('car', 0, 0, 'presentation');

const store1 = new Store();
store1.receiveProduct(basketball);
store1.receiveProduct(boxingGloves);
store1.receiveProduct(stuffedBear);
store1.receiveProduct(ring);
store1.receiveProduct(hoodie);
store1.receiveProduct(bicycle);
store1.receiveProduct(car);

console.log(store1.getShelfs().map(el => el.getProducts()));
console.log(store1.getSumOfAllProducts());
console.log(store1.getSumPerEachCategory());

store1.reserveProduct(store1.getShelfs()[0].getProducts()[0].getCode());

// sell a prodduct, I chose one exsiting code because they are generated random
store1.sellProduct(store1.getShelfs()[0].getProducts()[1].getCode());
console.log(store1.getSoldProducts());
console.log(store1.getShelfs().map(el => el.getProducts()));
console.log(store1.getShelfs()[0].getProducts()[0].isForSale());

// 3
const store2 = store1;

console.log(store2.getShelfs().map(el => el.getProducts()));