// Default parameter values for functions.
// Used if not enough arguments provided in call.
//   - Leads to undefined parameter value (undefined can be also specifically defined).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

let sum = function (num1, num2 = 3) {
    return num1 + num2;
};

export let sum_prime = fst => {
    let res = fst;
    return function helper(snd) {
        if (snd === undefined) {
            return res;
        } else {
            res += snd;
            return helper;
        }
    }
}

console.log(sum(4, 3));
console.log(sum(4));
// Undefined are 'defined' so doesn't default to default val?
console.log(sum(4, undefined))
console.log(sum(4, null));


