"use strict";

const $form = document.getElementById("loginForm");

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
});
