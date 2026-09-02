/*
* Question 1: Value Detective.
* Falsy value = false, 0, -0, "", '', null, undefined, NaN
* Truthy value = "string", " ", {}, [], "0"
*/
function describeValue(any)
{
    return `${typeof(any)} | ${any ? "truthy" : "falsy" }`;
}

// console.log(describeValue([]));