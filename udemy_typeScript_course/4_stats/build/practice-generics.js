"use strict";
// NOTHING TO DO WITH GENERICS
var addOne = function (a) {
    return a + 1;
};
var addTwo = function (a) {
    return a + 1;
};
var addThree = function (a) {
    return a + 1;
};
// Best solution
var add = function (a, b) {
    return a + b;
};
///////////////////////////
var HoldNumber = /** @class */ (function () {
    function HoldNumber() {
        this.data = 0;
    }
    return HoldNumber;
}());
var HoldString = /** @class */ (function () {
    function HoldString() {
        this.data = 'Dummy';
    }
    return HoldString;
}());
var holdNumber = new HoldNumber();
holdNumber.data = 123;
var holdString = new HoldString();
holdString.data = 'Hello';
// Using Generics
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    return HoldAnything;
}());
var holdNumber2 = new HoldAnything();
holdNumber2.data = 123;
var holdString2 = new HoldAnything();
holdString2.data = 'Hello Again!';
///////////////////////////
