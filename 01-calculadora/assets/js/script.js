"use strict";

var igual = document.getElementById('igual');
var entrada = document.getElementById('entradas');
var limpar = document.getElementById('limpar');
entrada.innerHTML = "";

function insert(num) {
    var numero = document.getElementById('entradas').innerHTML;
    entrada.innerHTML = numero + num;
    let entradaArray = (numero + num).split("+");

    igual.onclick = function() {
        let resultado = Math.sqrt(Math.pow(parseFloat(entradaArray[0]), 2) + Math.pow(parseFloat(entradaArray[1]), 2));
        entrada.innerHTML = resultado;
    }

    limpar.onclick = function() {
        entrada.innerHTML = "";
    }
}