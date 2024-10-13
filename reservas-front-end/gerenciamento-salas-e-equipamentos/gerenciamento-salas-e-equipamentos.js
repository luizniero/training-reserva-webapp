document.getElementById('salas-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const sala = document.getElementById('sala').value;

    const novaSala = { nome: sala };

    fetch('http://localhost:3000/salas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaSala)
    }).then(() => {
        alert('Sala adicionada com sucesso!');
    });
});

document.getElementById('kits-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const equipamentos = {
        microfone: document.getElementById('microfone').value,
        caixaSom: document.getElementById('caixa-som').value,
        notebook: document.getElementById('notebook').value,
        projetor: document.getElementById('projetor').value
    };

    fetch('http://localhost:3000/equipamentos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(equipamentos)
    }).then(() => {
        alert('Equipamentos atualizados com sucesso!');
    });
});
