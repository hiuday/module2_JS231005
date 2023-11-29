"use strict";
function numberSum(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
            }
        }
    }
    return result;
}
console.log(numberSum([2, 7, 15, 15], 17));
