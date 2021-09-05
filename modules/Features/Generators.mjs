// Notes from here:
// https://javascript.plainenglish.io/the-basics-of-javascript-generators-f89c9b0e8d72
//
// Generators are functions
//     - capable of returning multiple values,
//     - and they may not execute completely.
// Generator function execution
//     - can be triggered in parts.
//     - can stop execution in the middle and resume another task and
//       after a while, resume the function from where it left off.
//
// They can be paused and resumed one or more times. Pausing a
// generator function allows for other code to execute. Meaning
// that generators are async.
//
// ES6 generator functions cannot be interrupted from outside.
// Until and unless yield is encountered during execution, generators
// cannot be halted. If the generator function does not contain any
// yield keywords, it will act like a normal function which executes to completion.
//

function* Generator() {
    yield 1;
    yield 2;
    yield 3;
}

// Generators return iterators. Iterators are 'lazy', they must be called
// to produce a value, ie. generator_iterator.next() will produce only the next val.

export let generator_iterator = Generator();
export let first_val = generator_iterator.next();


