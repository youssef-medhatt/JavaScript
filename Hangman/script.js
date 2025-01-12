const animals = ['CAT', 'DOG', 'ELEPHANT', 'GIRAFFE', 'LION', 'TIGER', 'BEAR', 'WOLF', 'FOX', 'DEER', 'MONKEY', 'KANGAROO', 'PANDA', 'ZEBRA', 'RHINOCEROS', 'HIPPOPOTAMUS', 'LEOPARD', 'CHEETAH', 'GORILLA', 'CHIMPANZEE', 'KOALA', 'SLOTH', 'OTTER', 'RACCOON', 'SQUIRREL', 'BAT', 'HEDGEHOG', 'MOOSE', 'BUFFALO', 'ANTELOPE'];
const movies = ['INCEPTION', 'AVATAR', 'TITANIC', 'GLADIATOR', 'MATRIX', 'JURASSIC PARK', 'STAR WARS', 'THE GODFATHER', 'PULP FICTION', 'THE DARK KNIGHT', 'FORREST GUMP', 'THE SHAWSHANK REDEMPTION', 'FIGHT CLUB', 'THE LORD OF THE RINGS', 'HARRY POTTER', 'THE LION KING', 'BACK TO THE FUTURE', 'THE TERMINATOR', 'ALIEN', 'INDIANA JONES', 'THE SILENCE OF THE LAMBS', 'SCHINDLER\'S LIST', 'SAVING PRIVATE RYAN', 'BRAVEHEART', 'THE GREEN MILE', 'SEVEN', 'THE USUAL SUSPECTS', 'GOODFELLAS', 'THE DEPARTED', 'THE PRESTIGE'];
const colors = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'PINK', 'BROWN', 'BLACK', 'WHITE', 'GRAY', 'CYAN', 'MAGENTA', 'MAROON', 'NAVY', 'OLIVE', 'TEAL', 'LIME', 'INDIGO', 'VIOLET', 'TURQUOISE', 'GOLD', 'SILVER', 'BRONZE', 'BEIGE', 'IVORY', 'CORAL', 'SALMON', 'CHOCOLATE', 'CRIMSON'];

const wordCategories = { animals, movies, colors };
var randomWord = '';
var livesCounter = 6;
var correctLetterCounter = 0;
var guessedLetters = [];
var gameDone = false;
var timer;
var timeLeft = 30; 



var startGame = function (category) {
   
   randomWord = wordCategories[category][Math.floor(Math.random() * wordCategories[category].length)];

    document.getElementById('game-content').innerHTML = '';

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = "Time Left: " +timeLeft+ " seconds";
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            const timeUpP = document.createElement('p');
            timeUpP.id = "timeUpP";
            timeUpP.textContent = "Time's up! You lost!";
            document.getElementById("game-content").appendChild(timeUpP);
            gameDone = true;
        }
    }, 1000); 

    const timerDisplay = document.createElement('span');
    timerDisplay.id = 'timer';
    timerDisplay.textContent = "Time Left: " +timeLeft+ " seconds";
    document.getElementById("game-content").appendChild(timerDisplay);

    var hiddenWord = document.createElement('div');
    hiddenWord.id = "hidden-word"
    for (var i = 0; i < randomWord.length; i++) {
        const letter = document.createElement('span');
        if (randomWord[i] === ' ') {
            console.log(randomWord[i]);
            letter.innerHTML = "<br>";   
        }
        else letter.textContent = '_ ';
        letter.id = "letter-" + i;
        hiddenWord.appendChild(letter);
    }
    document.getElementById('game-content').appendChild(hiddenWord);


    const alphabetContainer = document.createElement('div');
    alphabetContainer.id = 'alphabet-container';

    for (let i = 65; i <= 90; i++) {
        const letterButton = document.createElement('button');
        letterButton.textContent = String.fromCharCode(i);
        letterButton.id = String.fromCharCode(i);
        letterButton.addEventListener('click', () => checkLetter(letterButton.id))
        alphabetContainer.appendChild(letterButton);
    }

    document.getElementById("game-content").appendChild(alphabetContainer);
    const livesSpan = document.createElement('span');
    livesSpan.id = "livesSpan";
    livesSpan.textContent = livesCounter;
    const livesP = document.createElement('p');
    livesP.id = "livesP";
    livesP.textContent = "Lives left: ";
    document.getElementById("game-content").appendChild(livesP);
    document.getElementById("game-content").appendChild(livesSpan);


    const refreshButtonContainer = document.createElement('div');
    refreshButtonContainer.id = 'refresh-button-container';
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Back';
    refreshButton.addEventListener('click', () => window.location.reload());
    refreshButtonContainer.appendChild(refreshButton);
    document.getElementById("game-content").appendChild(refreshButtonContainer);





}
function checkLetter(letter) {
    if (guessedLetters.includes(letter) || gameDone)
        return;
    timeLeft = 30;

    guessedLetters.push(letter);
    lettersOfWord = randomWord.replace(/\s+/g, '').split('');
    var found = false;
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == letter) {
            found = true;
            var letterToBeChanged = document.getElementById(`letter-${i}`);
            letterToBeChanged.textContent = letter + " ";
            document.getElementById(letter).style.background = 'green';
            correctLetterCounter++;
        }

    }
    if (!found) {
        livesCounter--;
        document.getElementById("livesSpan").textContent = livesCounter;
        document.getElementById(letter).style.background = 'red';
    }
    if (livesCounter == 0) {
        for (let i = 0; i < randomWord.length; i++) {
            var letterToBeChanged = document.getElementById(`letter-${i}`);
            if (randomWord[i] === ' ') letterToBeChanged.innerHTML = "<br>";
            else letterToBeChanged.textContent = randomWord[i] + " ";
        }
        const youLostP = document.createElement('p');
        youLostP.id = "youLostP";
        youLostP.innerHTML = "You gave it everything—your heart, your soul—and still, you failed.<br> A simple children's game, and yet here you stand in defeat.<br> Pathetic.";
        document.getElementById("game-content").appendChild(youLostP);
        document.getElementById("timer").remove();
        gameDone = true;
    }
    if (found && correctLetterCounter === lettersOfWord.length) {
        const youWonP = document.createElement('p');
        youWonP.id = "youWonP";
        youWonP.textContent = "You Won!";
        document.getElementById("game-content").appendChild(youWonP);
        document.getElementById("timer").remove();
        gameDone = true;

    }
}





