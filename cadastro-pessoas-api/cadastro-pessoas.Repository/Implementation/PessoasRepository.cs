using cadastro_pessoas.Model;
using cadastro_pessoas.Repository.Conexao;
using cadastro_pessoas.Repository.Interface;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Repository.Implementation
{
    public class PessoasRepository : Contexto, IPessoasRepository
    {
        public void AddPessoa(Pessoa pessoa)
        {
            try
            {
                _collectionPessoa.InsertOne(pessoa);
            }
            catch
            {
                throw new InvalidOperationException();
            }
        }

        public void DeletePessoa(string id)
        {
            try
            {
                var retorno = _collectionPessoa.FindOneAndDelete(p => p.Id == id);

                if(retorno == null)
                    throw new NullReferenceException();
            }
            catch
            {
                throw new NullReferenceException();
            }
        }

        public Pessoa GetPessoaByCpf(string cpf)
        {
            try
            {
                return _collectionPessoa.Find(p => p.CPF == cpf).FirstOrDefault();
            }
            catch
            {
                throw new InvalidOperationException();
            }
        }

        public Pessoa GetPessoaById(string id)
        {
            try
            {
                return _collectionPessoa.Find(p => p.Id == id).First();
            }
            catch
            {
                throw new InvalidOperationException();
            }
        }

        public List<Pessoa> GetPessoas()
        {
            try
            {
                return _collectionPessoa.Find("{}").ToList();
            }
            catch
            {
                throw new InvalidOperationException();
            }
        }

        public void UpdatePessoa(string id, Pessoa pessoa)
        {
            try
            {
                _collectionPessoa.FindOneAndReplace(p => p.Id == id, pessoa);
            }
            catch
            {
                throw new InvalidOperationException();
            }
        }
    }
}
