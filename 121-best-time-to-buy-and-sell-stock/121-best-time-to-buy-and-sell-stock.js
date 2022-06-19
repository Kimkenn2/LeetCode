/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let potential = 0
    let left = 0
    let right = 1
    while (right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            potential = Math.max(potential, profit)
        } else {
            left = right
        }
        right++
    }
    return potential
};