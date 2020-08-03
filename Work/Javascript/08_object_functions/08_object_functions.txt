links with algorithms:
https://www.dailycodingproblem.com/
codewors.com
leetcode.com
hackerrank.com
https://www.algoexpert.io/ - de site-ul asta va spuneam eu




NOTA: la curs am zis ca destructing e aceeasi treaba cu spread. e total fals si nu stiu cum de am spus asta.


destructing: initializarea unor variabile dintr-un object.
	ex:

	var obj = {name: 'ion'};

	destructing inseamna: 
		var {name} = obj;
	ceea ce este echivalent cu var name = obj.name;

	https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8

spread: 
	echivalent cu Object.assign. 
	var newObj = {...obj}



exemple de la curs:


var a = {};

var b = Object.assign(a,{x:1})

b
{x: 1}
var a = {x:1};

var b = a;

b.x = 4
{x: 4}
var b = Object.assign({},a);

{x: 4}
b.x = 5;
{x: 5}
{x: 4}
var c = {...a}

c.x = 8



// object.create de ce pune pe prototype?

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes



exercises:

1. WAF which sort an array of objects by age;
2. WAF which sort an array of objects by a property passed as a parameter;
3. WAF which sort an array of objects by a property and ascendent/descendent passed as a parameter ;

4. WAF WR the distinct values from an array
[1,2,2,2] => [1,2]

5. take a look over instanceof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

6. see the difference between instanceof and typeof
https://stackoverflow.com/questions/899574/what-is-the-difference-between-typeof-and-instanceof-and-when-should-one-be-used
http://engblog.yext.com/post/js-type-checking

7. let''s assume that javascript does not contains the new operator;
can you write your own "new" operator?
https://2ality.com/2014/01/new-operator.html

8. sort a object by key; 
ex: 
{
	zanzi: {test: 1},
	ana: 10,
	balet: 'duminica'
}
 ==>
{
	ana: 10,
	balet: 'duminica',
	zanzi: {test: 1},
}


9. sort an array of numbers by number of 1 from binary representation
hint: 
var d = 10;
console.log( d.toString(2) );


10. 
	- declare a object of type car which contains the method "start"
	- serialize the object as string: hint JSON.stringify
	- deserialize the object as obj1
	- call the start method; ask why the start method is not available
	- create a new object from obj1 having the type Car; the object could be obj2;  hint new Car(obj1); here, yiu can read the properties
	- call obj2.start; explain why you don''t have teh start method;
	- ask yourself how the car object can be create in order to have the start method. hints below
		1. use prototype - recommanded solution
		2. the start method can be declared using this 








