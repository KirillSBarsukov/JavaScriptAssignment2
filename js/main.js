// JavaScript Document

/*STEP ONE 

Using a constructor function, create a coffee object that includes the follow members (name (string), size(string), extras(an array), orderSummary(method that shows the order summary on the page))
*/
function Coffee(name, size, extras){
    this.name = name;
    this.size = size;
    this.extras = extras;
    this.orderSummary = function(){
        return "You ordered " + name + ", " + size + ", with extras: " + extras;
    }
    this.thankyou = function () {
        return  document.getElementById("orderSummary").innerHTML = "Thanks for ordering a " + name + "!"; 
    }
}


/* STEP TWO 

Instatiate a coffee  based on the above constructor function, store it in a variable called myCoffee

Instantiate antother coffee based on the above constructor and store it in a a variable called yourCoffee

*/

let myCoffee = new Coffee("Americano", "large", ["sugar"]);
let yourCoffee = new Coffee("Latte", "extra large", ["milk", "sugar"]);

/* STEP THREE

Try accessing the prototype property of Coffee (which even though it is a constructor function it is still an object) with Coffee.prototype in the console. Then try Object.Prototype. What happens? Add your findings to this comment

*/
//I was able to get access to Coffee.prototype but not Object.Prototype.
console.log(Coffee.prototype);
console.log(Object.Prototype);

/* STEP FOUR 

Use myCoffee to create a new object instance - one based on myCoffee. Store this new instance in a variable called anotherCoffee

*/

let anotherCoffee = Object.create(myCoffee);
/* STEP FIVE 

Check out this new object inherits from the prototype with anotherCoffee.__proto__ in the console


*/
//Yes, it inherits
console.log(anotherCoffee.__proto__)


/* STEP SIX 

Remember that each  constructor function includes a prototype property with a value equal to an object that contains a constructor property. Try it out by typing myCoffee.constructor and yourCoffee.constructor

*/
console.log(yourCoffee.constructor)
console.log(myCoffee.constructor)

/* STEP SEVEN 

We can modify the prototype property of a constructor function - let's add another method to Coffee called thankyou that creates a new paragraph that thanks the customer for ordering and displays the name of the drink they ordered i.e. 'Thanks for ordering a latte!' The new paragraph should be appended to the orderSummary div. 

*/
//Done

//document.getElementById("orderSummary").innerHTML(myCoffee.thankyou());
/* STEP EIGHT 

In your console, call the thankyou method on myCoffee and yourCoffee. 

*/ 

console.log(myCoffee.thankyou());
console.log(yourCoffee.thankyou());







