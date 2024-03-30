import { CommonItem } from '../../../src/types'
import { detailsList, htmlEntity, md } from '../../utils'

export const kitAlquimico = <CommonItem> {
  id: 'coit_4CryP9IxfO',
  name: 'Kit Alquímico',
  icon: htmlEntity('Briefcase'),
  cost: '$20.',
  description: md`
    Um kit contendo ferramentas para trabalhos de
    alquimia portátil. Nesse kit contem itens como:
    pinças, alicates, potes de preparo, frascos de
    vidro e um amassador. Para simplificar o preparo
    dos itens, será utilizada uma contagem de
    ingredientes e o tempo como custo. A principio
    seria algo bem mais específico com cada tipo de
    ingrediente e seus efeitos, porém isso deixaria
    a gestão desses ingredientes e do preparo deles
    muito mais complexo do que precisa ser. Esse kit
    tem espaço para **30 ingredientes**. Com esse kit
    você pode realizar ações como as seguintes:

    ${detailsList('Ações', [
      `**Coleta:** Você pode coletar ingredientes sempre
      que estiver viajando de um local para outro na
      natureza. Jogue **2D6** para cada viagem de um
      ponto a outro que sua equipe fizer.`,

      `**Preparo:** Que se trata da preparação em si do
      item, isso custa ingredientes e tempo, que varia
      para cada item (você pode ver isso no
      [Manual de Alquimia](/)) só sendo possível de ser
      feito **fora de combate** ou durante um **repouso**.`,
      
      `**Limpeza:** Ingredientes são coletados em sua forma
      **bruta**. Isso faz ser necessário um processo conhecido
      como **limpeza** para que o item é esteja no estado
      correto para uso. Ao coletar ingredientes na natureza
      ou pilhar corpos (se possuir a habilidade), sempre será
      feito esse processo de limpeza automaticamente. Contudo,
      se capacidade de ingredientes do kit já estiver cheio,
      você pode guardar ingredientes **brutos** no inventário
      que poderão ser limpos e tornarem ingredientes. Esse
      processo de limpeza só pode ser realizado **fora de combate**
      ou durante um **repouso**, e custa 1 minuto para
      cada ingrediente bruto.`
    ])}
  `
}
