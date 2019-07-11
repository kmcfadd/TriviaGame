// begins loading the function when document finishes loading

$(document).ready(function(){

// write a constructor function to define the objects for the questions

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

        new Question("What video game holds the lowest Metacritic score?",
             ["Family Party: Obstacle Arcade", "Ride to Hell: Retribution",
             "Leisure Suit Larry: Box Office Bust","Vroom in the Night Sky"],
             "Family Party: Obstacle Arcade"),

        new Question("What video game holds the record time for longest time in development?",
           ["Diablo 3", "Duke Nukem Forever", "The Last Guardian", "Final Fantasy XV"],
           "Duke Nukem Forever"),

        new question("What is currently the fastest selling video game console?",
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




});