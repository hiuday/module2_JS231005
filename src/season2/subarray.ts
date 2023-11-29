function subarray(nums: number[]) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i: number = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);

    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
const nums: number[] = [-2, 1, 3, 4, 6, -9, 6, 4, 2];
console.log(subarray(nums));
