/**
 * Created by PierreRainero on 01/12/2016.
 */

(function($) {
    $(document).ready(function(){

        var perso = new Object();
        perso.xDecalage = 0;
        perso.yDecalage = 0;

        function init(){

        }

        function sautX(){

        }


        var Instructions = ["instru1", "instru2", "instru3"];
        var i=0, l=Instructions.length;

        $("#repondre").click(function () {
            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                bougerMapDroite();
                i++;
            }
        })

        $("#fond").click(function () {
            bougerMapGauche();
        })
        /*
        function newInstruction() {
            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                bougerMapGauche();
                i++;
            }
        }*/

        function bougerMapGauche(){
            $("#fond").animate({"left": "-=500px"}, "slow");
        }

        function bougerMapDroite() {
            $("#fond").animate({"right": "-=500px"}, "slow");
        }

        function bougerBonhomme() {
            $("#personnage").animate({top:'5%'}, 100);


        }
    });
})(jQuery);

