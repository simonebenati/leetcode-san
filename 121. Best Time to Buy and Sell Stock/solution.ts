function maxProfit(prices: number[]): number {
    
    // TIL: Leetcode writes down constraints but doesn't want you to implement them :)

    // if (totalDaysHold === 0)
    //     throw new Error ('Please beware of the constraints of the exercise.x')

    // if (totalDaysHold <= 0 || totalDaysHold > 100000)
    //     throw new Error ('Please beware of the constraints of the exercise.y')

    // if (Math.min(...prices) < 0 || Math.max(...prices) > 10000)
    //         throw new Error('Please beware of the constraints of the exercise.z')

    //Logics
    let profit = 0;
    let counter = 0;
    let min = prices[0];

    while (counter < prices.length) {

        if (min > prices[counter])
            min = prices[counter]
        if (prices[counter] - min > profit)
            profit = prices[counter] - min 
        counter++;

    }

    return profit
    
};

console.log(maxProfit([2,7,1,5,3,6,4]))