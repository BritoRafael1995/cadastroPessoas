using cadastro_pessoas.Business.Implementation;
using cadastro_pessoas.Business.Interface;
using cadastro_pessoas.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace cadastro_pessoas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly IPessoasBusiness _pessoasBusiness;
        public PessoasController()
        {
            _pessoasBusiness = new PessoasBusiness();
        }
        // GET: api/Pessoas
        [HttpGet]
        public IActionResult Get()
        {
            var retorno = _pessoasBusiness.GetPessoas();
            return Ok(retorno);
        }

        // GET api/Pessoas/5
        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var retorno = _pessoasBusiness.GetPessoaById(id);
            return Ok(retorno);
        }

        // POST api/Pessoas
        [HttpPost]
        public IActionResult Post([FromBody] Pessoa pessoa)
        {
            var retorno = _pessoasBusiness.AddPessoa(pessoa);
            return StatusCode(201, retorno);
        }

        // PUT api/Pessoas/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Pessoa pessoa)
        {
            var retorno = _pessoasBusiness.UpdatePessoa(id, pessoa);
            return Ok(retorno);
        }

        // DELETE api/Pessoas/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var pessoasRestantes = _pessoasBusiness.DeletePessoa(id);
            return Ok(pessoasRestantes);
        }
    }
}
