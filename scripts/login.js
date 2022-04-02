//get email & password fields by id; store in global variables
let inputEmail= $("#email");  
let inputPassword = $("#password");

//event listener calls to validation functions
$("#sButton").click(function(e){
    e.preventDefault();
     validateEmail();
     validatePassword();
})

//build error class for input fields

//validate email
const validateEmail = () => {
    
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let email = inputEmail.val();
    let result = true;

    if(email == ""){
        inputEmail.addClass("inputError");
        $("#emailError").html("Please enter your email.").addClass("errorText");
        result = false;
    } else if(!email.match(regex)){
        $("#emailError").html("Please enter a valid email address.").addClass("errorText");
    }else{
        inputEmail.removeClass("inputError");
        $("#emailError").html("").removeClass("errorText");
        console.log(email);
        result = true;
    }
    return result;
}

//validate password
const validatePassword = () => {
    let password = inputPassword.val();
    let result = true;

    if(password == ""){
        inputPassword.addClass("inputError");
        $("#passwordError").html("Password cannot be blank.").addClass("errorText");
        result = false;
    }else{
        inputPassword.removeClass("inputError");
        $("#passwordError").html("").removeClass("errorText");
        result = true;
    }

    return result;
}

//function for loading provider page if validation successfull

const loadProviderPage = () => {

}

//$("#passwordError").html("You must enter your password");