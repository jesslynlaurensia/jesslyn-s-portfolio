const form = document.getElementById('form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const nameidValue = nameid.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();

    if(nameidValue === ''){
        setErrorFor(nameid, 'Please input your name')
    } else {
        setSuccessFor(nameid);
    }

    if(numberValue === ''){
        setErrorFor(number, 'Please input your number')
    } else {
        setSuccessFor(number);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Please input your email')
    } else {
        setSuccessFor(email);
    }

    if(subjectValue === ''){
        setErrorFor(subject, 'Please input your name')
    } else {
        setSuccessFor(subject);
    }
}

function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box error';
}