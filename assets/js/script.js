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