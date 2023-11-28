let fullName = document.getElementById('name-error');
let contactNumber = document.getElementById('phone-error');
let emailId = document.getElementById('email-error');
let passwordId = document.getElementById('password-error'); 

function validateName(){
    let name = document.getElementById('text').value;
    
    if (name.length == 0){
        fullName.innerHTML = "Name is required";  
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
        fullName.innerHTML = "Write your Full Name";  
        return false;
    }
    fullName.innerHTML = "valid"
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact').value;

    if(phone.length == 0){
        contactNumber.innerHTML = " Phone number is required";
        return false;
    }
    if(phone.length !== 10){
        contactNumber.innerHTML = " Enter 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        contactNumber.innerHTML = "Only digits please"
        return false;
    }
    contactNumber.innerHTML="valid"
    return true;
}
function validateEmail(){
    let email = document.getElementById('email').value
    
    if(email.length == 0){
        emailId.innerHTML = "Enter the email";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailId.innerHTML = "Email Invalid";
        return false;
    }
    emailId.innerHTML = "valid";
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passwordId.innerHTML = " password is required";
        return false;
    }
    if(phone.length !== 6,7,8){
        passwordId.innerHTML = " password should be 6- 7 character";
        return false;
    }
    passwordId.innerHTML="valid"
    return true;
}
