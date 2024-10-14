using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using SistemaReservasAPI.Models;

namespace SistemaReservasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // DTO para capturar as credenciais de login
        public class LoginDto
        {
            public string Usuario { get; set; }
            public string Senha { get; set; }
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            // Simulação de verificação de usuário. Substitua pela sua lógica de autenticação
            if (loginDto.Usuario == "admin" && loginDto.Senha == "admin")
            {
                // Se as credenciais estiverem corretas, gerar o token
                var token = GerarTokenJWT(loginDto.Usuario);
                return Ok(new { token });
            }

            // Se as credenciais forem inválidas
            return Unauthorized("Credenciais inválidas.");
        }

        // Método para gerar o token JWT
        private string GerarTokenJWT(string usuario)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, usuario),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var chave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credenciais = new SigningCredentials(chave, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: credenciais);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
