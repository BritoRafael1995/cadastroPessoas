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
        // GET: api/<PessoasController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PessoasController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PessoasController>
        [HttpPost]
        public IActionResult Post([FromBody] Pessoa pessoa)
        {
            var retorno = _pessoasBusiness.AddPessoa(pessoa);
            return StatusCode(201, retorno);
        }

        // PUT api/<PessoasController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PessoasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
