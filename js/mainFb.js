

// JAVASCRIPT PURO
function nomeProfilo() {
    alert(" Questa pagina si puo visualizzare anche, 'Responsive' da  smartphone  ");

    var chiama = prompt(" Digita il tuo nome  ?  ");

    const x = chiama;
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    capitalize(x);


    //console.log(capitalize(x));

    if (chiama != null) {

        document.getElementById("uno").innerHTML = capitalize(x)  + " <br> " + " Crea una storia " ;
        document.getElementById("due").innerHTML = ' A che cosa stai pensando ' + ' ' + capitalize(x) + ' ' + ' ?';
        document.getElementById("tre").innerHTML = capitalize(x);
        document.getElementById("cinque").innerHTML = ' A che cosa stai pensando ' + ' ' + capitalize(x) + ' ' + ' ?';
    }
}



/*     JQUERY    */

//  COMPARI E SCOMPARI JQUERY  in  .cerchio
//  FUNZIONA SOLO SU DESKTOP  

$(document).ready(function() {
    $(".cerchio, #frec ").click(function() {

        $(".e").toggle();
    });
});






/*   -------------     END    -------------    */

