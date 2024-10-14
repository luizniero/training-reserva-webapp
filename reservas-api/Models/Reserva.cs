using System.Text.Json.Serialization;

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
        [JsonIgnore]
        public virtual ICollection<ReservaEquipamento> ReservaEquipamentos { get; set; }
    }

    public class ReservaDTO
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string SalaNome { get; set; }
        public DateTime Data { get; set; }
        public string Horario { get; set; }
        public string Status { get; set; }
    }

    
}
