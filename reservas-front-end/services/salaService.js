const API_URL = 'http://localhost:5000'; // URL da sua API

// Obter todas as salas
export const obterSalas = async () => {
    try {
        const response = await fetch(`${API_URL}/salas`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao buscar salas');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Criar uma nova sala
export const criarSala = async (sala) => {
    try {
        const response = await fetch(`${API_URL}/salas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(sala),
        });

        if (!response.ok) {
            throw new Error('Falha ao criar a sala');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Deletar uma sala
export const deletarSala = async (id) => {
    try {
        const response = await fetch(`${API_URL}/salas/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao deletar a sala');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
