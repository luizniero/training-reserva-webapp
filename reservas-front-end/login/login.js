document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === 'admin') {
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Credenciais inválidas');
    }
});
