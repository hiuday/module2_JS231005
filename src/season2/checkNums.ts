function numberSum(nums: number[], target: number) {
  const result: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }
  return result;
}
console.log(numberSum([2, 7, 15, 15],17));
