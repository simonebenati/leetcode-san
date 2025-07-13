// Notes: this fails due to the fact that I'm iterating twice the whole array hence the operation escalates from O(n) to O(n²). We can do better by simplifying the iteration to just O(n)

// Export hack just for the linter not to throw errors :)
export function maxProfit(prices: number[]): number {

    //General Conditions
    const totalDaysHold = prices.length

    if (totalDaysHold <= 0 || totalDaysHold >= 100000)
        throw new Error ('Please beware of the constraints of the exercise.')

    if (Math.min(...prices) < 0 || Math.max(...prices) > 10000)
            throw new Error('Please beware of the constraints of the exercise.')

    // Logics
    let profit = 0;

    for (const currentProfit of prices) {
        let counter = prices.indexOf(currentProfit)+1;

        while (counter < totalDaysHold) {
            profit = (prices[counter] - currentProfit > profit) ? (prices[counter] - currentProfit) : profit;
            counter++;
        }
    }
    return profit
    
};