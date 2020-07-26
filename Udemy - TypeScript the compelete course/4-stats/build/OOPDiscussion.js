"use strict";
var rectangular = function (state) {
    return {
        area: function () {
            return state.height * state.width;
        }
    };
};
