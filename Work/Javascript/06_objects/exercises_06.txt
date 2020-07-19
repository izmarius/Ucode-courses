this
closure

- take a look over the javascript closure from documentation


1. please waf prototype whcj implements the map BUT not returns another instance of the array; mymap

	- [1,2,3] ==> [1,4,9] 
	arr1 --> arr2

	arr1 --> arr1 [1,4,9]


Array.prototype.mymap ....


2. Please write a system for a store. 
The store have n shelf.
every shelf can have the following settings
	- color
	- light intensity

	- type
		- sport
		- toys
		- jewelry
		- clothes
		- presentation (the products from this shelf cannot be sold and has no price)
	- allowedProductNumbers - how many products can fit into the shelf

when the color or light intensity is changed, this setting it will be aplied to all shelf

On a shelf you can put maximum "allowedProductNumbers" products;

every product has a 
	- cost
	- profit;
	- price = cost + profit
	- code; generate 5 random characters
	- type (same as shelf type)


Design a system like this
the store can:
	receive a product; it will be added on a shelf; if there is no shelf, it will return false
	provide the sum of all products 
	provide the sum of all products for every category
	sell a product with a specific code
	add more shelfs
	reserve a product for a period; in this case the product cannot be sold
	the store will keep a history of sold products

3. create another store with exact data from 2; 

		


	




