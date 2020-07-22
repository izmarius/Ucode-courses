// 2. Please write a system for a store. 
// The store have n shelf.
// every shelf can have the following settings
// 	- color
// 	- light intensity

// 	- type
// 		- sport
// 		- toys
// 		- jewelry
// 		- clothes
// 		- presentation (the products from this shelf cannot be sold and has no price)
// 	- allowedProductNumbers - how many products can fit into the shelf

// when the color or light intensity is changed, this setting it will be aplied to all shelf

// On a shelf you can put maximum "allowedProductNumbers" products;

// every product has a 
// 	- cost
// 	- profit;
// 	- price = cost + profit
// 	- code; generate 5 random characters
// 	- type (same as shelf type)


// Design a system like this
// the store can:
// 	receive a product; it will be added on a shelf; if there is no shelf, it will return false
// 	provide the sum of all products 
// 	provide the sum of all products for every category
// 	sell a product with a specific code
// 	add more shelfs
// 	reserve a product for a period; in this case the product cannot be sold
// 	the store will keep a history of sold products

var helper = {
    getRandomString: function () {
        return (Math.random() + 1).toString(36).slice(5);
    }
}

var settings = {
    color: 'white',
    lightIntensity: 60,

    getColor: function () {
        return this.color;
    },

    getLightIntensity: function () {
        return this.lightIntensity;
    },

    setColor: function (newColor) {
        this.color = newColor;
    },

    setLightIntensity: function (newIntensity) {
        this.lightIntensity = newIntensity;
    }
}

var shelfType = {
    notSet: 'notSet',
    sport: 'sport',
    toys: 'toys',
    jewelry: 'jewelry',
    clothes: 'clothes',
    presentation: 'presentation',
}

function Shelf (allowedProductNumbers) {
    this.id = helper.getRandomString();
    this.type = shelfType.notSet;
    this.settings = settings;
    this.allowedProductNumbers = allowedProductNumbers;

    this.getId = function () {
        return this.id;
    }

    this.getShelfById = function (id) {
        if (this.id === id)
            return this;
    }

    this.setAllowedProductNumbers = function (n) {
        this.allowedProductNumbers = n;
    }
}

function Store () {
    this.shelfService = {
        shelfs: [s1, s2, s3, s4, s5],

        addShelf: function (shelf) {
            this.shelfs.push(shelf);
        },

        removeShelf: function (shelf) {
            this.shelfs = this.shelfs.filter(el => el.getId() !== shelf.id);
        },

        updateShelf: function (shelf, newAllowedProductNumbers) {
            if (this.shelfs.indexOf(shelf) === -1) {
                console.log('shelf not in store!');
                return false;
            }
            this.shelfs.filter(el => el.getShelfById(shelf.id))[0].setAllowedProductNumbers(newAllowedProductNumbers);
        }
    };
    this.prodcutService = {};
}
var s1 = new Shelf(5);
var s2 = new Shelf(5);
var s3 = new Shelf(3);
var s4 = new Shelf(10);
var s5 = new Shelf(2);
var s8 = '';


var store1 = new Store();
store1.shelfService.updateShelf(s8, 20);
console.log(store1);