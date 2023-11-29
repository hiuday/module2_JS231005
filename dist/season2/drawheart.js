"use strict";
function drawHeart(size) {
    for (let i = 1; i < size; i++) {
        let row = "";
        for (let j = 1; j <= size; j++) {
            //hàng đầu
            if (i == 1) {
                if (j != 1 && j != size && j != Math.ceil(size / 2)) {
                    row += " * ";
                }
                else {
                    row += "   ";
                }
                continue;
            }
            //các hàng trước (50% hàng đầu kế tiếp)
            if (i <= Math.floor(size / 2)) {
                row += " * ";
                continue;
            }
            //các hàng còn lại (50%  hàng đầu kế tiếp)
            let value = i - Math.floor(size / 2);
            if (j <= value || j >= size - value + 1) {
                row += "   ";
            }
            else {
                row += " * ";
            }
        }
        console.log(row);
    }
}
drawHeart(7);
