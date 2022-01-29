using cadastro_pessoas.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Repository.Conexao
{
    public class Contexto
    {
        static readonly string stringConexao = "mongodb://localhost:27017";
        
        private static readonly MongoClient conexao = new MongoClient(stringConexao);

        public static IMongoDatabase Database = conexao.GetDatabase("CadastroPessoas");
        public static IMongoCollection<Pessoa> _collectionPessoa
        {
            get => Database.GetCollection<Pessoa>("pessoa");
        }
    }
}
