import { CommonItem } from '../../../src/types'
import { detailsList, htmlEntity, md } from '../../utils'

export const materiaisForja = <CommonItem> {
  id: 'coit_vXPaMfWy06',
  name: 'Materiais de Forja',
  icon: htmlEntity('HammerPick'),
  cost: 'Varia por raridade.',
  description: md`
    Materiais utilizados com um [Ferreiro](/)
    para reforçar magicamente o poder de ataque
    bruto das armas ou a resitência bruta de
    armaduras e escudos. Esse materiais possuem
    3 variações **Comuns**, **Raros** e
    **Preciosos** cada um sendo necessário em
    certas ocasiões. Você pode comprar um material
    de cada variação pelos seguintes preços:

    ${detailsList('Preços por raridade', [
      '**Comum:** $ 15.',
      '**Raro:** $ 70.',
      '**Precioso:** $ 250.'
    ])}
  `
}