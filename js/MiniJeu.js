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

        function défiler(){
            $("#fond").animate({"left": "-=10%"}, 750);
        }


        function saut() {
            $("#personnage").animate({"top": "+=50px"}, 750);
            $("#fond").animate({"left": "-=10%"}, 750);

            $("#personnage").animate({"top": "-=50px"}, 750).delay(750);
        }

        function popNouveauDynamique(){
            $("#elementDynamique").visibility();
        }


    });
})(jQuery);

