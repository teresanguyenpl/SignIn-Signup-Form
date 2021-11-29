// const MAX_INPUT_LENGTH = 255
// const MIN_NAME_LENGTH = 2
// const MIN_USERNAME_LENGTH = 2
// const MAX_USERNAME_LENGTH = 30
// const MIN_EMAIL_LENGTH = 3
// const MIN_PASSWORD_LENGTH = 7

const form = document.getElementById('form');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const username = document.getElementById('user-name');
const pass = document.getElementById('password');
const repass = document.getElementById('re-password');

form.addEventListener('submit', (e) => {
    //Prevent page from submitting
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //if first name is invalid
    if(fname.value === '' || fname.value == null) {
        setErrorMessage(fname, 'First Name can not be blank');
    }
    else {  //if first name is valid
        setSuccess(fname);
    }

    // //if first name is invalid
    // if(fnameValue === '') {
    //     setErrorMessage(fname, 'First Name can not be blank');
    // }
    // else {  //if first name is valid
    //     setSuccess(fname);
    // }

    // //if first name is invalid
    // if(fnameValue === '') {
    //     setErrorMessage(fname, 'First Name can not be blank');
    // }
    // else {  //if first name is valid
    //     setSuccess(fname);
    // }

    // //if first name is invalid
    // if(fnameValue === '') {
    //     setErrorMessage(fname, 'First Name can not be blank');
    // }
    // else {  //if first name is valid
    //     setSuccess(fname);
    // }

    // //if first name is invalid
    // if(fnameValue === '') {
    //     setErrorMessage(fname, 'First Name can not be blank');
    // }
    // else {  //if first name is valid
    //     setSuccess(fname);
    // }

    // //if first name is invalid
    // if(fnameValue === '') {
    //     setErrorMessage(fname, 'First Name can not be blank');
    // }
    // else {  //if first name is valid
    //     setSuccess(fname);
    // }

function setErrorMessage(input, message) {
    const group = input.parentElement;
    const mess = group.querySelector('small');

    //set the message
    mess.innerText = message;
    //set error
    group.className = 'group-re error';
}
    
}

