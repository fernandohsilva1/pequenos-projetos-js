window.onload = function () {
    var segundos = 00;
    var milisegundos = 00;
    var appendMiliSegundos = document.getElementById('milisegundos');
    var appendSegundos = document.getElementById('segundos');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        segundos = "00";
        milisegundos = "00";
        appendSegundos.innerHTML = segundos;
        appendMiliSegundos.innerHTML = milisegundos;
    }

    function startTimer () {
        milisegundos++;

        if (milisegundos <= 9) {
            appendMiliSegundos.innerHTML = "0" + milisegundos;
        }

        if (milisegundos > 9) {
            appendMiliSegundos.innerHTML = milisegundos;
        }

        if (milisegundos > 99) {
            console.log("segundos");
            segundos++;
            appendSegundos.innerHTML = "0" + segundos;
            milisegundos = 0;
            appendMiliSegundos.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            appendSegundos.innerHTML = segundos;
        }
    }
}

