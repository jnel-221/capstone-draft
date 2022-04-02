//get input fields by id; store in global variables
let inputFirstName = $("#firstName");
let inputLastName = $("#lastName");
let inputEmail = $("#email");
let inputPass = $("#password");
let inputConfirmPass = $("#confirmPass");
let sButton = $("sButton");

//event listener calls to validation functions.
$("#sButton").click(function (e) {
  e.preventDefault();

  validateFirstName();
  validateLastName();
  validateEmail();
});

//validate first name
function validateFirstName() {
  let firstName = inputFirstName.val();
  let exNum = /\d/; //regex to find numbers in name;
  let exAlpha = /^[A-Za-z]+$/; //regex to include all letters and ensure no space

  let result = true;
  if (firstName == "") {
    inputFirstName.addClass("inputError");
    $("#firstNameError")
      .html("First name cannot be blank.")
      .addClass("errorText");
    result = false;
  } else if (firstName.match(exNum)) {
    console.log("you entered numbers");
    inputFirstName.addClass("inputError");
    $("#firstNameError")
      .html("First name cannot contain a number")
      .addClass("errorText");
    result = false;
  } else if (firstName.match(exAlpha)) {
    inputFirstName.removeClass("inputError");
    $("#firstNameError").html("").removeClass("errorText");
    result = true;
  }
  return result;
}

//validate last name
function validateLastName() {
  let lastName = inputLastName.val();
  let exNum = /\d/; //regex to find numbers in name;
  let exAlpha = /^[A-Za-z]+$/; //regex to include all letters and ensure no space

  let result = true;
  if (lastName == "") {
    inputLastName.addClass("inputError");
    $("#lastNameError")
      .html("Last name cannot be blank.")
      .addClass("errorText");
    result = false;
  } else if (lastName.match(exNum)) {
    inputLastName.addClass("inputError");
    $("#lastNameError")
      .html("Last name cannot contain a number")
      .addClass("errorText");
    result = false;
  } else if (lastName.match(exAlpha)) {
    inputLastName.removeClass("inputError");
    $("#lastNameError").html("").removeClass("errorText");
    result = true;
  }
  return result;
}

//validate email
function validateEmail() {
  // console.log("email is: " + email);
  let email = inputEmail.val();
  let ex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //regex to validate email address
  let result = true;

  if (email == "") {
    inputEmail.addClass("inputError");
    $("#emailError").html("Email cannot be blank.").addClass("errorText");
    result = false;
  } else if (!email.match(ex)) {
    inputEmail.addClass("inputError");
    $("#emailError")
      .html("Please enter a valid email address.")
      .addClass("errorText");
    result = false;
  } else {
    inputEmail.removeClass("inputError");
    $("#emailError").html("").removeClass("errorText");
    console.log(email);
    result = true;
  }

  return result;
}

// function validatePassword(password, confirmPass) {
//   console.log(
//     "password and confirm password are: " + password + " " + confirmPass
//   );

//    if (password.length < 8 || password.length > 20) {
//      alert("password too short");
//     inputPass.style.border = "3px solid red";
//     pTag.innerHTML="Password must be between 8-20 characters long";
//     inputPass.appendChild(pTag);
//     inputPass.focus();

//      return false;
//    }else if(!/[a-zA-Z]/.test(password)){
//      alert("missing a letter");
//     inputPass.style.border = "3px solid red";
//     pTag.innerHTML="Password contain a letter.";
//     inputPass.appendChild(pTag);
//     return false;
//    } else if(!(/\d/.test(password))){
//      alert("missing a number");
//     inputPass.style.border = "3px solid red";
//     pTag.innerHTML="Password must contain a number.";
//     inputPass.appendChild(pTag);
//     return false;
//    }

//   if (password == "") {
//     console.log("no password entered");
//     alert("You must enter your password");
//     //change this to display red text border around field
//     //and error message below input field
//     inputPass.style.border = "3px solid red";
//     pTag.innerHTML="You must create a password";
//     inputPass.appendChild(pTag);
//     inputPass.focus();
//     return false;
//   }

//   if (confirmPass == "") {
//     console.log("no confirm password entered");
//     alert("You must confirm your password");
//     //change this to display red text border around field
//     //and error message below input field
//     inputConfirmPass.style.border = "3px solid red";
//     pTag.innerHTML="You must confirm your password";
//     inputConfirmPass.appendChild(pTag);
//     inputConfirmPass.focus();

//     return false;
//   }

//   //need to test this w/data
//   if (password != confirmPass) {
//    alert("Passwords must match");
//    console.log("passwords don't match.")
//     inputPass.style.border = "3px solid red";
//     pTag.innerHTML="Your password must match";
//     inputPass.appendChild(pTag);
//     inputPass.focus();
//     return false;
//   }
//   return true;
// }
