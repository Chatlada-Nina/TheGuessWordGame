// --------- Home page ---------

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
    container.appendChild(inputElement);
    container.appendChild(okBtnElement);
    container.appendChild(scoreElement);
    container.appendChild(hintElement);
    container.appendChild(turnPageElement);

}

    // Call the function updateElement
    startBtn.addEventListener("click", updateElement);









// --------- Game Section ---------

// Create function that randomly selects an object in the array. This object should never be repeatedly chosen.

// Create function to display the selected object.

// Function to display a pop-up message.

// Function to check the answer.

// Function to increment the score value when a correct answer is selected.

// Create function EndGame to replace the game-container with the total score and a restart button.

// Function to increment the number of answered questions.

// Function 30 second timer for each question.