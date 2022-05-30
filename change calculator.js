/*
* Change calculator
*   The following code finds a solution for a scenario where you have a limited amount of coins and want to get a set of them equal to a target value
*/


// Auxiliary function to sum all the values in a list (didn't want to look up how to make a reduce it would take me more time :P)
function sumCoins(coins) {
    let sum = 0;
    coins.forEach(element => {
        sum += element;
    });
    return sum;
}



// Function that solves the problem raised
// It has the following inputs:
// - The pool of available coins (an array following the example bellow)
// const pool = [
//     {value: 100, amount:5},
//     {value: 20, amount:5},
//     {value: 5, amount:5},
//     {value: 2, amount:3}
// ];
// - The selected set of coins (this should be an empty array of numbers, as it will be used in recursion, it can also be used if you have a preset of coins that you want to include)
// - The target is the target value you want to achieve this will be the sum of the array of coins returned
//
// Returns an array of coins if a solution for the target is found otherwise returns null
//
function calculate(pool, selected, target) {
    const total  = sumCoins(selected) ;
    const currentSelected = [...selected];
    const currentCoin = currentSelected[selected.length-1];
    if (total == target) {
        return currentSelected;
    }else if(total > target){
        return null;
    }
    var poolClone = JSON.parse(JSON.stringify(pool))
    if(!!currentCoin){
        poolClone = poolClone.filter(c=>c.value<=currentCoin);
    }
    for (const element of poolClone) {
        if(element.amount>0){
            currentSelected.push(element.value);
            element.amount = element.amount - 1;
            const result = calculate(poolClone, currentSelected, target);
            if(!!result){
                return result;
            }
            currentSelected.pop();
        }
    }

    return null;
    
}

// EXAMPLES:

const pool = [
    {value: 100, amount:5},
    {value: 20, amount:5},
    {value: 5, amount:5},
    {value: 2, amount:3}

];

const supertarget = 378




console.log(calculate(pool, [], supertarget));

console.log(calculate([
    {value: 100, amount:5},
    {value: 20, amount:5},
    {value: 5, amount:5},
    {value: 2, amount:3}

], [], 378));



console.log(calculate([
    {value: 100, amount:5},
    {value: 20, amount:5},
    {value: 5, amount:5},
    {value: 2, amount:3}

], [], 377));


console.log(calculate([
    {value: 100, amount:5},
    {value: 20, amount:5},
    {value: 5, amount:5},
    {value: 2, amount:3}

], [], 374));

console.log(calculate([
    {value: 100, amount:5},
    {value: 20, amount:5},
    {value: 5, amount:5},
    {value: 2, amount:3}

], [], 373));