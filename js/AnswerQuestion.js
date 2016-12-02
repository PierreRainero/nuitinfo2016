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

var qCounter;
var nbQuestion = questions.length;
var freeQuestions = [0,1,2,3,4,5,6,7,8,9];

function initQuestion(){
    var r = getRandomInt(freeQuestions.length);
    console.log(r)
    qCounter = freeQuestions[r];
    document.getElementById("instructions").innerHTML = questions[qCounter].question;
    document.getElementById("reponse1").innerHTML     = questions[qCounter].choices[0];
    document.getElementById("reponse2").innerHTML     = questions[qCounter].choices[1];
    document.getElementById("reponse3").innerHTML     = questions[qCounter].choices[2];
    var index = freeQuestions.indexOf(qCounter);
    freeQuestions.splice(index,1);
    console.log(freeQuestions);
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
