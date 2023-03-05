// const email = document.getElementById("email");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });



const form = document.querySelector("form");
// const btn = document.querySelector(".btn");
const myName = document.getElementById("myname");
const number = document.getElementById("number");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const numberError = document.querySelector("#number + span.error");
const myNameError = document.querySelector("#myname + span.error");


// validating name
myName.addEventListener("input", (event) => {

    if (myName.validity.valid) {

      myNameError.textContent = "";
      myNameError.className = "error";
    } else {
      showError();
    }
  });

// validating number
number.addEventListener("input", (event) => {

    if (number.validity.valid) {

      numberError.textContent = "";
      numberError.className = "error";
    } else {
      showError();
    }
  });
// validating email
email.addEventListener("input", (event) => {

  if (email.validity.valid) {

    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});


// resetting the form
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});


function showError() {
  if (email.validity.valueMissing) {

    emailError.textContent = "You need to enter an email address.";
    numberError.textContent = "You need to enter an phone number.";
    myNameError.textContent = "You need to enter a proper name.";
  } else if (email.validity.typeMismatch) {

    emailError.textContent = "Entered value needs to be an email address.";
    numberError.textContent = "Entered value needs to be an phone number";
    myNameError.textContent = "Entered value needs to be an proper name";
  } else if (email.validity.tooShort) {

    emailError.textContent = `Email should be at least ${numberError.minLength} characters; you entered ${email.value.length}.`;
    numberError.textContent = `Number should be at least ${number.minLength} characters; you entered ${number.value.length}.`;
    myNameError.textContent = `Name should be at least ${myNameError.minLength} characters; you entered ${myNameError.value.length}.`;
  }

  emailError.className = "error active";
  numberError.className = "error active";
  myNameError.className = "error active";
}
