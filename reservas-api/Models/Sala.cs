namespace SistemaReservasAPI.Models
{
    public class Sala
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        // Relação com reservas
        public ICollection<Reserva> Reservas { get; set; }
    }
}
