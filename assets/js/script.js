// ------------ Home page -------------

// Define the modal instruction elements and add eventListener(click) to add and remove class "reveal"

const insOpen = document.getElementById("ins-open");
const modal_instruction = document.getElementById("modal-instruction");
const insClose = document.getElementById("ins-close");

insOpen.addEventListener("click", () => {
    modal_instruction.classList.add("reveal");
});

insClose.addEventListener("click", () => {
    modal_instruction.classList.remove("reveal");
});


// Create function to remove the instruction and Start button and create new elements for the game to appear with one click

  const startBtn = document.getElementById("start");
  const removeInstruction = document.getElementById("instruction");

  function updateElement() {
    startBtn.remove();
    removeInstruction.remove();


    // Create image element
    const imageElement = document.createElement("img");
    imageElement.id = "image";
    imageElement.src = selectedImage;
    imageElement.alt = "image-guessing-word";

    // Create Timer 
    const timerElement = document.createElement("div"); 
    timerElement.id = "timer"; 
    timerElement.innerHTML = 'Time:  <span id="timeLeft">30</span>';

    //Create Input field
    const inputElement = document.createElement("input");
    inputElement.id = "answerInput";
    inputElement.type = "text";
    inputElement.placeholder = "Enter your answer";

    //Create Button OK
    const okBtnElement = document.createElement("button");
    okBtnElement.id = "okBtn";
    okBtnElement.innerText = "OK";

    // Create Score display
    const scoreElement = document.createElement("p");
    scoreElement.id = "score";
    scoreElement.innerText = "Score: 0";

    // Create Hint display
    const hintElement = document.createElement("p");
    hintElement.id = "hint";
    hintElement.innerText = `Hint: ${selectedObject.hint}`;

    // Create turn page display to show how many words left
    const turnPageElement = document.createElement("p");
    turnPageElement.id = "turnpage";
    turnPageElement.innerText = " 1 / 10 ";


    //Append new elements
    const container = document.getElementById("game-container");
    container.appendChild(imageElement);
    container.appendChild(timerElement);
    container.appendChild(inputElement);
    container.appendChild(okBtnElement);
    container.appendChild(scoreElement);
    container.appendChild(hintElement);
    container.appendChild(turnPageElement);

    // Add eventListener to the ok button to check the answer
    okBtnElement.addEventListener("click", checkAnswer);

    startTimer();

}

    // Call the function updateElement
    startBtn.addEventListener("click", updateElement);






// ------------ Game Section --------------

// Create function that randomly selects an object in the array. This object should never be repeatedly chosen.
// Using Fisher Yates Shuffle and learned from Youtube tutorial - https://www.youtube.com/watch?v=FGAUekwri1Q
function shuffleArray(wordList) {
    for (let i = wordList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordList[i], wordList[j]] = [wordList[j], wordList[i]]; // Swap elements
    }
    return wordList;
};

// Ensure that each element in the array is selected before reshuffling.
function createUniqueSelector(wordList) {
    let shuffledArray = shuffleArray([...wordList]); // Shuffle a copy of the array
    let index = 0;

    return function () {
        if (index >= shuffledArray.length) {
            shuffledArray = shuffleArray([...wordList]); // Reshuffle when all elements are used
            index = 0;
        }
        return shuffledArray[index++];
    };
};


// Create function to display the selected object.
function displaySelectedValues(object, keysToDisplay) {
    let result = [];
    for (let key of keysToDisplay) {
        if (object.hasOwnProperty(key)) {
            result.push(object[key]);
        }
    }
    return result;
};

const selectUnique = createUniqueSelector(wordList);
let selectedObject = selectUnique();
let selectedWord = displaySelectedValues(selectedObject, ["word", "definition"]);
let selectedImage = displaySelectedValues(selectedObject, ["image"]);

// Function to display a pop-up message.
function displayPopup(message, resumeTimer = false) {
    const alertBox = document.getElementById("alertBox");
    const alertMsg = document.getElementById("alertMsg");
    const closeBtn = document.getElementById("closeBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Pause the timer 
    clearInterval(timer);

    alertMsg.innerHTML = message;
    alertBox.style.display = "block";

    //close the alert box when close button is clicked
    closeBtn.onclick = function () {
        alertBox.style.display = "none";
        if (resumeTimer) {
            startTimer(); // resume Timer for the empty input field clicked
        } else {
            resetTimer(); // reset timer for the new question
        }
    };

    //close the alert box when next button is clicked
    nextBtn.onclick = function () {
        alertBox.style.display = "none";
        if (resumeTimer) {
            startTimer();
        } else {
            resetTimer();
        }
    };

    //close the alert box when clicking outside the box
    window.onclick = function (event) {
        if (event.target === alertBox) {
            alertBox.style.display = "none";
            if (resumeTimer) {
                startTimer();
            } else {
                resetTimer();
            }
        }
    };
};


// Function to check the answer.

function checkAnswer() {
    clearInterval(timer); // Stop the timer when the answer is checked

    const userInput = document.getElementById("answerInput").value.trim().toLowerCase(); 
    // trim() will remove any whitespace in the input field, toLowerCase will ensure the input converts to lowercase

    if (userInput === "") {
        displayPopup("Please enter your guess word🙂", true);
        return;

    }
    if (userInput === selectedObject.word) {
        displayPopup('CORRECT! 🎉'); 
        incrementScore(); 

    } else {
        displayPopup(`INCORRECT!😓<br>The correct answer is: <b>${selectedObject.word}</b><br>--> ${selectedObject.definition}`);
    }
    incAnsweredQuestions();
};


// Function to increment the score value when a correct answer is selected.

let score = 0;
function incrementScore() {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
};

// Function 30 second timer for each question.
// Learned and modified to suit my project from tutorials -W3Schools(setInterval,setTimeout,clearInterval), https://dev.to/gloriasilver/how-to-schedule-tasks-using-javascript-timers-and-intervals-4385?form=MG0AV3
let timer;
let timeLeft = 30;

function startTimer() {

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            displayPopup("TIME'S UP!! <br>The correct answer was: <b>" + selectedObject.word + "</b>");
            incAnsweredQuestions();
        }
    }, 1000);
};

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30; //Reset to 30 seconds for a new question
    document.getElementById("timeLeft").innerText = timeLeft;
    startTimer();
};


// Function to increment the number of answered questions.

let answeredQuestions = 0;
function incAnsweredQuestions() {
    answeredQuestions++;
    document.getElementById("turnpage").innerText = `${answeredQuestions} / 10`;

    if (answeredQuestions >= 10) {
        endGame();
    } else {

        // Select a new object for the next round
        selectedObject = selectUnique();
        selectedWord = displaySelectedValues(selectedObject, ["word", "definition"]);
        selectedImage = displaySelectedValues(selectedObject, ["image"]);

        // Update the image source, hint and clear the input field for the new round
        document.getElementById("image").src = selectedImage[0];
        document.getElementById("hint").innerText = `Hint : ${selectedObject.hint}`;
        document.getElementById("answerInput").value = "";
        resetTimer();
    }
};




// ----------End Game Section---------------

// Create function EndGame to replace the game-container with the total score and a restart button.
const removeGameCont = document.getElementById("game-container");

function endGame() {
    removeGameCont.remove();

    const endTextElement = document.createElement("h1");
    endTextElement.id = "endText";
    endTextElement.innerText = "GAME OVER!!";

    const totalScoreElement = document.createElement("p");
    totalScoreElement.id = "totalScore";
    totalScoreElement.innerText = `Your total score is : ${score}`;

    const restartTextElement = document.createElement("p");
    restartTextElement.id = "restartText";
    restartTextElement.innerText = "Wanna play again?";

    const restartBtnElement = document.createElement("button");
    restartBtnElement.id = "restartBtn";
    restartBtnElement.innerText = "Play Again";
    restartBtnElement.addEventListener("click", () => {
        location.reload(); //Reload the page to restart the game
    });

    const container = document.getElementById("endgame-container");
    container.appendChild(endTextElement);
    container.appendChild(totalScoreElement);
    container.appendChild(restartTextElement);
    container.appendChild(restartBtnElement);

};



//when the keyboard appears and scroll the page to the input field. 
// This function ensures that the input field remains in view when the keyboard is active.

window.addEventListener('resize', function() { 
    const inputField = document.getElementById('answerInput'); 
    if (inputField) { 
        inputField.scrollIntoView({ behavior: 'smooth' }); 
    } 
});

