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

        $("#reponse1").click(function () {
            saut();
            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                i++;
            }
        })

        function défiler(){
            $("#fond").animate({"left": "-=10%"}, 750);
        }


        function saut() {
            $("#personnage").animate({top: "-=20%"}, 750).delay(50).animate({top: "+=20%"}, 750);
            $("#fond").delay(125).animate({left: "-=10%"}, 750);
        }

        function popNouveauDynamique(){
            $("#elementDynamique").visibility();
        }


    });
})(jQuery);

