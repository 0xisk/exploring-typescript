"use strict";
// Old JS
/* class Sorter {
   collection: number[];

   constructor(collection: number[]) {
     this.collection = collection;
   }
} */
// New JS 
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
