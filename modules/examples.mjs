// Because this practice uses modules, all those pesky global variables/functions
// have been yeeted.
//
// "use strict" is enabled due to modules automatically.
//
// import {module_const, module_let, module_var} from "./Features/Variables1.mjs";
// Oddly, they can all be imported to wherever?
//
// Can not actually import Objects/ad_hoc_object variable from a block.
// import {ad_hoc_obj} from "./Features/Objects.mjs";
//

import {first_val, generator_iterator} from "./Features/Generators.mjs";
import {Product} from "./Product/ProductModel.mjs";
import {safe_division} from "./Features/Variables2.mjs";
import {only_number_values, wat} from "./Features/Variables3.mjs";
import {arrow_funs, iiefs} from "./Features/Functions2.mjs";
import {sum_prime} from "./Features/Functions3.mjs";
import {CAT_ENUM} from "./Category/CategoryModel.mjs";
import {memePromise, rej, res} from "./Features/AsyncProms.mjs";
// Default export example:
import fun from "./Features/Modules.mjs";
import {Thing} from "./Features/Mixin.mjs";
import {test_random_prod_generator} from "./Product/ProductTests.mjs";
import {test_gen_random_nums, test_gen_random_str} from "./Tests/Helpers.mjs";
import {print_cps_factorial} from "./Features/CPS.mjs";

print_cps_factorial(5);

console.log(fun);
console.log("Example 0.1 (04.09)" + "\n" + "Tested on Google Chrome 95.0")

let prod_ex1 = new Product("Football", 1337, "Handegg");
console.log(prod_ex1.print_debug());
console.log(prod_ex1.print_display());

safe_division(2, 0);
safe_division(10, 2);

console.log("First value from gen: " + first_val.value);
console.log("Generator yielded: " + generator_iterator.next().value)

console.log(wat())
console.log(only_number_values())

// object_destructuring();

console.log((_ => 1337)("first_argument_ignored"));


arrow_funs();
iiefs();
console.log(sum_prime(123)(456)(789)(-123)());

console.log(CAT_ENUM.HANDEGG.type)

memePromise.then(res, rej)

// MIXIN
let t = new Thing("asd");
t.print("Printing Mixin");

// Five digit random number and string.
console.log("Five digit random number = " + test_gen_random_nums())
console.log("Five character random str = " + test_gen_random_str())

let random_prods = test_random_prod_generator(10, 3);

random_prods.forEach(prod => {
    console.log(prod.print_display())
})



