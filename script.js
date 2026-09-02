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

/*
* Question 2: Bangladesh Weekend Machine
*/
function getDayType(inputValue)
{
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    switch(true)
    {
        case inputValue === "Sunday" || inputValue === "Monday" || inputValue === "Tuesday" || inputValue === "Wednesday" || inputValue === "Thursday":
            return "Working Day";
            break;
        case inputValue === "Friday" || inputValue === "Saturday":
            return "Weekend";
            break;
        default:
            return "Invalid Day";
            break;
    }
}
// console.log(getDayType("JS"));