/* Predict the output of the code below and explain why this is the output using what you learned today. */

(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));


/*

This would produce an output of "a not defined" and "true". Since a will be overwritten by b, only b will get a value so that it won't be undefined, thus returning true
from (typeof b! == 'undefined).

While a will then become undefined since it no longer have a value assigned to it.

*/



/* Write a function that would allow you to do this using a closure

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

*/

function createBase(input) {
    return function(number) {
        return number + input;
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

/* Since function(number) is able to access "input" from "createBase", we can declare "input" first then add the parameters together thanks to closure */
