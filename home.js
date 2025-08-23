document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bankSelection = document.getElementById("bank-selection").value;
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
