// Test helpers.
// Relevant unit tests in the relevant folder.

// Random 5 digit number.
export let test_gen_random_nums = () => {
    return Math.floor(10000 + Math.random() * 90000)
}
// Random 5 character string
export let test_gen_random_str = () => {
    return test_gen_random_nums().toString()
}

// N random five digit numbers:
export let test_gen_n_random_nums = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(test_gen_random_nums())
    }
    return res
}

// N random five character strings:
export let test_gen_n_random_strs = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(test_gen_random_str())
    }
    return res
}

// A helper function to somewhat randomly select an item from an array:
export let test_random_elem_from_arr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
