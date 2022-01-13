/* // Synchronous
console.log("I");
console.log("eat ");
console.log("ice-cream");
console.log("with a ");
console.log("spoon ");

// Asynchronous
console.log("I");
console.log("am ");
setTimeout(()=>{console.log("the head");}, 2500)
console.log("of the");
console.log("Elvira House");
*/

function one() {
    console.log("Step 1 now a surbodinate");
}

function two(call) {
    console.log("Step 2");
    call();
}

// two(one);
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"]
}
console.log(stocks.Fruits[1]);

let order = (prod) => {
    console.log("Order placed, please alert production");
    prod();
};

let production = () => {
    console.log("Order received, beginnning production");
};

order(production);