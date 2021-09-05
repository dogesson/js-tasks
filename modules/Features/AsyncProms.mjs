// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

export let res = x => {
    console.log("Returned = " + x)
}
export let rej = x => {
    console.log("Rejected =  " + x)
}

export const memePromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('RESOLVED');
    }, 100);
});


function res_with_delay(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            res(x);
        }, 2000);
    });
}

const add = async function (x) {
    let a = await res_with_delay(20);
    let b = await res_with_delay(30);
    return x + a + b;
};

add(10).then(x => {
    console.log(x);
});

(async function (x) {
    let a = res_with_delay(20);
    let b = res_with_delay(30);
    return x + await a + await b;
})(10).then(x => {
    console.log(x);
});
