// Variables and Scopes.
// "Module scoped" and exported outside.
export var module_var = "module_var";
export let module_let = "module_let";
export const module_const = "module_const";

// Two global variables https://developer.mozilla.org/en-US/docs/Glossary/Scope
// NOTE
//
// Not exported (duh) so they're not very much global, more like MODULE scoped.
// Other modules cant find them, ergo not global.
let a;         // variable defined, value undefined
const b = 3;     // variable defined, value defined
let f;     // Enable the 'fix' to the implicit global scope var problem.

// Function definition (~function creation)
function variable_foo(c, d) {
    "use strict";
    let e;   // variable would be _hoisted_ here anyway
    // c and d are function parameters, i.e. function-scope   =  F   (GF)
    // variables that might get value from caller
    // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
    // "Planned Parameters" c and d

    // c = c + 3; // you could use the parameter variable as any local var
    e = c + d;    // e is a function-scope variable
    console.log("e: " + e);

    // f = e * 2;    // f is _implicit_ global scope variable f (Bad!!!)
    // Of course 'var f;' could be written in another file.
    // But all in all we _try_ to avoid using global scope variables.

    //f2 = 7;   // Another implicit global scope var created (even if in func!)

    console.log("f: " + f);

    // Value assigned to this is never used as it is not returned.
    c = 7;
}

a = 6;


f = 15;     // This is bad coding, (implicit global scope var)
console.log("f after function definition:" + f);

// Function call (~invocation, execution) happens after all definitions
//
variable_foo(a, b);        // "Actual Arguments" values of a and b
console.log("f after function call:" + f);
// c = 11;  // This is an error! Undeclared/undefined 'c'
// e = 13;  // This is an error! Undeclared/undefined 'e'


/*  Example of how VARIABLE HOISTING sometimes makes things tricky:
nameX = "Joe";      // implicit global scoped 'var'
                    // example would work same if here: var nameX = "Joe";
func zoo() {
                               // <= here _hoisted_: var nameX;
    nameX ="Mike"              // thus this refers to f-scoped, not global
    for(var i=0; i<10; i++) {
        var nameX = "Sue";         // this will become actually:  nameX = "Sue";
    }
}
zoo();
*/
