using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaReservasAPI.Data;
using SistemaReservasAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaReservasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipamentoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EquipamentoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equipamento>>> GetEquipamentos()
        {
            return await _context.Equipamentos.ToListAsync();
        }

                // GET: api/equipamentos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Equipamento>> GetEquipamento(int id)
        {
            var equipamento = await _context.Equipamentos.FindAsync(id);

            if (equipamento == null)
            {
                return NotFound();
            }

            return Ok(equipamento);
        }

        // POST: api/equipamentos
        [HttpPost("adicionar")]
        public async Task<ActionResult<Equipamento>> AddEquipamento(EquipamentoDTO equipamentoDTO)
        {
            // Mapear o DTO para a entidade Equipamento
            var equipamento = new Equipamento
            {
                Nome = equipamentoDTO.Nome,
                QuantidadeDisponivel = equipamentoDTO.QuantidadeDisponivel
            };

            // Adicionar o equipamento no banco de dados
            _context.Equipamentos.Add(equipamento);
            await _context.SaveChangesAsync();

            // Retornar a resposta com CreatedAtAction para retornar o equipamento criado
            return CreatedAtAction(nameof(AddEquipamento), new { id = equipamento.Id }, equipamento);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEquipamento(int id, EquipamentoDTO equipamentoDTO)
        {
            var equipamento = await _context.Equipamentos.FindAsync(id);

            if (equipamento == null)
            {
                return NotFound();
            }

            // Atualizar os dados do equipamento com base no DTO
            equipamento.Nome = equipamentoDTO.Nome;
            equipamento.QuantidadeDisponivel = equipamentoDTO.QuantidadeDisponivel;

            _context.Entry(equipamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipamentoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipamento(int id)
        {
            var equipamento = await _context.Equipamentos.FindAsync(id);
            if (equipamento == null)
            {
                return NotFound();
            }

            _context.Equipamentos.Remove(equipamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EquipamentoExists(int id)
        {
            return _context.Equipamentos.Any(e => e.Id == id);
        }
    }
}
