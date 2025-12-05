
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Create a message box (using DOM)
const message = document.createElement("p");
message.style.fontSize = "18px";
message.style.fontWeight = "bold";
document.getElementById("account").appendChild(message);

// Handle form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

 
    if (username === "" || password === "") {
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

  
    const correctUser = "chai";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        message.textContent = "Login Successful! Welcome to Chai Adda ☕";
        message.style.color = "green";

     
    } else {
        message.textContent = "Invalid username or password!";
        message.style.color = "red";
    }
});
