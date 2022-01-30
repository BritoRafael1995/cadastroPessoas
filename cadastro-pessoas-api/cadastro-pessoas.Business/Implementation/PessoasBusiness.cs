using cadastro_pessoas.Business.Interface;
using cadastro_pessoas.Model;
using cadastro_pessoas.Repository.Implementation;
using cadastro_pessoas.Repository.Interface;
using MongoDB.Bson;
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
            pessoa.Id = ObjectId.GenerateNewId().ToString();
            pessoa.DataCadastro = DateTime.Now;
            _pessoaRepository.AddPessoa(pessoa);

            return pessoa;
        }

        public List<Pessoa> DeletePessoa(string id)
        {
            _pessoaRepository.DeletePessoa(id);

            return _pessoaRepository.GetPessoas();
        }

        public Pessoa GetPessoaById(string id)
        {
            return _pessoaRepository.GetPessoaById(id);
        }

        public List<Pessoa> GetPessoas()
        {
            return _pessoaRepository.GetPessoas();
        }

        public Pessoa UpdatePessoa(string id, Pessoa pessoa)
        {
            _pessoaRepository.UpdatePessoa(id, pessoa);

            return pessoa;
        }
    }
}
