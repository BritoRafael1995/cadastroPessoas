﻿using cadastro_pessoas.Model;
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
    }
}
