"use strict";

let form = document.querySelector("form");

function validateEmail(email) {
  const validReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validReg)) {
    alert("valid email address");
  } else alert("invalid email");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userEmail = document.querySelector("#email").value;
  validateEmail(userEmail);
  console.log("email submitted");
});
