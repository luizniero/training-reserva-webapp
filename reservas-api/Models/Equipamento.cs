using System.Text.Json.Serialization;

namespace SistemaReservasAPI.Models
{
    public class Equipamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int QuantidadeDisponivel { get; set;}
        // Relação com reservas (muitos-para-muitos)
        [JsonIgnore]
        public virtual ICollection<ReservaEquipamento> ReservaEquipamentos { get; set; }
    }

    public class EquipamentoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int QuantidadeDisponivel { get; set;}
    }
}
