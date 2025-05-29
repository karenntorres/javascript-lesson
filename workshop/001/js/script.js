"use strict";

const $form = document.getElementById("loginForm");
const $message = document.getElementById("message");

$form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    login(username, password);
});

function login(username, password) {
    if (username === "pepa" && password === "ABC123") {
        showMessage("Bienvenida", "success");
    } else {
        showMessage("Acceso denegado", "error");
    }
}

function showMessage(text, type) {
    $message.textContent = text;
    $message.className = type; // pone la clase "success" o "error" para color
}
