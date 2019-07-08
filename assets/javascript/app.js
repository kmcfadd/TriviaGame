// begins loading the function when document finishes loading

$(document).ready(function(){

// begin by creating an array to hold the objects that hold the questions and answer data

var questionArray = [
        { question: "How many numbered Final Fantasy games have been released to this date?",
            answers: {
                a: "13",
                b: "14",
                c: "15",
                d: "16",
            },
            correct: "c"
        },
        { question: "In what year did the original Atari 2600 console launch?",
            answers: {
                a: "1980",
                b: "1977",
                c: "1976",
                d: "1981",
            },
            correct: "b"
        },
        { question: "What video game holds the lowest Metacritic score?",
            answers: {
                a: "Family Party: Obstacle Arcade",
                b: "Ride to Hell: Retribution",
                c: "Leisure Suit Larry: Box Office Bust",
                d: "Vroom in the Night Sky",
            },
            correct: "a"
        },
        { question: "What video game holds the record time for longest time in development?",
            answers: {
                a: "Diablo 3",
                b: "Duke Nukem Forever",
                c: "The Last Guardian",
                d: "Final Fantasy XV",
            },
            correct: "b"
        },
        { question: "What is currently the fastest selling video game console?",
            answers: {
                a: "Playstation 2",
                b: "Nintendo 3DS",
                c: "Xbox 360",
                d: "Nintendo Switch",
            },
            correct: "d"
        },
        { question: "How many characters appeared as playable units in Capcom's original Project X Zone?",
            answers: {
                a: "60",
                b: "63",
                c: "64",
                d: "62",
            },
            correct: "a"
        },
        { question: "Which video game console has the most high scoring (90+) exclusives on Metacritic?",
            answers: {
                a: "Playstation 3",
                b: "Xbox 360",
                c: "Nintendo 64",
                d: "Playstation 2",
            },
            correct: "d"
        },
        { question: "What is the oldest still-running MMORPG?",
            answers: {
                a: "The Realm Online",
                b: "Kingdom of Drakkar",
                c: "Meridian 59",
                d: "Furcadia",
            }, 
            correct: "b"
        },
        { question: 'William "B.J." Blazkowicz is a main character of which game series?',
            answers: {
                a: "Wolfenstein",
                b: "Call of Duty",
                c: "Medal of Honor",
                d: "Sniper Elite",
            },
            correct: "a"
        },
        { question: "What is the best selling video game of all time?",
            answers: {
            a: "Minecraft",
            b: "Wii SPorts",
            c: "Tetris",
            d: "Grand Theft Auto V",
            },
            correct: "c"
        }
    ];

console.log(questionArray)
console.log(questionArray[5].answers)

var questionContainer = document.getElementById('question');
var answersContainer = document.getElementById('answers');
var resultContainer = document.getElementById('result');

function startGame(){
    $("#directions").addClass('none');
    $("#start").addClass('none');

    var output = [];

    questionArray.forEach(
        (currentQuestion, questionNumber) => {

            var answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            )
    }
  );

  questionContainer.innerHTML = output.join('');
}

$("#start").click(startGame);

});