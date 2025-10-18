feather.replace();

function switchTab(tab) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabs = document.querySelectorAll('.form-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        tabs[0].classList.add('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        document.querySelector('.login-form-header h2').textContent = 'Connexion';
        document.querySelector('.login-form-header p').textContent = 'Accédez à votre espace administrateur';
    } else {
        tabs[1].classList.add('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        document.querySelector('.login-form-header h2').textContent = 'Inscription';
        document.querySelector('.login-form-header p').textContent = 'Créez votre compte administrateur';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (username && password) {
        alert('Connexion réussie ! Redirection vers le dashboard...');
        window.location.href = 'dashboard.html';
    }
}

function handleSignup(event) {
    event.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Les mots de passe ne correspondent pas !');
        return;
    }
    
    alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    switchTab('login');
}