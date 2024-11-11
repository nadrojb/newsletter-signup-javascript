"use strict";

let form = document.querySelector("form");
let newsletterContainer = document.querySelector("#newsletter-container");

function validateEmail(email) {
  const validReg =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/;

  const warningMessage = document.querySelector(".invalid-email-warning");
  const emailInput = document.querySelector(".email-input");
  const checkMark = document.querySelector(".check");

  emailInput.classList.add("border", "bg-slate-100");
  emailInput.classList.remove(
    "border-green-700",
    "border-2",
    "border-red-600",
    "bg-red-200"
  );
  warningMessage.classList.add("hidden");
  warningMessage.classList.remove("block");

  if (email.match(validReg)) {
    emailInput.classList.remove("border");
    emailInput.classList.add("border-2", "border-green-700");
    checkMark.classList.remove("hidden");
    checkMark.classList.add("inline-block");
    setInterval(() => {
      newsletterContainer.classList.add("hidden");
    }, 400);
  } else if (email == "" || !email.match(validReg)) {
    emailInput.classList.remove("border", "bg-slate-100");
    emailInput.classList.add("border-2", "border-red-600", "bg-red-200");
    warningMessage.classList.remove("hidden");
    warningMessage.classList.add("block");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userEmail = document.querySelector("#email").value;
  validateEmail(userEmail);
  console.log("email submitted");
});
