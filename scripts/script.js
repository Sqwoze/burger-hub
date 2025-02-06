document.addEventListener("DOMContentLoaded", function () {

    const submitButton = document.getElementById("submit");

    const messageContainer = document.getElementById("messageContainer");

    submitButton.addEventListener("click", function () {

        messageContainer.innerText = "Your Burger Is Tastey!";
    });
});