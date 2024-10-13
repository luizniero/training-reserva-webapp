namespace SistemaReservasAPI.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string cpf { get; set; }
        public string SenhaHash { get; set; }
        public string Perfil { get; set; }  // Pode ser 'admin' ou 'user'
    }
}
