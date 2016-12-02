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
        var freeQuestions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];


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
            explication : "Le soleil (شمس) est jaune (أصفر), et non bleu (أزرق) ou vert (أخضر).",
            correctAnswer: "jaune"
        }, {
            question: "Les _____ sont dans la mer.",
            choices: ["ours", "chats", "poissons"],
            explication : "Les poissons (سمك) sont dans la mer (بحر), alors que les ours (تحمل) et les chats (القطط) sont sur terre (أرض).",
            correctAnswer: "poissons"
        }, {
            question: "Je mange des _____ avec ma viande.",
            choices: ["légumes", "cailloux", "murs"],
            explication : "Je ne peux manger (أكل) de murs (الجدران) ou de cailloux (الحصى), mais je peux manger des légumes (خضروات) avec de la viande (لحم).",
            correctAnswer: "légumes"
        }, {
            question: "Mon papa a une _____ rouge.",
            choices: ["jambe", "voiture", "lune"],
            explication : "Une jambe (ساق) ou une lune (هلال) ne sont pas rouges (أحمر), alors qu'une voiture (سيارة) peut l'être.",
            correctAnswer: "voiture"
        }, {
            question: "Les arbres ont des _____ vertes.",
            choices: ["feuilles", "tuiles", "tables"],
            explication : "Les arbres (الأشجار) ont des feuilles (أوراق) vertes (أخضر).",
            correctAnswer: "feuilles"
        }, {
            question: "Le chocolat est _____",
            choices: ["marron", "jaune", "bleu"],
            explication : "Le chocolat (شوكولاتة) est marron (اللون البني) mais pas jaune (أصفر) ou bleau (بلي).",
            correctAnswer: "marron"
        }, {
            question: "نهر",
            choices: ["océan", "pain", "vert"],
            explication : "pain = خبز, vert = أخضر",
            correctAnswer: "océan"
        }, {
            question: "بنفسجي",
            choices: ["rouge", "vert", "violet"],
            explication : "rouge = أحمر,vert = أخضر",
            correctAnswer: "violet"
        }, {
            question: "تاريخ",
            choices: ["histoire", "pays", "famille"],
            explication : "pays = بلد, famille = عائلة",
            correctAnswer: "histoire"
        }, {
            question: "طائرة",
            choices: ["bateau", "avion", "mouche"],
            explication : "bateau = قارب, mouche = طيران",
            correctAnswer: "avion"
        }, {
            question: "ثمانية",
            choices: ["sept", "huit", "neuf"],
            explication : "sept = سبعة, neuf = جديد",
            correctAnswer: "huit"
        }, {
            question: "عظيم",
            choices: ["petit", "moyen", "grand"],
            explication : "petit = ضغير, moyen = الوسائل",
            correctAnswer: "grand"
        }, {
            question: "سحابة",
            choices: ["plante", "noir", "nuage"],
            explication : "plante = نبتة, noir = أسود",
            correctAnswer: "nuage"
        }, {
            question: "أمي",
            choices: ["maman", "papa", "tonton"],
            explication : "papa = أب, tonton = عم",
            correctAnswer: "maman"
        }, {
            question: "نجمة",
            choices: ["maison", "étoile", "porte"],
            explication : "maison = منزل, porte = باب",
            correctAnswer: "étoile"
        }, {
            question: "المحل",
            choices: ["cadeau", "bijoux", "magasin"],
            explication : "cadeau = هدية, bijoux = مجوهرات",
            correctAnswer: "magasin"
        }, {
            question: "un",
            choices: ["سبعة", "واحد", "خمسة"],
            explication : "un = 1",
            correctAnswer: "واحد"
        }, {
            question: "deux",
            choices: ["إثنان", "أربع", "تسعة"],
            explication : "deux = 2",
            correctAnswer: "إثنان"
        }, {
            question: "trois",
            choices: ["واحد", "صفر", "ثلاثة"],
            explication : "trois = 3",
            correctAnswer: "ثلاثة"
        }, {
            question: "quatre",
            choices: ["سبعة", "أربع", "صفر"],
            explication : "quatre = 4",
            correctAnswer: "أربع"
        }, {
            question: "cinq",
            choices: ["خمسة", "ثلاثة", "أربع"],
            explication : "cinq = 5",
            correctAnswer: "خمسة"
        }, {
            question: "six",
            choices: ["ثلاثة", "ستة", "ثلاثة"],
            explication : "six = 6",
            correctAnswer: "ستة"
        }, {
            question: "sept",
            choices: ["سبعة", "واحد", "إثنان"],
            explication : "sept = 7",
            correctAnswer: "سبعة"
        }, {
            question: "huit",
            choices: ["ستة", "خمسة", "ثمانية"],
            explication : "huit = 8",
            correctAnswer: "ثمانية"
        }, {
            question: "neuf",
            choices: ["ثلاثة", "تسعة", "سبعة"],
            explication : "neuf = 9",
            correctAnswer: "تسعة"
        }, {
            question: "dix",
            choices: ["عشرة", "إثنان", "واحد"],
            explication : "dix = 10",
            correctAnswer: "عشرة"
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
            var interval= setInterval(function(){ animationEnded = false; clearInterval(interval); }, 1500);
        }

        function wrongAnswer(){
            document.getElementById("notifications").innerHTML = questions[qCounter].explication;
            nextQuestion();
            var interval= setInterval(function(){ animationEnded = false; clearInterval(interval); }, 1500);
        }

        function endTest(){
            document.getElementById("contenuModalVictoire").innerHTML = "Vous avez répondu à toutes les questions et obtenu "+nbPieces+" pièces !";
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
            document.getElementById("boutonmagik").dispatchEvent(evt);
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
            $("#background").delay(125).animate({left: "-=15%"}, 750);
        }


        function saut() {
            $("#personnage").animate({top: "-=20%"}, 750).delay(50).animate({top: "+=20%"}, 750);
            $("#background").delay(125).animate({left: "-=15%"}, 750);
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
            nbPieces++;
        }

    });
})(jQuery);

