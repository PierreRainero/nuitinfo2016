/**
 * Created by PierreRainero on 01/12/2016.
 */

(function($) {
    $(document).ready(function(){
        $("#obstacle1").hide();

        var deplacementObstacle=0;

        var etapes = 0;
        var nbPieces = 0 ;

        function controleurHistoire(){
            switch(etapes){
                case 0:
                    defiler();
                    etapes++;
                    break;

                case 1:
                    saut();
                    popPiece();
                    etapes++;
                    break;

                case 2:
                    defiler();
                    etapes++;
                    break;

                case 3:
                    if(nbPourBreak==0){
                        etapes++;
                        effacerElementDynamique();
                    }
                    else
                        modifieElementDynamique();
                    break;

                case 4:
                    defiler();
                    etapes++;
                    break;

                case 5:
                    takePiece();
                    popElementDynamique();
                    etapes=0;
                    break;
            }

        }

        var Instructions = ["instru1", "instru2", "instru3"];
        var i=0, l=Instructions.length;

        $("#reponse1").click(function () {
            saut();
            popElementDynamique();
            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                i++;
            }
        })

        function defiler(){
            $("#fond").animate({"left": "-=10%"}, 750);
        }


        function saut() {
            $("#personnage").animate({top: "-=20%"}, 750).delay(50).animate({top: "+=20%"}, 750);
            $("#fond").delay(125).animate({left: "-=10%"}, 750);
        }

        function popElementDynamique(){
            if(deplacementObstacle==0)
                $("#obstacle1").show();
            else
                $("#obstacle1").delay(125).animate({left: "-=10%"}, 750);
            deplacementObstacle++;
        }


    });
})(jQuery);

