let signupForm = document.getElementById("signupForm");
let newUsername = document.getElementById("newUsername");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = newUsername.value;
    let pass = newPassword.value;
    let cpass = confirmPassword.value;

    if (user === "" || pass === "" || cpass === "") {
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    if (pass !== cpass) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("savedUser", user);
    localStorage.setItem("savedPass", pass);

    message.textContent = "Signup successful!";
    message.style.color = "green";

    newUsername.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
});
