"use strict";
var counter = document.querySelector("#counter");
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = counter === null || counter === void 0 ? void 0 : counter.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
counter === null || counter === void 0 ? void 0 : counter.addEventListener("click", increment);
