document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobile = 1234567890;
    const mobileNumber = document.getElementById("mobile-number").value;
    const mobileNumberInt = parseInt(mobileNumber);
    const pin = 1234;
    const pinCode = document.getElementById("pin-code").value;
    const pinCodeInt = parseInt(pinCode);
    console.log(mobileNumberInt, pinCodeInt);
    if (mobile === mobileNumberInt && pin === pinCodeInt) {
      window.location.href = "home.html";
    } else {
      alert(" Wrong mobile number or PIN");
    }
  });
