const logregBox = document.querySelectorAll('.logreg-box');

const loginLink = document.querySelectorAll('.login-link');

const registerLink = document.querySelectorAll('.register-link');

registerLink.addEventlistener('click',() => {
    logregBox.classList.add('active');
});