import {Product} from "./ProductModel.mjs";
import {test_gen_random_str, test_random_elem_from_arr} from "../Tests/Helpers.mjs";

let gen_n_random_prods = (prod_count, cat_count) => {
    let cats = gen_n_random_categories(cat_count);
    let res = [];
    for (let i = 0; i < prod_count; i++) {
        let t = test_gen_random_str();
        let c = test_random_elem_from_arr(cats);
        res.push(new Product(t, c));
    }
    return res
}

let gen_n_random_categories = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(test_gen_random_str())
    }
    return res
}

export let test_random_prod_generator = (prod, cat) => {
    return gen_n_random_prods(prod, cat)
}

// TODO more random data generators (date, price)

export let sample_product = () => {
    let prod = new Product("Blade Runner", "Film");
    // Calls the CUSTOM toJSON() implemented for the class:
    return JSON.stringify(prod)
}
