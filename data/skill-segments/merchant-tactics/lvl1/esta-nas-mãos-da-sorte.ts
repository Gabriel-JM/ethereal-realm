import { Skill } from '../../../../src/types'
import { md } from '../../../utils'

export const estaNasMãosDaSorte = <Skill> {
  id: 'meta_tRju3K9Jin',
  title: 'Está nas mãos da Sorte',
  type: 'active',
  properties: {
    cost: '6 PE'
  },
  description: md`
    Você aprende de um velho conhecido um ritual simples
    mas pode de alguma maneira **alterar a sorte** de um
    indivíduo. Energizando e sacrificando **uma moeda**
    você deve escolher entre cara ou coroa e a arremessa
    com o dedão, caso acerte você passa a ter
    **sucesso garantido** em seu **próximo teste**, mas
    o inverso acontece caso **erre**.
    <br/><br/>
    Contudo, este tipo de movimento demanda um mínimo de
    tempo, então **não** pode ser utilizado em
    **qualquer teste**, por exemplo, você pode jogar a
    moeda antes de um ataque, mas
    **não pode durante uma reação** como uma esquiva.
    <br/><br/>
    Os efeitos deste ritual também
    **não funcionam com magias**, nem suas nem de inimigos.
  `
}
