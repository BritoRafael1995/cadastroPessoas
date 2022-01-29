using cadastro_pessoas.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cadastro_pessoas.Business.Interface
{
    public interface IPessoasBusiness
    {
        Pessoa AddPessoa(Pessoa pessoa);
        List<Pessoa> GetPessoas();
    }
}
