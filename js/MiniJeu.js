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
        var qCounter;
        var freeQuestions = [0,1,2,3,4,5,6,7,8,9];

        var questions = [{
            question: "Je vais à l'école en _____.",
            choices: ["vélo", "caillou", "soleil"],
            explication : "Je peux utiliser un vélo (دراجة هوائية) pour me déplacer et non un caillou (حجر) ou un soleil (شمس).",
            correctAnswer: 'vélo'
        }, {
            question: "Ma _____ a les cheveux blonds.",
            choices: ["boulangerie", "maman", "bateau"],
            explication : "La boulangerie (مخبز) ou un bateau (قارب) n'a pas de cheveux (شعر), alors que ma maman (أمي) oui.",
            correctAnswer: "maman"
        }, {
            question: "Je regarde souvent la _____.",
            choices: ["télévision", "baignoire", "souris"],
            explication : "Je regarde la télévision (أشاهد التلفاز) et non la baignoire (حمام) ou la souris (فأر)." ,
            correctAnswer: "télévision"
        }, {
            question: "Mon _____ est Paul.",
            choices: ["chien", "prénom", "papier"],
            explication : "Mon prénom (الأسم الأول) doit être un nom propre et non un nom commun comme chien (كلب) ou papier (ورقة).",
            correctAnswer: "prénom"
        }, {
            question: "Le soleil est _____",
            choices: ["bleu", "jaune", "vert"],
            correctAnswer: "jaune"
        }, {
            question: "Les _____ sont dans la mer.",
            choices: ["ours", "chats", "poissons"],
            correctAnswer: "poissons"
        }, {
            question: "Je mange des _____ avec ma viande.",
            choices: ["légumes", "cailloux", "murs"],
            correctAnswer: "légumes"
        }, {
            question: "Mon papa a une _____ rouge.",
            choices: ["jambe", "voiture", "lune"],
            correctAnswer: "voiture"
        }, {
            question: "Les arbres ont des _____ vertes.",
            choices: ["feuilles", "tuiles", "tables"],
            correctAnswer: "feuilles"
        }, {
            question: "Le chocolat est _____",
            choices: ["marron", "jaune", "bleu"],
            correctAnswer: "marron"
        }, {
            question: "",
            choices: ["océan", "fleuve", "rivière"],
            explication : "fleuve se dit , rivière se dit ",
            correctAnswer: "océan"
        }, {
            question: "",
            choices: ["rouge", "vert", "violet"],
            explication : "rouge se dit ,vert se dit ",
            correctAnswer: "violet"
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }, {
            question: "",
            choices: ["", "", ""],
            correctAnswer: ""
        }];

        var nbQuestion = questions.length;
        initQuestion();

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
        }

        function initQuestion(){
            var r = getRandomInt(freeQuestions.length);
            qCounter = freeQuestions[r];
            document.getElementById("instructions").innerHTML = questions[qCounter].question;
            document.getElementById("reponse1").innerHTML     = questions[qCounter].choices[0];
            document.getElementById("reponse2").innerHTML     = questions[qCounter].choices[1];
            document.getElementById("reponse3").innerHTML     = questions[qCounter].choices[2];
            var index = freeQuestions.indexOf(qCounter);
            freeQuestions.splice(index,1);
        }

        function checkAnswer(idButton){
            if(document.getElementById(idButton).innerHTML == questions[qCounter].correctAnswer){
                rightAnswer();
            }else wrongAnswer();
        }

        function nextQuestion(){
            if(freeQuestions.length!=0){
                initQuestion();
            }else{
                endTest();
            }
        }

        function rightAnswer(){
            controleurHistoire();
            document.getElementById("notifications").innerHTML = "";
            nextQuestion();
            var interval= setInterval(function(){ animationEnded = false; clearInterval(interval); }, 1000);
        }

        function wrongAnswer(){
            document.getElementById("notifications").innerHTML = questions[qCounter].explication;
            nextQuestion();
            var interval= setInterval(function(){ animationEnded = false; clearInterval(interval); }, 1000);
        }

        function endTest(){
            console.log("fini");
        }

        function getRandomInt(max) {
            max = Math.floor(max);
            return Math.floor(Math.random() * max);
        }

        var Instructions = ["instru1", "instru2", "instru3"];
        var i=0, l=Instructions.length;

        $("#reponse1").click(function () {
            if(!animationEnded) {
                animationEnded=true;
                checkAnswer("reponse1");
            }
        })

        $("#reponse2").click(function () {
            if(!animationEnded) {
                animationEnded=true;
                checkAnswer("reponse2");
            }
        })

        $("#reponse3").click(function () {
            if(!animationEnded) {
                animationEnded=true;
                checkAnswer("reponse3");
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

