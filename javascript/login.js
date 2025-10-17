"use strict";
const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const formContainer = document.getElementById('form-container');

    function toggleForm() {
      if (loginForm.style.display === "none") {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        formTitle.textContent = "Connexion";
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.textContent = "Créer un compte";
      }
      formContainer.classList.remove("fade");
      void formContainer.offsetWidth; // reset animation
      formContainer.classList.add("fade");
    }