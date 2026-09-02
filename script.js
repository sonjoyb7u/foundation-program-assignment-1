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

/*
* Question 3: Username Gatekeeper
*/
function validateUserName(inputValue)
{
    if(inputValue.length >= 4)
    {
        inputValue = inputValue.toLowerCase(); 
        if(inputValue.includes("admin")) {
            return "Reserved Word";
        } else if(inputValue.includes(" ")) {
            return "No Space Allowed";
        }
        return "Available";
    } else if(inputValue.length < 4) {
        return "Too Short";
    }
}
// console.log(validateUserName("superadmin99"));