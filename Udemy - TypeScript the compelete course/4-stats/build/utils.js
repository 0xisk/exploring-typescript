"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = function (dataString) {
    // 
    var dateParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
