namespace SistemaReservasAPI.Models
{
    public class Equipamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int QuantidadeDisponivel { get; set; }

        // Relação com reservas (muitos-para-muitos)
        public ICollection<ReservaEquipamento> ReservaEquipamentos { get; set; }
    }
}
