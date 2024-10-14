using System.Text.Json.Serialization;
namespace SistemaReservasAPI.Models
{
    public class Sala
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        // Relação com reservas
        [JsonIgnore]
        public virtual ICollection<Reserva> Reservas { get; set; }
    }
}
