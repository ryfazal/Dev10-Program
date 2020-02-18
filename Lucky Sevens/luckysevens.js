/*
Name: Ryan Fazal
Project: Lucky Sevens
Date Created: 02/07/2020
*/

function luckySevens() {
  // Lucky Sevens Variables
  var startBet = document.forms["luckySevensForm"]["startingBet"].value;
  var rollsBeforeBroke = 0;
  var winnings = Number(startBet);
  var rollsHigh = 0;
  var gameMoney = Number(startBet);


  checkBet(startBet);

  while (gameMoney > 0) {
    let rollTotal = rollDice();
    rollsBeforeBroke += 1;
    if (rollTotal === 7) {
      gameMoney += 4;
      if (gameMoney > winnings) {
        winnings = gameMoney;
        rollsAtHighest = rollsBeforeBroke;
      }
    } else {
      gameMoney -= 1;
    }
  }
  if (startBet > 0) {
    getValues(startBet, rollsBeforeBroke, winnings, rollsAtHighest);
  }
  return false;
};

function rollDice() {
  let first = Math.ceil(Math.random() * (1 + 6 - 1));
  let second = Math.ceil(Math.random() * (1 + 6 - 1));
  let rollSum = first + second;

  return rollSum;
};

//This is set when the value set is less than or equal to zero
function checkBet(valueToCheck) {
  if (valueToCheck <= 0) {
    alert("Error! Your bet must be greater than 0. Please try again.");
  };
};

//Values for Lucky Svens Output
function getValues(startBet, rollsBeforeBroke, winnings, rollsAtHighest) {
  document.getElementById("starting_bet").innerText = "$" + startBet;
  document.getElementById("total_rolls_before_going_broke").innerText = rollsBeforeBroke;
  document.getElementById("highest_amount_won").innerText = "$" + winnings;
  document.getElementById("rolls_count_at_highest_amount_won").innerText = rollsAtHighest;
  document.getElementById("submitButton").innerText = "Play Again!";

};
