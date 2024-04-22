const firstName = document.body.querySelector("#fname");
const lastName = document.body.querySelector("#lname");
const email = document.body.querySelector("#email");
const password = document.body.querySelector("#password");

const displayFirst = document.body.querySelector(".display");
const displayLast = document.body.querySelector(".displayn");
const displayEmail = document.body.querySelector(".displaye");
const displayPassword = document.body.querySelector(".displayp");

const span = document.body.querySelector("#e")
const span1 = document.body.querySelector("#f")
const span2 = document.body.querySelector("#g")
const span3 = document.body.querySelector("#h")

const submit = document.body.querySelector("#submit");

submit.addEventListener('click', () => {
    if (firstName.value === ''){
        displayFirst.textContent = `First Name cannot be empty`;
        displayFirst.style.color = `hsl(0, 100%, 74%)`;
        firstName.style.border = `1px solid hsl(0, 100%, 74%)`
        span.classList = "o"
    }

    if (lastName.value === ''){
        displayLast.textContent = `Last Name cannot be empty`;
        displayLast.style.color = `hsl(0, 100%, 74%)`;
        lastName.style.border = `1px solid hsl(0, 100%, 74%)`
        span1.classList = "o"
    }

    if (email.value === ''){
        displayEmail.textContent = `Looks like this is not an email`;
        displayEmail.style.color = `hsl(0, 100%, 74%)`;
        email.style.border = `1px solid hsl(0, 100%, 74%)`
        span2.classList = "o"
    }

    if (password.value === ''){
        displayPassword.textContent = `password cannot be empty`;
        displayPassword.style.color = `hsl(0, 100%, 74%)`;
        password.style.border = `1px solid hsl(0, 100%, 74%)`
        span3.classList = "o"
    }

    
})
