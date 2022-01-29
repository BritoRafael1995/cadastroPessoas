﻿using cadastro_pessoas.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Repository.Interface
{
    public interface IPessoasRepository
    {
        void AddPessoa(Pessoa pessoa);
        Pessoa GetPessoaById(string id);
        List<Pessoa> GetPessoas();
        void UpdatePessoa(string id, Pessoa pessoa);
    }
}
