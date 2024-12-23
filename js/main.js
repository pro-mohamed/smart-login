var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

var user = document.getElementById('user'); // home  page
// var loginInput = document.getElementById('login');
var alertLogin = document.getElementById('alertLogin');

// var SignUpInput = document.getElementById('signUp');
var alertSignUp = document.getElementById('alertSignUp');

var arraySignUp ;


////////////////
// get name of user and insert into home page
var username = localStorage.getItem('sessionUsername');
if (username) {
    user.innerHTML = "Welcome " + username;
}
//////////////


if (localStorage.getItem('information')){
        arraySignUp = JSON.parse(localStorage.getItem('information'));
}else{
    arraySignUp = [];
}


// function to check email is exist
function emailExist() {
    for (var i = 0; i < arraySignUp.length; i++) {
        if (arraySignUp[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
            return false
        }
    }
}

// function is empty 
function isEmpty(){
    if (emailInput.value == '' || passwordInput.value == '' || nameInput.value == ''){
        return true;
    }
}

// function to sign up 
function signUp(){

    if (isEmpty()){
        alertSignUp.innerHTML = "All inputs is required";
        alertSignUp.classList.remove('d-none');
    } else {

        var informationSignUp = {
            name : nameInput.value,
            email : emailInput.value,
            password : passwordInput.value,
        }
    
            if ( emailExist() == false) {
                alertSignUp.innerHTML = "email already exists";
                alertSignUp.classList.remove('d-none');
            } else {
                arraySignUp.push(informationSignUp);
                localStorage.setItem('information', JSON.stringify(arraySignUp));
                alertSignUp.innerHTML = "Success";
                alertSignUp.classList.remove('d-none');
            } 
    }
}


function emptyLogin() {
    if (emailInput.value == '' || passwordInput.value == '' ){
        return true;
    }
}

// console.log(arraySignUp.length)
function login(){
    if (emptyLogin()){
        alertLogin.innerHTML = "All inputs is required";
        alertLogin.classList.remove('d-none');
    }else {
        for (var i = 0; i < arraySignUp.length; i++) {
            if (arraySignUp[i].email.toLowerCase() == emailInput.value.toLowerCase() && arraySignUp[i].password.toLowerCase() == passwordInput.value.toLowerCase()) {
                localStorage.setItem('sessionUsername', arraySignUp[i].name);
                if (emailExist() == false) {
                    location.replace('file:///C:/Users/dell/OneDrive/Desktop/route/Assignment/2%20js/Assignment%204%20js' + location.hostname + '/smartlogin.html');
                }
            } else {
                alertLogin.innerHTML = "incorrect email or password";
                alertLogin.classList.remove('d-none');            
            }
        }
    }
}


