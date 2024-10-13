const API_URL = 'http://localhost:5000'; // URL da sua API

// Obter todas as reservas
export const obterReservas = async () => {
    try {
        const response = await fetch(`${API_URL}/reservas`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Se estiver usando autenticação via token
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao buscar reservas');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Obter uma reserva específica
export const obterReservaPorId = async (id) => {
    try {
        const response = await fetch(`${API_URL}/reservas/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao buscar a reserva');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Criar uma nova reserva
export const criarReserva = async (reserva) => {
    try {
        const response = await fetch(`${API_URL}/reservas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(reserva),
        });

        if (!response.ok) {
            throw new Error('Falha ao criar a reserva');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Editar uma reserva existente
export const editarReserva = async (id, reserva) => {
    try {
        const response = await fetch(`${API_URL}/reservas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(reserva),
        });

        if (!response.ok) {
            throw new Error('Falha ao editar a reserva');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

// Deletar uma reserva
export const deletarReserva = async (id) => {
    try {
        const response = await fetch(`${API_URL}/reservas/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao deletar a reserva');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
