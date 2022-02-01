import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, tipo: string): string {

    if (tipo == 'telefone')
      return this.mascara_TEL(value);

    if (tipo == 'cep')
      return this.mascara_CEP(value);

    return value;
  }
  private limparNumero = (str: string) => {
    return str.replace(/\D/g, "");
  }
  private mascara_TEL = (tel: string) => {
    if (!tel || tel.trim() == "") return "";
    return this.limparNumero(tel)
      .substring(0, 14)
      .replace(/(\d{2})(\d{8,9})/gi, "($1) $2");
  }
  private mascara_CEP = (cep: string) => {
    if (!cep || cep.trim() == "") return "";
    return this.limparNumero(cep)
      .substring(0, 14)
      .replace(/(\d{5})(\d{3})/gi, "$1-$2");
  }
}

