using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Model
{
    public class Pessoa
    {
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Nacionalidade { get; set; }
        public long CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Logradouro { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
    }
}
