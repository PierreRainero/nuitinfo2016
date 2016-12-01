/**
 * Created by PierreRainero on 01/12/2016.
 */

(function($) {
    $(document).ready(function(){

        var etapes = 0;

        function controleurHistoire(){
            switch(etapes){
                case 0:
                    defiler();
                    etapes++;
                    break;

                case 1:
                    saut();
                    etapes++;
                    break;

                case 2:
                    defiler();
                    etapes++;
                    break;

                case 3:
                    if(nbPourBreak==0)
                        effacerElementDynamique();
                    else
                        modifieElementDynamique();
                    break;

                case 4:
                    defiler();
                    etapes++;
                    break;

                case 5:
                    takePiece();
                    etapes=0;
                    break;
            }

        }

        var Instructions = ["instru1", "instru2", "instru3"];
        var i=0, l=Instructions.length;

        $("#repondre").click(function () {
            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                i++;
            }
        })

        function defiler(){
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

