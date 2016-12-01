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
                i++;
            }
        })

        function bougerMapGauche(){
            $("#fond").animate({"left": "-=10%"}, "slow");
        }

        function bougerMapDroite() {
            $("#fond").animate({"right": "-=10%"}, "slow");
        }

        function bonhommeSautant() {
            $("#personnage").animate({"top": "+=50px"}, "slow");
        }


    });
})(jQuery);

