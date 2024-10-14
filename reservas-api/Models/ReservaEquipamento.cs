namespace SistemaReservasAPI.Models
{
    public class ReservaEquipamento
    {
        public int ReservaId { get; set; }
        public Reserva Reserva { get; set; }

        public int EquipamentoId { get; set; }
        public Equipamento Equipamento { get; set; }

        public int Quantidade { get; set; } // Quantidade de kits reservados
    }

    public class ReservaEquipamentoDTO
    {
        public int ReservaId { get; set; }
        public int EquipamentoId { get; set; }
        public int Quantidade { get; set; }
    }
}
