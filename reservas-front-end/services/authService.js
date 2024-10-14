const API_URL = 'http://localhost:5162/api'; // URL da sua API

export const login = async (usuario, senha) => {
    console.log(`estamos tentando fazer o login =). Usuario: ${usuario} senha: ${senha}`)
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, senha }),
        });

        if (!response.ok) {
            throw new Error('Falha no login');
        }

        const data = await response.json();
        // Armazenar o token ou informações do usuário, se necessário
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
