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
                throw new Exception();
            }
        }

        public void DeletePessoa(string id)
        {
            try
            {
                _collectionPessoa.FindOneAndDelete(p => p.Id == id);
            }
            catch
            {
                throw new Exception();
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
                throw new Exception();
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
                throw new Exception();
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
                throw new Exception();
            }
        }
    }
}
