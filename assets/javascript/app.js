// begins loading the function when document finishes loading

$(document).ready(function(){

// write a constructor function to define the parameters for the questions

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// defining the condition from the parent constructor to which an answer is correct

Question.prototype.isCorrect = function(choice) {
    return this.answer === choice;
}


/*  create an array with the objects that hold the questions and answer data
in reference to the constructor function */

var questions = [
        new Question("How many numbered Final Fantasy games have been released to this date?",
            ["13","14","15","16"],"15"),

        new Question("In what year did the original Atari 2600 console launch?",
            ["1980","1977","1976","1981"],"1977"),

        new Question("What video game currently has the lowest Metacritic score?",
             ["Family Party: Obstacle Arcade", "Ride to Hell: Retribution",
             "Leisure Suit Larry: Box Office Bust","Vroom in the Night Sky"],
             "Family Party: Obstacle Arcade"),

        new Question("What video game currently holds the record time for longest time in development?",
           ["Diablo 3", "Duke Nukem Forever", "The Last Guardian", "Final Fantasy XV"],
           "Duke Nukem Forever"),

        new Question("What is the fastest selling video game console?",
            ["Playstation 2", "Nintendo 3DS", "Xbox 360", "Nintendo Switch"], "Nintendo Switch"),

        new Question("How many characters appeared as playable units in Capcom's original Project X Zone?",
            ["60", "63", "64", "62"], "60"),

        new Question("In what year was the Sega Dreamcast discontinued?",
            ["1998", "1999", "2000", "2001"], "2001"),

        new Question("What is the oldest still-running MMORPG?",
            ["The Realm Online", "Kingdom of Drakkar", "Meridian 59", "Furcadia"], "Kingdom of Drakkar"),

        new Question('William "B.J." Blazkowicz is a main character of which game series?',
            ["Wolfenstein", "Call of Duty", "Medal of Honor", "Sniper Elite"], "Wolfenstein"),

        new Question("What is the best selling video game of all time?",
            ["Minecraft", "Wii SPorts", "Tetris", "Grand Theft Auto V"], "Tetris")
    ];

// constructor for game logic parameters

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// using the index of the array to show each question

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// showing the logic relation for determining when to add a point, and move to the next question

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrect(answer)){
        this.score++;
        $("#count").text("Correct")
        
    } else { $("#count").text("Incorrect")}
    
    this.questionIndex++;
}

// determining that the game is over when the question array reaches its end

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

/* function to begin the game, show results when over, and fill the question
 and answers with their respective elements from the array for each  */

var timer = 30;

function startGame() {
    if(quiz.isEnded()){
        showScore();
    } else {

        $("#count").text(timer + " seconds remaining")


        // displays the question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // displays the choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
     } 
            // displays what question you are on
            showProgress();
    }
} 

// function to tie the choices to their respective button id and process the button click

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);

        function toggle() {
            $("#btn0, #btn1, #btn2, #btn3").toggle("none")

        }
        toggle();
        setTimeout(toggle, 3000)
        setTimeout(startGame, 3000)
        
      
    }
}

// function to determine which question you are currently on and update as you go

function showProgress() {
    var currentQuestionNum = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
}

// display the results and allow you to redo the game

function showScore() {
    $("#quiz").html("<h1>Results</h1>" +"<br>"+ "<h2 id='score'> Your Score : " 
    + quiz.score + " out of " + quiz.questions.length + "</h2>" +"<br>"+ "<button id='tryagain'>Try Again</button>");
    $("#tryagain").click(function(){
    location.reload();
    })
} 

var quiz = new Quiz(questions)



$("#start").click(function(){
    startGame();
    $(".buttons").attr("class", "display")
    $("#start").addClass("none")
    $("#directions").addClass("none")
});



});