"use strict";

let form = document.querySelector("form");

function validateEmail(email) {
  const validReg =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/;
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
