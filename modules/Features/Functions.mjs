// https://developer.mozilla.org/en-US/docs/Glossary/Function
// foo1 and foo2 are same, and internally both are repr. as foo2
function foo1(a, b) {
    "use strict";
    return a + b;
}

let foo2 = function (a, b) {
    "use strict";
    return a + b;
};

foo1(3, 4);
foo2(3, 4);

let foo3 = function (d) {
    "use strict";
    if (d === true) {
        return function (text) {
            console.log("Truthful text: " + text);
        };
    } else {
        return function (text) {
            console.log("Alternative truth text: " + text);
        };
    }
};
foo3(true)("It's morning.");
let foo3b = foo3(true);
foo3b("It's morning.");
foo3b = foo3(false);
foo3b("I love mornings.");
console.log(typeof (foo1));
console.log("***dir***");
console.dir(foo3b);
console.dir(foo3b.prototype);
console.log("***   ***");

// IIFE = Immediately Invoked Function Expression
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// (Invoked = We define and call, right away)

(function () {
    "use strict";
    console.log("Hello from IIFE!");
})();

(function (name) {
    "use strict";
    console.log("Hello " + name);
})("Joe");

// Why / when / how could you benefit from using IIFE?
// 1. It's not in global namespace.
// 2. 'Module pattern' for data encapsulation.
let foo4 = function (a, b) {
    "use strict";
    let c;
    b = Number(b);

    if (Number.isNaN(b)) {
        c = a;
    } else {
        c = a + b;
    }

    return c;
};

console.log("foo4(3,4): " + foo4(3, 4));
console.log("foo4(3): " + foo4(3));
console.log("foo4(3): " + foo4()); // Now even a without value = undefined, fingers crossed

let foo5 = function (a, b) {
    "use strict";
    let c;
    a = Number(a);

    if (Number.isNaN(a)) {
        c = b;
    } else {
        c = a + b;
    }
    return c;
};

console.log("foo5(3,4): " + foo5(3, 4));
console.log("foo5(null,4): " + foo5(null, 4));

let consumer = function (func2) {
    "use strict";
    func2(2, 3);
};

let provider = function (_, num) {
    "use strict";
    console.log("Second number squared: " + (num * num));
};

consumer(provider);
let someFrameworkObject = {};
someFrameworkObject.onThisStrangeEvent = provider;
