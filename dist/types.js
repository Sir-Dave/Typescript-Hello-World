"use strict";
var _a;
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
var w1 = kgToLbs(20);
var w2 = kgToLbs("30kg");
console.log(`Equivalent value is ${w1} pounds`);
console.log(`Equivalent value is ${w2} pounds`);
var textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
var metric = "cm";
function greet(name) {
    if (name)
        console.log(`Hello ${name}`);
    else
        console.log("Hola!");
}
greet("David");
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=types.js.map