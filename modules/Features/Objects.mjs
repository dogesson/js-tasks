// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

const k = [];    // 1. Empty ad-hoc array object created (+ 2.var defined + 3.assigment)
const l = {};    // 1. Empty ad-hoc object crated (+2.var defined + 3.assigment)

// cannot actually export this block.
// export
{
    let a = "foo";
    let b = "bar";
    // Cannot actually export this:
    // ERR: Unexpected token: export.
    // export let ad_hoc_obj = {a,b};
    // ad-hoc object created {a:"foo",b:"bar"}
    let c = {a, b};
    console.log("c: ");
    console.dir(c);

    let d = {a: a, b: b}; // Same result {a:"foo",b:"bar"} just longer code
    console.log("d: ");
    console.dir(d);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
    let e = {[a]: 11, [b]: 22};   // object created: {foo:11,bar:22}
    let e2 = {[a]: a, [b]: b};    // object created: {foo:"foo",bar:"bar"}
    console.log("foo:" + e2.foo); // object doesn't have properties a or b!

    console.log("console.log for e: " + e);
    console.dir(e); // prints that object and its substructures (sometimes) nicely
                    // don't give it any added text => decomposes that String then
    console.dir(e2);
    // https://developer.mozilla.org/en-US/docs/Web/API/Console
    // Remember that Browser console and Server (Node?) console are
    // two different things, even if they support some of the same
    // features.

    let f = {...c};  // First:  {} -> _new_ object created,
                     // Second: ...c means copy all field names and values
                     // from object c to the newly created, separate object
    // ...x is called the spread notation / spread syntax:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    let g = [2, 4, 6]; // array with three Number items created
    let h = g;         // h has a 2nd reference to the _same_ object
    let i = [...g];    // exact _copy_ of the array created
    let j = [...g, 8]; // _copy_ (=similar but separate object) of the array,
                       // Plus one more item, 8, added!

    // Two more advanced examples:
    let j2 = [...g, ...g];  // [2,4,6,2,4,6]
    let j3 = [...g, g];     // [2,4,6,<reference to array 'g'>]
    g[1] = 222;
    console.log(j3[3][1]);   // same, location, value 222

    let k = {abc: true, xyz: false};  // object created
    let l = {...k};  // exact _copy_ of the object created
    let m = {...k};  // exact _copy_ of the object created
    m.abc = false;    // then changing one property
    let n = {...k, abc: false}; // replace field abc
    let o = {...k, def: 123, abc: "foobarish"};
    // add field def, redefine/replace value of abc, even changing type
    let p = {def: 123, abc: "disappearish", ...k};
    // add field def, add field abc, take all fields from k, replacing abc.
    // This is a possibly point of making error! So put ...k as first
    // unless a real reason to not to.
}
