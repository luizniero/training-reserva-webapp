const API_URL = 'http://localhost:5000'; // URL da sua API

// Obter todos os equipamentos
export const obterEquipamentos = async () => {
    try {
        const response = await fetch(`${API_URL}/equipamentos`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao buscar equipamentos');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Atualizar equipamentos
export const atualizarEquipamentos = async (equipamentos) => {
    try {
        const response = await fetch(`${API_URL}/equipamentos`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(equipamentos),
        });

        if (!response.ok) {
            throw new Error('Falha ao atualizar equipamentos');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
