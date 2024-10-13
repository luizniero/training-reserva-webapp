namespace SistemaReservasAPI.Models
{
    public class Reserva
    {
        public int Id { get; set; }

        // Relação com Usuário
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        // Relação com Sala
        public int SalaId { get; set; }
        public Sala Sala { get; set; }

        public DateTime Data { get; set; }
        public TimeSpan Horario { get; set; }

        public string Status { get; set; } = "Ativa"; // Pode ser 'Ativa' ou 'Cancelada'

        // Relação com Equipamento (muitos-para-muitos)
        public ICollection<ReservaEquipamento> ReservaEquipamentos { get; set; }
    }
}
