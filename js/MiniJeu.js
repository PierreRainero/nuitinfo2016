/**
 * Created by PierreRainero on 01/12/2016.
 */

var perso = new Object();
perso.xDecalage = 0;
perso.yDecalage = 0;

function init(){

}

function sautX(){

}


var Instructions = ["instru1", "instru2", "instru3"];
var i=0, l=Instructions.length;

function newInstruction() {
    if (i < Instructions.length) {
        document.getElementById("instructions").innerHTML = Instructions[i];
        i++;
    }
}

function bouger() {

}


$(document).ready(function(){

    function bougerMapGauche(){
        $("#fond").animate({left: '5%'}, 100);
    }

    function bougerMapDroite(){
        $("#fond").animate({right: '5%'}, 100);
    }

    function bougerBonhomme() {
        $("#personnage").animate({top:''})
    }

})(jQuery);
