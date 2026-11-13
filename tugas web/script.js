const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');


togglePassword.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});