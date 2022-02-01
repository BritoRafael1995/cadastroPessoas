using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cadastro_pessoas.API.Filters
{
    public class ExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (context.Exception is InvalidOperationException)
                context.Result = new BadRequestResult();
            else if (context.Exception is DuplicateWaitObjectException)
                context.Result = new ConflictObjectResult("CPF já cadastrado");
            else if (context.Exception is NullReferenceException)
                context.Result = new NotFoundResult();
        }
    }
}
