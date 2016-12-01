


var questions = [{
    question: "answer a",
    choices: ['a', 'b', 'c'],
    correctAnswer: 'a'
}, {question: "answer b",
    choices: ['a', 'b', 'c'],
    correctAnswer: 'b'
}, {question: "answer c",
    choices: ['a', 'b', 'c'],
    correctAnswer: 'c'
}];

var qCounter = 0;

function newInstruction(){
    if(qCounter<questions.length){
        document.getElementById("instructions").innerHTML = questions[qCounter].question;
        qCounter++;
    }
}

function checkAnswer(idButton){
    if(document.getElementById(idButton).innerHTML == questions[qCounter].correctAnswer){
        document.getElementById(idButton).className += " right";
    }
    if(document.getElementById(idButton).innerHTML != questions[qCounter].correctAnswer){
        document.getElementById(idButton).className += " wrong";
    }
}
