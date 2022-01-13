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
};

function two(call) {
    console.log("Step 2");
    call();
}

two(one);