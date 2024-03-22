import { Skill } from '../../../../src/types'
import { md } from '../../../utils'

export const trocoDePreparos = <Skill> {
  id: 'alpr_6sLo5LnLFF',
  title: 'Troco de Preparos (Sab)',
  type: 'rest',
  properties: {
    cost: 'Depende da quantidade e dos itens sendo preparados.'
  },
  description: md`
    Durante o preparo de itens no seu **tempo livre** e **repousos**.
    Você passar a aproveitar qualquer resto que tenha ficado para
    trás de antigos preparos. Sempre que você fizer um item alquímico
    você pode jogar 1D6 - 3 (Mínimo 1) para recuperar uma quantidade
    de ingredientes do preparo. Lembrando que a quantia inicial é
    necessária para preparar o item.
  `
}
