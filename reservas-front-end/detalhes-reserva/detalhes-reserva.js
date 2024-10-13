document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const reservaId = urlParams.get('id');

    fetch(`http://localhost:3000/reservas/${reservaId}`)
        .then(response => response.json())
        .then(reserva => {
            document.getElementById('sala').value = reserva.sala;
            document.getElementById('data').value = reserva.data;
            document.getElementById('horario').value = reserva.horario;

            const kitContainer = document.getElementById('kit-multimidia');
            reserva.kitMultimidia.forEach(kit => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = true;
                checkbox.disabled = true;
                kitContainer.appendChild(checkbox);
                kitContainer.appendChild(document.createTextNode(kit));
                kitContainer.appendChild(document.createElement('br'));
            });
        });
});

function deletarReserva() {
    const urlParams = new URLSearchParams(window.location.search);
    const reservaId = urlParams.get('id');

    fetch(`http://localhost:3000/reservas/${reservaId}`, {
        method: 'DELETE'
    }).then(() => {
        alert('Reserva deletada com sucesso!');
        window.location.href = '../dashboard/dashboard.html';
    });
}
