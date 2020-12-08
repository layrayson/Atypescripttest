"use strict";
//MODEL
var keypadButtons = document.querySelectorAll(".screenkeys");
var input = document.querySelector("input");
var inputDisplay = [];
//VIEWS
keypadButtons.forEach(function (keypadButton) {
    keypadButton.addEventListener("click", function (e) {
        inputDisplay.push(keypadButton.innerText);
        input.value = inputDisplay.join("");
        e.preventDefault();
    });
});
//CONTROLLERS
var clearInput = function () {
    input.value = "";
};
var deleteInput = function () {
    inputDisplay.pop();
    input.value = inputDisplay.join("");
};
