// Variable declaration
const transactionList = [];
// Reusable function for parseInt, value
function inputValueNumber(id) {
  return parseInt(document.getElementById(id).value);
}
// Reusable, access parseInt, innerText
function innerTextAccess(text) {
  return parseInt(document.getElementById(text).innerText);
}
// Reusable, current balance for final balance, innerText
function updatedCurrentBalance(latestBalance) {
  return (document.getElementById("current-balance").innerText = latestBalance);
}
// Reusable advance toggling function
function advanceToggling(id) {
  const forms = document.getElementsByClassName("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// Reusable, function for active button color, bg
function designForActiveButton(id) {
  const activeButtons = document.getElementsByClassName("active-button-design");
  for (const activeButton of activeButtons) {
    activeButton.classList.remove(
      "border-[rgba(8,116,242,1)]",
      "bg-[rgba(8,116,242,0.05)]",
      "text-[rgba(8,116,242,1)]"
    );
  }
  document
    .getElementById(id)
    .classList.add(
      "border-[rgba(8,116,242,1)]",
      "bg-[rgba(8,116,242,0.05)]",
      "text-[rgba(8,116,242,1)]"
    );
}

// ADD MONEY SECTION
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankAccountNumber = inputValueNumber("bank-account-number");
    const amountToAdd = inputValueNumber("amount-to-add");
    const pinNumber = inputValueNumber("pin-number");
    const bankAccount = 12345678910;
    const pin = 1234;
    if (bankAccountNumber !== bankAccount) {
      alert("Please enter a valid account no");
      return;
    } else if (pinNumber !== pin) {
      alert("Please enter a valid PIN");
      return;
    } else {
      let currentBalance = innerTextAccess("current-balance");
      let finalBalance = currentBalance + amountToAdd;
      updatedCurrentBalance(finalBalance);
      alert("$" + amountToAdd + " added! New balance " + "$" + finalBalance);
    }
    const transaction = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionList.push(transaction);
    console.log(transactionList);
  });
// CASH OUT SECTION
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let currentBalance = innerTextAccess("current-balance");
    let withdrawAmount = inputValueNumber("withdraw-amount");
    const agentNum = inputValueNumber("agent-number");
    const agentNumber = 12345678910;
    const pinNumber2 = inputValueNumber("pin-number2");
    const pin2 = 1234;
    if (agentNum !== agentNumber) {
      alert("Agent number is invalid!");
      return;
    } else if (pinNumber2 !== pin2) {
      alert("PIN is invalid!");
      return;
    } else {
      let finalBalance = currentBalance - withdrawAmount;
      updatedCurrentBalance(finalBalance);
      alert("$" + withdrawAmount + " withdrawn. New balance: $" + finalBalance);
    }
    const transaction = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionList.push(transaction);
    console.log(transactionList);
  });

// Toggling
document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    advanceToggling("add-money-section");
    designForActiveButton("add-money-button");
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function (event) {
    advanceToggling("cash-out-section");
    designForActiveButton("cash-out-button");
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function (event) {
    advanceToggling("transfer-money-section");
    designForActiveButton("transfer-money-button");
  });
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function (event) {
    advanceToggling("get-bonus-section");
    designForActiveButton("get-bonus-button");
  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (event) {
    advanceToggling("pay-bill-section");
    designForActiveButton("pay-bill-button");
  });
document
  .getElementById("transactions-button")
  .addEventListener("click", function (event) {
    advanceToggling("transactions-section");
    designForActiveButton("transactions-button");
    const transactionContainer = document.getElementById(
      "transactions-container"
    );
    transactionContainer.innerHTML = "";
    for (const perTransaction of transactionList) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div
            class="card mb-3 flex justify-between items-center flex-row bg-white px-4 py-[13px] rounded-xl border border-[rgba(8,8,8,0.1)]"
          >
            <div class="left-part flex items-center justify-between gap-2">
              <div
                class="image-container h-[45.5px] w-[45.5px] p-[11px] rounded-full bg-[#F4F5F7]"
              >
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div class="text-container">
                <h1 class="text-[rgba(8,8,8,0.7)] font-semibold">
                  ${perTransaction.name}
                </h1>
                <p class="text-[rgba(8,8,8,0.7)] text-xs">${perTransaction.date}</p>
              </div>
            </div>
            <div class="three-dots">
              <img src="assets/3 dots.png" alt="" />
            </div>
          </div>
      `;
      transactionContainer.appendChild(div);
    }
  });
