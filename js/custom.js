const form = document.querySelector("#form");
const choiceSelect = document.getElementById("choice");

const getComputerChoice = () => {
  const randomNumber = Math.random() * 3;

  if (randomNumber < 1) {
    return "rock";
  } else if (randomNumber < 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userChoice = choiceSelect.value;
  const computerChoice = getComputerChoice();

  console.log("your choice is:", userChoice);
  console.log("the computer's choice is:", computerChoice);

  if (userChoice === computerChoice) {
    console.log("It's a", "TIE");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You!", "WINNER");
  } else {
    console.log("Computer", "WINS");
  }
});
