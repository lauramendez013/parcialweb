$(document).ready(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var anuncioParam = urlParams.get('nombre');
    $('#h2resultado').prepend(anuncioParam);
    anuncioParam = urlParams.get('email');
    $('#emailresultado').prepend(anuncioParam);
    anuncioParam = urlParams.get('telefono');
    $('#numeroresultado').prepend(anuncioParam);
    anuncioParam = urlParams.get('gusto');
    $('#gustoresultado').prepend(anuncioParam);
    anuncioParam = urlParams.get('porcentaje');
    $('#porcentajeresultado').prepend(anuncioParam);
    
});