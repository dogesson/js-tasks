// VALIDATION / CHECKING OF INPUT VALUES
// AN IDEA OF HOW COMPLICATED INPUT VALUE VALIDATION MIGHT GET*
// *in JavaScript which is a terrible language.

// IN THIS CASE FINALLY THE ACCEPTED ONES WOULD BE
//      - Number values from 0 to 5. (Business case!)
//      - Unclear specification: only NUMBER VALUES?
//        -> Then you can discard anything that's not a NUMBER VALUE / TYPE.
//        -> Simple filter operation.
//      - TODO parse 0, 1, 2, 3, 4, 5 ?
//      - Of them 0 is Falsy, others (1-5) Truthy.
//      - The rest of the values are Truthy => if(value) {//This done}
//
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//
// Introducing 1 falsy value in form of 0 makes the validation harder.

const array = [
    false,
    null,
    undefined,
    0,
    // 0n
    -0,
    NaN,
    '',
    "",
    ``,
    // document.all,
    "true",
    "false",
    true,
    " ", // Truthy, " ".trim() is falsy
    "abc",
    " abc ",
    "two",
    "-1",
    "0",
    "1",
    1,
    "4",
    "5",
    " 5 ",
    5,
    "6",
    "ö",
    /[\u0400-\u04FF]+/g,
];
// exp: 0, 0, 1, 1, 4, 5, 5, 5
// TODO its not correct.
export function wat() {
    let res = [];
    array.forEach(i => {
        let number = Number(i);

        if ((i === 0) ||
            i && (typeof (i) === "string") && !Number.isNaN(number)
            && number >= 0 && number < 6) {

            if (typeof i === "string" && i.trim().length !== 0) {
                console.log("IF: " + i + " to " + number);
                res.push(number);
            } else {
                console.log("ELSE: " + i + " to " + number);
                res.push(number);
            }
        }
    })
    return res
}

export function only_number_values() {
    return array.filter(i => {
        return Number.isInteger(i)
    })
}

function is_zero(x) {
    return (1 / x) === -Infinity
}
