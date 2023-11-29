function isCheckMatchBracket(str: string) {
  const arr1: string[] = ["(", "{", "["];
  const arr2: string[] = [")", "}", "]"];

  const stack: string[] = [];
  //lặp vòng lặp của 2 arr

  for (let i: number = 0; i < str.length; i++) {
    if (arr1.includes(str[i])) {
      stack.push(str[i]);
    } else if (arr2.includes(str[i])) {
      const matchBracket = arr1[arr2.indexOf(str[i])];
      if (stack.length === 0 || stack.pop() != matchBracket) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}

