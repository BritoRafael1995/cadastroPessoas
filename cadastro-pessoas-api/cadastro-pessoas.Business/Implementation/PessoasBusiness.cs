using cadastro_pessoas.Business.Interface;
using cadastro_pessoas.Model;
using cadastro_pessoas.Repository.Implementation;
using cadastro_pessoas.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Business.Implementation
{
    public class PessoasBusiness : IPessoasBusiness
    {
        private readonly IPessoasRepository _pessoaRepository;

        public PessoasBusiness()
        {
            _pessoaRepository = new PessoasRepository();
        }

        public Pessoa AddPessoa(Pessoa pessoa)
        {
            _pessoaRepository.AddPessoa(pessoa);

            return pessoa;
        }
    }
}
