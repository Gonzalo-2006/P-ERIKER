const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginLink = document.getElementById('login-link');
        const registerLink = document.getElementById('register-link');

        registerLink.addEventListener('click',(e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            document.getElementById('title').innerText = 'Registrarse';
        });

        loginLink.addEventListener('click',(e) => {
            e.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            document.getElementById('title').innerText = 'Iniciar sesión';
        });

