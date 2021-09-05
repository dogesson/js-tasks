console.log("Let, Const & scoping")
// Scoping examples with modules.
import {module_const, module_let, module_var} from "./Variables1.mjs";

console.log(module_const + " from Variables1 viewed from Variables2")
console.log(module_let + " from Variables1 viewed from Variables2")
console.log(module_var + " from Variables1 viewed from Variables2")

export function safe_division(dividend, divisor) {
    if (is_zero(divisor)) {
        return console.error("Safe Division Error : Attempt to Div-By-Zero!")
    } else {
        let res = dividend / divisor;
        return console.log("Safe Division Result = " + dividend + " / " + divisor + " = " + res)
    }
}

function is_zero(n) {
    return typeof n == 'undefined' || isNaN(n) || !n;
}


// console.log("BLOP after meme_division:" + BLOP);
// "ReferenceError: BLOP is not defined"

// Function call (~invocation, execution)
// variable2_foo(a,b); // Using global scope variables created by variables1.js
// NOTE: W
// Well these ERR because they're not actually globally scoped since I'm using ES6 Mods.
// I can explicitly import variables from other mods, as can be seen above, which is
// more safe and sane.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// const is same as let (scope is NOT global or function, it's: local)
// Local scope means inside the outer { and  } marks, or inside for
// for( let i=i; i<10; i++ ) { console.log(i); }
// ((let and const can be used in Global scope too, then global))
// BUT for const the _immediate_ value is constant:
const immediate_55 = 55;
// immediate_55 = 1; ERR: Attempt to assign to const/read only var.
// Only the variable is protected by the const, and the variable here is a reference to an object.
const blap = {blup: "uiasg", blep: "ndgn"};
// This means we can't assign "blap = <something>", it'd be assignment to const/readonly var.
// The underlying object can be MUTATED.
blap.blup = "nas9ugna";

const alias_blap = blap;

// NOTE:
//
// Rust has a type system that prohibits behavior like the above (where alias_blap
// references blap), and we are mutating while referencing values. It is called
// 'affine-types', a step away from something called 'linear-types'. What it means
// in practice is that, you can have many references to a variable, OR you can have 1
// and exactly 1 mutable reference, also known as XOR mutability: a value may be either
// aliased or mutable, but NOT BOTH at the same time.
//
// The difference of affine and linear type system is 'basically' that in affine you don't
// have to _use_ every resource, but any resource that is used is used at most once. But in
// linear type systems _every_ variable is used exactly once.
//
// https://en.wikipedia.org/wiki/Substructural_type_system
