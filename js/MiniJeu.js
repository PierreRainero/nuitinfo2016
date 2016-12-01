/**
 * Created by PierreRainero on 01/12/2016.
 */

var Instructions = ["instru1", "instru2", "instru3"];
var i=0, l=Instructions.length;

function newInstruction(){
    if(i<Instructions.length){
        document.getElementById("instructions").innerHTML = Instructions[i];
        i++;
    }
}



function checkAnswer(elem){
    if(elem.innerHTML != currentQuestion.answer){
        elem.className += "wrong";
        tryAgain();
    }
    else{
        elem.className += "right";
        nextQuestion();
    }
}

