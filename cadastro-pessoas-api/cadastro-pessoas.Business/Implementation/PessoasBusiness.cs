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
            ValidatePessoa(pessoa);

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
            ValidatePessoa(pessoa);

            _pessoaRepository.UpdatePessoa(id, pessoa);

            return pessoa;
        }

        private void ValidatePessoa(Pessoa pessoa)
        {
            if (string.IsNullOrEmpty(pessoa.Nome) || 
                string.IsNullOrEmpty(pessoa.Sobrenome) ||
                string.IsNullOrEmpty(pessoa.Cidade) ||
                string.IsNullOrEmpty(pessoa.CPF) ||
                string.IsNullOrEmpty(pessoa.Email) ||
                string.IsNullOrEmpty(pessoa.Estado) ||
                string.IsNullOrEmpty(pessoa.Logradouro) ||
                string.IsNullOrEmpty(pessoa.Telefone) ||
                pessoa.CEP == 0)
                throw new InvalidOperationException();
            
            if(_pessoaRepository.GetPessoaByCpf(pessoa.CPF) != null)
                throw new DuplicateWaitObjectException();
        }
    }
}
