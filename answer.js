/* Foundation-Program-Assignment-1 */

/*
* Question 1: Value Detective.
* Falsy value = false, 0, -0, "", '', null, undefined, NaN
* Truthy value = "string", " ", {}, [], "0"
*/
function describeValue(anyValue)
{
    return `${typeof(anyValue)} | ${anyValue ? "truthy" : "falsy" }`;
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

/*
* Question 4: Dhaka CNG Fare Meter
*/
function getCngFare(distance, isNight = false, waitingMinutes = 0)
{
    if(typeof(distance) === "number")
    {
        let ExtraDistance = 0;
        let nightCharge = (50 + (waitingMinutes * 2)) * 0.2;
        let nightChargeWithExtraDistance = 0;
        let totalFare = 0;
        if(distance > 0 && distance <= 2)
        {
            return totalFare = isNight === true 
                                ? 50 + (waitingMinutes * 2) + nightCharge 
                                : 50;
        } else if(distance > 2) {
            ExtraDistance = distance - 2;
            nightChargeWithExtraDistance = (50 + (ExtraDistance * 15) + (waitingMinutes * 2)) * 0.2;
            return totalFare = isNight === true 
                                ? 50 + (ExtraDistance * 15) + (waitingMinutes * 2) + nightChargeWithExtraDistance
                                : 50 + (ExtraDistance * 15) + (waitingMinutes * 2);
        } else {
            return "Invalid input. The entire numeric value must be greater than 0!";
        }
    } else {
        return "Invalid input, The Entire value must be numeric!";
    }
}
// console.log(getCngFare(5, true));

/*
* Question 5: Run Chase Commentator
*/
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if(runsNeeded <= 0)
    {
        return "Won";
    } else if(ballsLeft <= 0) {
        return "Lost";
    } else {
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        if(requiredRate <= 6)
        {
            return `Need ${runsNeeded} runs in ${ballsLeft} | Comfortable`;
        } else if(requiredRate > 6 && requiredRate <= 12) {
            return `Need ${runsNeeded} runs in ${ballsLeft} | Tough`;
        } else if(requiredRate > 12) {
            return `Need ${runsNeeded} runs in ${ballsLeft} | Almost Impossible`;;
        }
    }
}
// console.log(getChaseVerdict(100, 80, 12));