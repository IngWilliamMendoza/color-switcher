"use strict";
var coloresHexageximales = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
var boton = document.getElementById("btn");
var color = document.querySelector(".color");
function getRandonNumber(lista) {
    return Math.floor(Math.random() * lista.length);
}
function generateColor(update) {
    var hexag = "#";
    for (var i = 0; i < 6; i++) {
        hexag += coloresHexageximales[getRandonNumber(coloresHexageximales)];
    }
    update(hexag);
}
boton.addEventListener("click", function () {
    generateColor(function (x) {
        color.textContent = x;
        document.body.style.backgroundColor = x;
    });
});
