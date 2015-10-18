
$(document).ready(function(){


var question;
var tally=0;
var currentQuestion = 0,
askingQuestion = true;
var submitBtn = document.getElementById('myBtn');
var index = 0;
var quizForm = document.getElementById('quiz');
var currentQuestion = 0;
var choices;
var radioButtons = document.getElementsByName('radioOption');




/*
$("#myBtn").click(function(){

  alert(allQuestions[0].question);
})

*/




var allQuestions = [{
  question: "What was Joey Ramone's real name?",
  choices: ["Jeffrey Ross Hyman", "John Doe", "Billy joe", "Thurston Moore"],
  correctAnswer: 0
},

{
  question: "In 2002 what band ranking did Spin magazine give The Ramones?",
  choices: ["The best band of all time", "Second greatest band of all time", "100th best band of all time", "This is a trick question. The Ramones were never in Spin"],
  correctAnswer: 1
  },


{
  question: "Which Ramone quit the band and made a rap album?",
  choices: ["Dee Dee Ramone", "Joey Ramone", "Tony Ramone", "Tommy Ramone"],
  correctAnswer: 0
},

{
  question: "What was the song 53rd and 3rd supposedly about?",
  choices: ["A hooker Joey Ramone almost married", "A hooker Tommy Ramone almost married", "Dee Dee Ramone becoming a male prostitute", "A club the band frequently played at"],
  correctAnswer: 2
},

{
  question: "Who actually wrote the song 'Hungry Heart'?",
  choices: ["Billy Joe", "Bruce Springsteen", "Joe Strummer", "Joey Ramone"],
  correctAnswer: 1

}];









//this starts when the screen loads
window.onload = startFunc();
submitBtn.addEventListener('click', lookForChecked);




//adds up your score at the end
function addQuiz() {
    quizForm.innerHTML = "<h1>Completed</h1><p class='total'>You scored a total of " + tally + " out of " + allQuestions.length + "</h1>";
    submitBtn.remove();
}

//begins the game
function startFunc() {
    if (currentQuestion === 0) {
        myBtn.value = "Begin";
    }
}







//presents questions to user
function askQuestion () {
    choices = allQuestions[currentQuestion].choices;
    question = allQuestions[currentQuestion].question;

    if (currentQuestion < allQuestions.length) {
        submitBtn.value = "Next";
        quizForm.innerHTML = "<h1>" + question + "</h1>";


        //loop through object
        for (var i = 0; i < choices.length; i++) {
            quizForm.innerHTML += "<label><input type='radio' name='radioOption' value='" + choices[i] + "'/>" + choices[i] + "</label>";
        }
        if (currentQuestion == allQuestions.length - 1) {
            submitBtn.value = "Last One!";
        } else if (currentQuestion > allQuestions.length - 1) {
            addQuiz();
        }
    }
}






//checks if radio buttons are checked
function lookForChecked() {

    if (radioButtons.length > 1) {

            var checked = false;

        for (var i = 0; i < radioButtons.length; i++) {
            var selection = radioButtons[i];

             if (selection.checked) {


                //add 1 to your score 
                var index = [i];
                if (i === allQuestions[currentQuestion].correctAnswer) {
                    tally++;

                }
                if (currentQuestion < allQuestions.length -1) {
                    currentQuestion++;

                } else {
                    console.log('Completed');
                    addQuiz();
                   return false;
                }
                break;
            }
        }




        //if nothing is checked then there will be an alert
        if ($('input[name="radioOption"]:checked').length < 1) {
            alert('You didnt choose!');
        }
    }//start again
        askQuestion();
}














});


