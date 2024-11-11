"use strict";

let form = document.querySelector("form");
let newsletterContainer = document.querySelector("#newsletter-container");
const successMessage = document.querySelector("#success-message-container");
const successContainerButton = document.querySelector("#dismiss-btn");

function validateEmail(email) {
  const validReg =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/;

  const warningMessage = document.querySelector(".invalid-email-warning");
  const emailInput = document.querySelector(".email-input");
  const checkMark = document.querySelector(".check");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = document.querySelector("#email").value;
    validateEmail(userEmail);
    console.log("email submitted");
  });

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
    newsletterContainer.classList.add("hidden");
    newsletterContainer.classList.remove("block");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("block");
    return;
  } else if (email == "" || !email.match(validReg)) {
    emailInput.classList.remove("border", "bg-slate-100");
    emailInput.classList.add("border-2", "border-red-600", "bg-red-200");
    warningMessage.classList.remove("hidden");
    warningMessage.classList.add("block");
    form.reset();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userEmail = document.querySelector("#email").value;
  validateEmail(userEmail);
  console.log("email submitted");
});

successContainerButton.addEventListener("click", (event) => {
  successMessage.classList.remove("block");
  successMessage.classList.add("hidden");
  newsletterContainer.classList.remove("hidden");
  newsletterContainer.classList.add("block");
  form.reset();
});
