// Not really a FEATURE but something I've been trying to 'grok'
// when writing a toy compiler with Rust.
//
// https://matt.might.net/articles/by-example-continuation-passing-style/

// identify function with CPS style:
function id(x, ret) {
    ret(x);
}

// Non-CPS factorial.
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// CPS style always involves the function that is the 'continuation',
// CPS is an implementation technique where no function returns (value)
// to its caller - in JS they're 'void' functions.
// continuation is 'call back' function basically.
export function fact_cps(num, continuation) {
    if (num === 0) {
        continuation(1);
    } else {
        fact_cps(num - 1, function (x) {
            continuation(num * x)
        })
    }
}

// You can use 'void' / 'CPS' functions by passing them a function.
export let print_cps_factorial = fact => {
    fact_cps(fact, function (x) {
        console.log("Factorial: " + x)
    })
}

