using Microsoft.EntityFrameworkCore;
using SistemaReservasAPI.Models;

namespace SistemaReservasAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Sala> Salas { get; set; }
        public DbSet<Equipamento> Equipamentos { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<ReservaEquipamento> ReservaEquipamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurando a chave composta para ReservaKits (relacionamento muitos-para-muitos)
            modelBuilder.Entity<ReservaEquipamento>()
                .HasKey(rk => new { rk.ReservaId, rk.EquipamentoId });

            // Configuração do relacionamento Reserva -> ReservaKits
            modelBuilder.Entity<ReservaEquipamento>()
                .HasOne(rk => rk.Reserva)
                .WithMany(r => r.ReservaEquipamentos)
                .HasForeignKey(rk => rk.ReservaId);

            // Configuração do relacionamento KitMultimidia -> ReservaKits
            modelBuilder.Entity<ReservaEquipamento>()
                .HasOne(rk => rk.Equipamento)
                .WithMany(k => k.ReservaEquipamentos)
                .HasForeignKey(rk => rk.ReservaId);
        }
    }


}
