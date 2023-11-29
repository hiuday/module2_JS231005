"use strict";
function checkPermutation(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const textS = s.split("").sort();
    const textT = t.split("").sort();
    return textS === textT;
}
