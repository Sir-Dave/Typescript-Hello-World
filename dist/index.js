"use strict";
let mySize = 3;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.2;
    return income * 0.3;
}
var tax = calculateTax(175000, 2021);
var employee = {
    id: 1,
    name: "David Abiola",
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map