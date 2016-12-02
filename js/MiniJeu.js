/**
 * Created by PierreRainero on 01/12/2016.
 */

(function($) {
    $(document).ready(function(){
        $("#piece").hide();
        var deplacementObstacle=0;
        var nbPourBreak = 1;
        var etapes = 0;
        var nbPieces = 0 ;
        var animationEnded=false;

        function controleurHistoire(){
            switch(etapes){
                case 0:
                    defiler();
                    moveElement();
                    etapes++;
                    break;

                case 1:
                    saut();
                    moveElement();
                    setTimeout(
                        function()
                        {
                            popPiece();
                        }, 750);
                    etapes++;
                    break;

                case 2:
                    defiler();
                    moveElement();
                    movePiece();
                    etapes++;
                    break;

                case 3:
                    defiler();
                    moveElement();
                    movePiece();
                    etapes++;
                    break;

                case 4:
                    if(nbPourBreak==0){
                        etapes++;
                        effacerElementDynamique();
                        movePiece();
                        defiler();
                    }
                    else
                        modifieElementDynamique();
                    break;

                case 5:
                    defiler();
                    movePiece();
                    etapes++;
                    break;

                case 6:
                    takePiece();
                    defiler();
                    setTimeout(
                        function()
                        {
                            popElementDynamique();
                        }, 750);
                    etapes=0;
                    break;
            }
            var interval= setInterval(function(){ animationEnded = false; clearInterval(interval); }, 1500);
        }

        var Instructions = ["instru1", "instru2", "instru3"];
        var i=0, l=Instructions.length;

        $("#reponse1").click(function () {
            if(!animationEnded){
                animationEnded=true;
                controleurHistoire();
            }

            if (i < Instructions.length) {
                document.getElementById("instructions").innerHTML = Instructions[i];
                i++;
            }
        })

        function defiler(){
            $("#fond").animate({"left": "-=10%"}, 700);
        }


        function saut() {
            $("#personnage").animate({top: "-=20%"}, 750).delay(50).animate({top: "+=20%"}, 750);
            $("#fond").delay(125).animate({left: "-=10%"}, 750);
        }

        function popElementDynamique(){
            nbPourBreak=1;
            $("#obstacle1").delay(750).show();
        }

        function moveElement() {
            $("#obstacle1").animate({"left": "-=10%"}, 750);
        }

        function movePiece() {
            $("#piece").animate({"left": "-=10%"}, 750);
        }

        function popPiece() {
            $("#piece").show();
        }
        
        function effacerElementDynamique() {
            $("#obstacle1").animate({"left": "+=40%"}, 750);
        }
        
        function modifieElementDynamique() {
            nbPourBreak--;
            $("#obstacle1").hide();
        }
        
        function takePiece() {
            $("#piece").hide();
            $("#piece").animate({"left": "+=40%"}, 750);
        }

    });
})(jQuery);

