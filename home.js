// ADD MONEY SECTION
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankAccountNumber = parseInt(
      document.getElementById("bank-account-number").value
    );
    const amountToAdd = parseInt(
      document.getElementById("amount-to-add").value
    );
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const bankAccount = 1234567890;
    const pin = 1234;
    if (bankAccountNumber !== bankAccount) {
      alert("Please enter a valid account no");
      return;
    } else if (pinNumber !== pin) {
      alert("Please enter a valid PIN");
      return;
    } else {
      let currentBalance = parseInt(
        document.getElementById("current-balance").innerText
      );
      let finalBalance = currentBalance + amountToAdd;
      document.getElementById("current-balance").innerText = finalBalance;
    }
  });

// CASH OUT SECTION
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let currentBalance = parseInt(
      document.getElementById("current-balance").innerText
    );
    let withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const agentNum = parseInt(document.getElementById("agent-number").value);
    const agentNumber = 1234567890;
    const pinNumber2 = parseInt(document.getElementById("pin-number2").value);
    const pin2 = 1234;
    if (agentNum !== agentNumber) {
      alert("Agent number is invalid!");
      return;
    } else if (pinNumber2 !== pin2) {
      alert("PIN is invalid!");
      return;
    } else {
      let finalBalance = currentBalance - withdrawAmount;
      document.getElementById("current-balance").innerText = finalBalance;
      alert(
        "$" + withdrawAmount + " has been deducted! Available: $" + finalBalance
      );
    }
  });

// Toggling
document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cash-out-section").style.display = "none";
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
  });
