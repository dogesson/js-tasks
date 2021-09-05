// Arrow functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

export function arrow_funs() {
    let foo = () => {
        console.log("Arrow foo!");
    };
    foo();
    let greeting = name => {
        console.log("Hello " + name + "!");
    };
    greeting("asko");

    console.log(((name) => "Hello " + name)("Joe")); // IIFE version 1
    console.log((name => "Hello " + name)("Joe")); // IIFE version 2

    // NOTE: you want human readable code, not the shortest.
    // This code with arrow function IIFE takes 11-13 characters to write
    // let a = (() => 42)();
    // Writing THE SAME with traditional syntaxt takes 24-26 more
    // = 39 characters altogether. Of course only very short
    // functions have this huge 3 x bloating <> network js-file download benefit.
    // let b = (function () {
    //     return 42;
    // })();


    const peopleArray = ['Adam', 'Bertha', 'Cecily', 'Elvis', 'Elvis', 'Adam'];
    const firstTeam = peopleArray.filter((_, index) => index % 2 === 0);
    console.log("*** Every second name ***");
    console.dir(firstTeam);
    const otherTeam = peopleArray.filter((value, index) => index % 2 === 0 || value.length % 2 === 0);
    console.log("*** Every second name, plus even number length names ***");
    console.dir(otherTeam);

    const longNameTeam = peopleArray.filter((value, index, array) => {
        let longerNameFound = false;

        for (let i = 0; i < array.length; i++) {
            if (value.length < array[i].length) {  //  && index != i  Sometimes needed, NOT here
                longerNameFound = true;                          // because length < length
            }                                                    // so for oneself won't be true:
        }                                                        // "Bertha".length < "Bertha".length
                                                                 // will be false
        return !longerNameFound;
    });
    console.log("*** Longest length name(s) ***");
    console.dir(longNameTeam);

// Fourth example, using also the whole array, when looking at each item one by one (filter
// calls the callback for each item one by one)
    const sameNameTeam = peopleArray.filter((value, index, array) => {
        let sameNameFound = false;
        for (let i = 0; i < array.length; i++) {
            if (value === array[i] && index !== i) {  // index != i is sometimes needed, e.g here
                sameNameFound = true;                          // becaus value == array[i]
            }                                                  // for oneself :
        }                                                      // "Bertha" == "Bertha" (same slot)
        return sameNameFound;
    });
    console.log("*** Team with namesakes ***");
    console.dir(sameNameTeam);
}

export function iiefs() {
    // (() => 42)();
    // (_ => 42)("first_argument_ignored");
    console.log((() => 42)()); // Tricky test for code reader :)
    // (() => {
    //     return 42;
    // })(); // The same IIFE A bit longer way, with explicit return
}
