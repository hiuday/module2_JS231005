"use strict";
function palindromeText(text) {
    const textString = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = textString.split("").reverse().join("");
    return textString === reversedString;
}
