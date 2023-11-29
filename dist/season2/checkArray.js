"use strict";
function isCheckMatchBracket(str) {
    const arr1 = ["(", "{", "["];
    const arr2 = [")", "}", "]"];
    const stack = [];
    //lặp vòng lặp của 2 arr
    for (let i = 0; i < str.length; i++) {
        if (arr1.includes(str[i])) {
            stack.push(str[i]);
        }
        else if (arr2.includes(str[i])) {
            const matchBracket = arr1[arr2.indexOf(str[i])];
            if (stack.length === 0 || stack.pop() != matchBracket) {
                return false;
            }
        }
    }
    console.log(stack);
    return stack.length === 0;
}
