function novaReserva() {
    window.location.href = '../nova-reserva/nova-reserva.html';
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/reservas')
        .then(response => response.json())
        .then(reservas => {
            const reservasList = document.getElementById('reservas-list');
            reservasList.innerHTML = '';

            if (reservas.length === 0) {
                reservasList.innerHTML = '<div class="alert alert-info">Nenhuma reserva encontrada</div>';
            } else {
                const hoje = new Date().toISOString().split('T')[0];
                const reservasAgrupadas = reservas.reduce((acc, reserva) => {
                    const data = reserva.data;
                    if (!acc[data]) acc[data] = [];
                    acc[data].push(reserva);
                    return acc;
                }, {});

                const datasOrdenadas = Object.keys(reservasAgrupadas).sort((a, b) => {
                    if (a === hoje) return -1;
                    if (b === hoje) return 1;
                    return a.localeCompare(b);
                });

                datasOrdenadas.forEach(data => {
                    const reservasNaData = reservasAgrupadas[data];
                    reservasNaData.sort((a, b) => a.horario.localeCompare(b.horario));

                    const dataHeader = document.createElement('h4');
                    dataHeader.textContent = `Reservas para ${formatarData(data)}`;
                    reservasList.appendChild(dataHeader);

                    reservasNaData.forEach((reserva) => {
                        const reservaCard = `
                            <div class="card mb-3" style="cursor: pointer;">
                                <div class="card-body d-flex justify-content-between align-items-start">
                                    <div>
                                        <strong class="card-title">${reserva.sala}</strong>
                                        <p class="card-text">Kit Multimídia: ${reserva.kitMultimidia.join(', ')}</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="mb-0"><strong>Data:</strong> ${formatarData(reserva.data)}</p>
                                        <p class="mb-0"><strong>Horário:</strong> ${reserva.horario}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        reservasList.innerHTML += reservaCard;
                    });
                });
            }
        });
});

function formatarData(dataStr) {
    const [ano, mes, dia] = dataStr.split('-');
    return `${dia}/${mes}/${ano}`;
}
