// swapped scope
// Destructuring is pretty familiar, very common in Rust and functional programming.
export function object_destructuring() {
    let a = {fst: 123, snd: 456, trd: 789,};
    const {fst, snd, trd,} = a;
    console.log("fst: " + fst);
    let b = {snd, fst, trd,};
    console.log(b.snd);
}

function arr_destructuring() {
    let b = [123, 456, 789,];
    const [
        jkl,
        mno,
        prq,
    ] = b;
}
