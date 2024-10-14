import { login } from '../services/authService.js';

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await login(usuario, senha);

        // Se o login for bem-sucedido, armazene o token
        if (response && response.token) {
            localStorage.setItem('token', response.token);

            // Redirecionar para o dashboard
            window.location.href = '../dashboard/dashboard.html';
        } else {
            alert('Falha no login. Verifique suas credenciais.');
        }
    } catch (error) {
        alert('Erro no login. Tente novamente.');
        console.error('Erro:', error);
    }
});
