/**
 * Created by PierreRainero on 01/12/2016.
 */

(function($) {
    $(document).ready(function(){
        $("#obstacle1").hide();

        var deplacementObstacle=0;
        var etapes = 0;
        var nbPieces = 0 ;

        var questions = [{
            question: "Je vais à l'école en _____.",
            choices: ["vélo", "caillou", "soleil"],
            correctAnswer: 'vélo'
        }, {
            question: "Ma _____ a les cheuveux blonds.",
            choices: ["boulangerie", "maman", "bateau"],
            correctAnswer: "maman"
        }, {
            question: "Je regarde la _____ souvent.",
            choices: ["télé", "baignoire", "souris"],
            correctAnswer: "télé"
        }, {
            question: "Mon _____ est Paul.",
            choices: ["chien", "prénom", "papier"],
            correctAnswer: "prénom"
        }, {
            question: "Le soleil est _____",
            choices: ["bleu", "jaune", "vert"],
            correctAnswer: "jaune"
        }, {
            question: "Les _____ sont dans la mer.",
            choices: ["ours", "chats", "poissons"],
            correctAnswer: "poissons"
        }, {question: " ",
            choices: ['1', '2', '6'],
            correctAnswer: '6'
        }, {question: "Question 7",
            choices: ['1', '2', '7'],
            correctAnswer: '7'
        }, {
            question: "Question 8",
            choices: ['1', '2', '8'],
            correctAnswer: '8'
        }, {
            question: "Question 9",
            choices: ['1', '2', "9"],
            correctAnswer: "9"
        }];

        initQuestion();

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

        var qCounter;
        var nbQuestion = questions.length;
        var freeQuestions = [0,1,2,3,4,5,6,7,8,9];

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
            nextQuestion();
        }

        function wrongAnswer(){

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
            checkAnswer("reponse1");
        })

        $("#reponse2").click(function () {
            checkAnswer("reponse2");
        })

        $("#reponse3").click(function () {
            checkAnswer("reponse3");
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

