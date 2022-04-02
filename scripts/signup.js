let inputFirstName = document.getElementById("firstName");
let inputLastName = document.getElementById("lastName");
let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("password");
let inputConfirmPass = document.getElementById("confirmPass");
let sButton = document.getElementById("sButton");
let pTag = document.createElement("p");

sButton.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});

function validate() {
  validateFirstName(inputFirstName.value);
  validateLastName(inputLastName.value);
  validateEmail(inputEmail.value);
  validatePassword(inputPass.value, inputConfirmPass.value);
}

function validateFirstName(firstName) {
  console.log("first name is: " + firstName);
  let ex = /\s/;
  if (firstName == "") {
    console.log("no string");
   // alert("You must enter your first name");
    inputFirstName.style.border = "3px solid red";
    pTag.innerHTML = "First name cannot be empty";
    inputFirstName.appendChild(pTag);
    inputFirstName.focus();


  } else if (firstName.match(ex)) {
   // alert("no spaces!");
    inputFirstName.style.border = "3px solid red";
    pTag.innerHTML = "First name cannot have spaces";
    inputFirstName.appendChild(pTag);
    inputFirstName.focus();
    
    return false;
  }
  return true;
}

function validateLastName(lastName) {
  console.log("lastname is: " + lastName);
  if (lastName == "") {
    inputLastName.style.border = "3px solid red";
    pTag.innerHTML = "Last name cannot be empty";
    inputLastName.appendChild(pTag);
    inputLastName.focus();
    return false;
  }
}

function validateEmail(email) {
  console.log("email is: " + email);
  let ex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (email == "") {
    //change this to display red text border around field
    //and error message below input field
    inputEmail.style.border = "3px solid red";
    pTag.innerHTML = "Email cannot be empty.";
    inputEmail.appendChild(pTag);
    inputEmail.focus();
    return false;
  } else if (!email.match(ex)) {
    //alert("you must enter an email with the proper format");
    inputEmail.style.border = "3px solid red";
    pTag.innerHTML = "Please enter valid email.";
    inputEmail.appendChild(pTag);
    inputEmail.focus();
  }
}

function validatePassword(password, confirmPass) {
  console.log(
    "password and confirm password are: " + password + " " + confirmPass
  );

   if (password.length < 8 || password.length > 20) {
     alert("password too short");
    inputPass.style.border = "3px solid red";
    pTag.innerHTML="Password must be between 8-20 characters long";
    inputPass.appendChild(pTag);
    inputPass.focus();

     return false;
   }else if(!/[a-zA-Z]/.test(password)){
     alert("missing a letter");
    inputPass.style.border = "3px solid red";
    pTag.innerHTML="Password contain a letter.";
    inputPass.appendChild(pTag);
    return false;
   } else if(!(/\d/.test(password))){
     alert("missing a number");
    inputPass.style.border = "3px solid red";
    pTag.innerHTML="Password must contain a number.";
    inputPass.appendChild(pTag);
    return false;
   }

  if (password == "") {
    console.log("no password entered");
    alert("You must enter your password");
    //change this to display red text border around field
    //and error message below input field
    inputPass.style.border = "3px solid red";
    pTag.innerHTML="You must create a password";
    inputPass.appendChild(pTag);
    inputPass.focus();
    return false;
  }


  if (confirmPass == "") {
    console.log("no confirm password entered");
    alert("You must confirm your password");
    //change this to display red text border around field
    //and error message below input field
    inputConfirmPass.style.border = "3px solid red";
    pTag.innerHTML="You must confirm your password";
    inputConfirmPass.appendChild(pTag);
    inputConfirmPass.focus();
    
    return false;
  }

  //need to test this w/data
  if (password != confirmPass) {
   alert("Passwords must match");
   console.log("passwords don't match.")
    inputPass.style.border = "3px solid red";
    pTag.innerHTML="Your password must match";
    inputPass.appendChild(pTag);
    inputPass.focus();
    return false;
  }
  return true;
}
